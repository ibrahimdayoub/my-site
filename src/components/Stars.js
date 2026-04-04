"use client";
import { useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Canvas setup + DPI scaling (for sharp rendering)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width, height;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = width + "px";
            canvas.style.height = height + "px";

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();

        // Generate stars with random motion + twinkle properties
        const starsCount = 50;
        const stars = [];

        for (let i = 0; i < starsCount; i++) {
            const angle = Math.random() * Math.PI * 2.5;

            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5 + 0.25,
                speed: Math.random() * 0.1 + 0.05,
                vx: Math.cos(angle),
                vy: Math.sin(angle),

                // Twinkle system (smooth brightness animation)
                alpha: Math.random(),
                twinkleSpeed: Math.random() * 0.05 + 0.01,
                phase: Math.random() * Math.PI * 2,
            });
        }

        // Mouse-based parallax control
        let mouseX = 0;
        let mouseY = 0;

        // Main animation loop
        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                // Parallax depth based on star size
                const depth = star.size * 0.5;

                // Movement + parallax influence
                star.x += star.vx * star.speed + mouseX * depth;
                star.y += star.vy * star.speed + mouseY * depth;

                // Wrap around screen edges
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                // Twinkle animation (sin wave)
                star.phase += star.twinkleSpeed;
                star.alpha = 0.3 + Math.abs(Math.sin(star.phase)) * 0.7;

                // Draw star with glow
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
                ctx.shadowBlur = 5;
                ctx.shadowColor = "white";
                ctx.fill();
            });

            requestAnimationFrame(draw);
        };

        draw();

        // Track mouse position for parallax effect
        const handleMouseMove = (e) => {
            mouseX = (e.clientX - width / 2) / width;
            mouseY = (e.clientY - height / 2) / height;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resize);

        // Cleanup listeners on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}

export default Stars;