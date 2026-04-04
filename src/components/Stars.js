import { useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
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

        const starsCount = 100;
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
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                star.x += star.vx * star.speed;
                star.y += star.vy * star.speed;

                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,255,255,0.75)";
                ctx.fill();
            });

            requestAnimationFrame(draw);
        };

        draw();

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
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