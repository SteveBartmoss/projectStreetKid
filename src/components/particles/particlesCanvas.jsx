import { useEffect, useRef } from "react"
import './particles.css'

export function PartcilesCanvas({ children }) {

    const canvasRef = useRef(null)
    const animationIdRef = useRef(null)
    const particlesRef = useRef([])

    const numParticles = 100
    const maxDistance = 150

    class Particle {

        constructor(width, height) {
            this.x = Math.random() * width
            this.y = Math.random() * height
            this.vx = (Math.random() - 0.5) * 1
            this.vy = (Math.random() - 0.5) * 1
        }

        update(width, height) {
            this.x += this.vx
            this.y += this.vy
            if (this.x < 0 || this.x > width) this.vx *= -1
            if (this.y < 0 || this.y > height) this.vy *= -1
        }

        draw(ctx) {
            ctx.beginPath()
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
            ctx.fillStyle = '#ffffff'
            ctx.fill()
        }

    }

    const initParticles = (width, height) => {
        const arr = []
        for (let i = 0; i < numParticles; i++) {
            arr.push(new Particle(width, height))
        }
        particlesRef.current = arr
    }

    const animate = (ctx, width, height) => {

        ctx.clearRect(0, 0, width, height)


        const particles = particlesRef.current

        for (let p of particles) {
            p.update(width, height)
            p.draw(ctx)
        }

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x
                const dy = particles[i].y - particles[j].y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < maxDistance) {
                    ctx.beginPath()
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke()
                }
            }
        }

        animationIdRef.current = requestAnimationFrame(() => animate(ctx, width, height))

    }

    useEffect(() => {
        const canvas = canvasRef.current
        const container = canvas.parentElement
        const ctx = canvas.getContext('2d')

        const resizeCanvas = () => {
            const {width, height} = container.getBoundingClientRect()
            canvas.width = width
            canvas.height = height
            initParticles(width, height)
        }

        resizeCanvas()

        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas()
        })
        resizeObserver.observe(container)

        animate(ctx, canvas.width, canvas.height)

        return() => {
            if(animationIdRef.current){
                cancelAnimationFrame(animationIdRef.current)
            }
            resizeObserver.disconnect(animationIdRef.current)
        }
    },[])

    return (
        <div className="div-canvas">
            <canvas ref={canvasRef} className="screen" />
            <div className="div-child">
                {children}
            </div>
        </div>
    )
}