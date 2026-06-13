import { useRef, useEffect } from "react";
import './particles.css';

export function ParticlesSnakeRacional({ children }) {
    const canvasRef = useRef(null);
    const animationIdRef = useRef(null);
    const forwardParticlesRef = useRef([]);
    const backwardParticlesRef = useRef([]);

    const numParticles = 100;          // Número de partículas (forman la serpiente)
    const maxTrailLength = 150;          // Longitud máxima de la estela
    const trailGrowthRate = 0.6;         // Velocidad de crecimiento de la estela
    const speed = 0.0002;                 // Velocidad de avance sobre la curva

    // Dentro del componente, definimos un rango de desplazamiento máximo (en píxeles)
    const maxVerticalOffset = 100;   // Las serpientes se separán hasta 30px arriba/abajo

    // ------------------------------------------------------------------
    // Definición de la curva paramétrica racional (x(t), y(t))
    // t en [0, 1]. Se puede cambiar por cualquier función racional.
    // Ejemplo actual: una "serpiente" horizontal (onda racional senoidal)
    // ------------------------------------------------------------------
    const rationalCurve = (t, width, height) => {
        // Mapeamos t al rango [0, 2π] para la onda
        const theta = t * 2 * Math.PI;

        // Aproximación racional de sin(theta) usando Padé [3/2]
        // sin(theta) ≈ (theta - theta^3/6) / (1 + theta^2/20)
        const sinApprox = (theta - theta ** 3 / 6) / (1 + theta ** 2 / 20);

        // x avanza linealmente de izquierda a derecha
        const x = t * width;

        // y oscila alrededor del centro con la onda racional
        const amplitude = height * 0.3;
        const y = height / 2 + sinApprox * amplitude;

        return { x, y };
    };

    // Opción A: Elipse racional (versión simplificada con seno/coseno, más estable)
    const rationalCurveElipse = (t, width, height) => {
        const theta = t * 2 * Math.PI;
        const rx = width * 0.4;    // ancho de la elipse
        const ry = height * 0.3;   // alto de la elipse
        const cx = width / 2;
        const cy = height / 2;
        return { x: cx + rx * Math.cos(theta), y: cy + ry * Math.sin(theta) };
    };

    // Opción B: Elipse puramente racional (usa parámetro p = (t-0.5)*10)
    const rationalCurveElipsePure = (t, width, height) => {
        const p = (t - 0.5) * 10;
        const xNum = 1 - p * p;
        const xDen = 1 + p * p;
        const yNum = 2 * p;
        const yDen = 1 + p * p;
        const x = width * (0.5 + 0.4 * (xNum / xDen));
        const y = height * (0.5 + 0.3 * (yNum / yDen));
        return { x, y };
    };

    // Opción C: Curva en forma de 8
    const rationalCurveEight = (t, width, height) => {
       const u = 2 * t - 1;
       const x = width * (0.5 + 0.4 * u);
       const y = height * (0.5 + 0.3 * (u / (1 + u*u)));
       return { x, y };
    };

    // ------------------------------------------------------------------
    // Clase Particle actualizada: se mueve por la curva racional
    // ------------------------------------------------------------------
    class Particle {
        /*
        constructor(tOffset, width, height) {
            this.t = tOffset;
            this.tOffset = tOffset;
            this.trail = [];
            this.maxTrailLength = 10;

            // NUEVO: offset aleatorio en Y (también puedes añadir offset en X si quieres)
            this.yOffset = (Math.random() - 0.5) * maxVerticalOffset;
            // Opcional: offset en X
            // this.xOffset = (Math.random() - 0.5) * maxHorizontalOffset;
        }
        */
       constructor(tOffset, width, height, reverse = false) {
            this.t = tOffset;
            this.reverse = reverse;   // true = movimiento hacia atrás
            this.trail = [];
            this.maxTrailLength = maxTrailLength; // Iniciar con la longitud máxima
            this.yOffset = (Math.random() - 0.5) * maxVerticalOffset;

            // Precargar el trail con posiciones anteriores (para que no aparezca de golpe)
            this.prebuildTrail(width, height);
        }

        // Calcula posiciones hacia atrás para llenar el trail desde el inicio
        prebuildTrail(width, height) {
            const steps = maxTrailLength;
            let t_value = this.t;
            // Si la partícula avanza, para preconstruir vamos hacia atrás; si retrocede, hacia adelante
            const delta = this.reverse ? -0.001 : 0.001; // pequeño incremento para muestrear
            for (let i = 0; i < steps; i++) {
                let t_sample = t_value - delta * i;
                // Aseguramos que t_sample esté en [0,1] envolviendo
                if (t_sample < 0) t_sample += 1;
                if (t_sample > 1) t_sample -= 1;
                const { x, y } = rationalCurve(t_sample, width, height);
                this.trail.push({ x, y: y + this.yOffset });
            }
            // Invertir el trail para que la cabeza sea la posición actual
            this.trail.reverse();
        }

        // Actualiza la posición según la curva racional
        /*
        update(width, height) {
            this.t += speed;
            if (this.t > 1) this.t -= 1;

            // Obtener posición base de la curva racional
            let { x, y } = rationalCurve(this.t, width, height);

            // Aplicar offset personal
            y += this.yOffset;
            // x += this.xOffset;  // si quieres desplazamiento horizontal también

            // Resto igual: guardar en trail, podar, etc.
            this.trail.push({ x, y });
            if (this.maxTrailLength < maxTrailLength) {
                this.maxTrailLength += trailGrowthRate;
            }
            while (this.trail.length > Math.floor(this.maxTrailLength)) {
                this.trail.shift();
            }
        }
        */

        update(width, height) {
            // Actualizar t según dirección
            if (this.reverse) {
                this.t -= speed;
                if (this.t < 0) this.t += 1;
            } else {
                this.t += speed;
                if (this.t > 1) this.t -= 1;
            }

            // Obtener posición actual en la curva
            let { x, y } = rationalCurve(this.t, width, height);
            y += this.yOffset;

            // Agregar nueva posición al trail
            this.trail.push({ x, y });

            // Mantener longitud máxima
            while (this.trail.length > this.maxTrailLength) {
                this.trail.shift();
            }
        }

        // Dibujar la estela (efecto serpiente)
        /*
        draw(ctx) {
            if (this.trail.length < 2) return;

            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.lineWidth = 3; // grosor de la serpiente

            for (let i = 0; i < this.trail.length - 1; i++) {
                // alpha: 0 en la cola, 1 en la cabeza
                const alpha = (i + 1) / (this.trail.length - 1);
                ctx.strokeStyle = `rgba(62, 119, 176, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(this.trail[i].x, this.trail[i].y);
                ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
                ctx.stroke();
            }
        }
        */

        draw(ctx) {
            if (this.trail.length < 2) return;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.lineWidth = 3;
            for (let i = 0; i < this.trail.length - 1; i++) {
                const alpha = (i + 1) / (this.trail.length - 1);
                // Diferentes colores para cada flujo (azul y naranja)
                const color = this.reverse ? `rgba(219, 112, 147, ${alpha})` : `rgba(62, 119, 176, ${alpha})`;
                ctx.strokeStyle = color;
                ctx.beginPath();
                ctx.moveTo(this.trail[i].x, this.trail[i].y);
                ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
                ctx.stroke();
            }
        }
    }

    // Inicializar todas las partículas con fases equiespaciadas
    /*
    const initParticles = (width, height) => {
        const particles = [];
        for (let i = 0; i < numParticles; i++) {
            const tOffset = i / numParticles; // fases repartidas uniformemente
            particles.push(new Particle(tOffset, width, height));
        }
        particlesRef.current = particles;
    };

    // Animación principal
    const animate = (ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);

        for (let p of particlesRef.current) {
            p.update(width, height);
            p.draw(ctx);
        }

        animationIdRef.current = requestAnimationFrame(() =>
            animate(ctx, width, height)
        );
    };
    */

    // Inicializar partículas de ambos flujos
    const initParticles = (width, height) => {
        const forward = [];
        const backward = [];
        for (let i = 0; i < numParticles; i++) {
            const tOffset = i / numParticles;
            forward.push(new Particle(tOffset, width, height, false));
            backward.push(new Particle(tOffset, width, height, true));
        }
        forwardParticlesRef.current = forward;
        backwardParticlesRef.current = backward;
    };

    const animate = (ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);

        for (let p of forwardParticlesRef.current) {
            p.update(width, height);
            p.draw(ctx);
        }
        for (let p of backwardParticlesRef.current) {
            p.update(width, height);
            p.draw(ctx);
        }

        animationIdRef.current = requestAnimationFrame(() =>
            animate(ctx, width, height)
        );
    };

    // Configuración del canvas y ResizeObserver
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = canvas.parentElement;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            const { width, height } = container.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
            initParticles(width, height);
        };

        resizeCanvas();

        const resizeObserver = new ResizeObserver(() => resizeCanvas());
        resizeObserver.observe(container);

        animate(ctx, canvas.width, canvas.height);

        return () => {
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="div-canvas-snake">
            <canvas ref={canvasRef} className="screen" />
            <div className="div-child">{children}</div>
        </div>
    );
}