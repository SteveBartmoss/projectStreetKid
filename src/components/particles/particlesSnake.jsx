import { useEffect, useRef } from "react";
import './particles.css';

export function PartcilesSnake({ children }) {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const particlesRef = useRef([]);

  const numParticles = 1000;
  // Ya no necesitamos maxDistance porque no conectaremos partículas entre sí
  const maxTrailLengthLimit = 500;   // Longitud máxima final del rastro
  const trailGrowthRate = 0.2;       // Cuánto crece la longitud por frame

  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;
      // Historial de posiciones (la última posición es la cabeza)
      this.trail = [{ x: this.x, y: this.y }];
      // Longitud actual del rastro (va aumentando)
      this.maxTrailLength = 10;       // Comienza con un rastro pequeño
    }

    update(width, height) {
      // Movimiento normal
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Añadir la posición actual al rastro
      this.trail.push({ x: this.x, y: this.y });

      // Hacer crecer la longitud del rastro progresivamente
      if (this.maxTrailLength < maxTrailLengthLimit) {
        this.maxTrailLength += trailGrowthRate;
      }

      // Eliminar las posiciones más antiguas para mantener la longitud deseada
      while (this.trail.length > Math.floor(this.maxTrailLength)) {
        this.trail.shift();
      }
    }

    draw(ctx) {

      if (this.trail.length > 1) {
        // Configuramos el estilo de línea una sola vez
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 3; // Mismo grosor que el diámetro de la cabeza (antes radio 3)

        for (let i = 0; i < this.trail.length - 1; i++) {
          // alpha: 0 en la cola, 1 en la cabeza (usamos i+1 para que el último tramo sea completamente opaco)
          const alpha = (i + 1) / (this.trail.length - 1);
          ctx.strokeStyle = `rgba(62, 119, 176, ${alpha})`; 
          ctx.beginPath();
          ctx.moveTo(this.trail[i].x, this.trail[i].y);
          ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
          ctx.stroke();
        }
      }
    }
  }

  const initParticles = (width, height) => {
    const arr = [];
    for (let i = 0; i < numParticles; i++) {
      arr.push(new Particle(width, height));
    }
    particlesRef.current = arr;
  };

  const animate = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;

    for (let p of particles) {
      p.update(width, height);
      p.draw(ctx);
    }

    // Ya no dibujamos líneas entre partículas (efecto anterior eliminado)

    animationIdRef.current = requestAnimationFrame(() =>
      animate(ctx, width, height)
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    animate(ctx, canvas.width, canvas.height);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
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