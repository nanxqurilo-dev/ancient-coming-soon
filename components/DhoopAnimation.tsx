"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  orbitSpeed: number;
  orbitRadius: number;
}

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 720;

function createStar(): Star {
  const centerX = CANVAS_WIDTH / 2;
  const centerY = CANVAS_HEIGHT / 2;
  const angle = Math.random() * Math.PI * 2;
  const orbitRadius = Math.random() * 320 + 30;

  return {
    x: centerX + Math.cos(angle) * orbitRadius,
    y: centerY + Math.sin(angle) * orbitRadius * 0.68,
    radius: Math.random() * 1.7 + 0.35,
    alpha: Math.random() * 0.7 + 0.25,
    twinkleSpeed: Math.random() * 0.024 + 0.006,
    orbitSpeed: (Math.random() * 0.0009 + 0.0002) * (Math.random() > 0.5 ? 1 : -1),
    orbitRadius,
  };
}

export default function DhoopAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * pixelRatio;
    canvas.height = CANVAS_HEIGHT * pixelRatio;
    context.scale(pixelRatio, pixelRatio);

    const stars = Array.from({ length: 150 }, createStar);
    let frame = 0;
    let animationFrameId = 0;

    const drawGalaxy = () => {
      frame += 1;
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      const centerX = CANVAS_WIDTH / 2;
      const centerY = CANVAS_HEIGHT / 2;

      const halo = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 330);
      halo.addColorStop(0, "rgba(255, 149, 53, 0.2)");
      halo.addColorStop(0.34, "rgba(193, 155, 94, 0.09)");
      halo.addColorStop(0.72, "rgba(61, 77, 151, 0.08)");
      halo.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = halo;
      context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      context.save();
      context.translate(centerX, centerY);
      context.rotate(frame * 0.0008);
      context.scale(1, 0.42);

      const ring = context.createRadialGradient(0, 0, 80, 0, 0, 330);
      ring.addColorStop(0, "rgba(255, 255, 255, 0)");
      ring.addColorStop(0.42, "rgba(212, 175, 100, 0.13)");
      ring.addColorStop(0.55, "rgba(255, 126, 40, 0.12)");
      ring.addColorStop(0.72, "rgba(116, 130, 255, 0.08)");
      ring.addColorStop(1, "rgba(255, 255, 255, 0)");

      context.strokeStyle = ring;
      context.lineWidth = 52;
      context.beginPath();
      context.ellipse(0, 0, 300, 120, 0, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      stars.forEach((star, index) => {
        const angle = frame * star.orbitSpeed + index * 0.74;
        const x = centerX + Math.cos(angle) * star.orbitRadius;
        const y = centerY + Math.sin(angle) * star.orbitRadius * 0.56;
        const pulse = Math.sin(frame * star.twinkleSpeed + index) * 0.35 + 0.65;

        context.beginPath();
        context.fillStyle = `rgba(255, 233, 179, ${star.alpha * pulse})`;
        context.shadowColor = "rgba(255, 158, 63, 0.7)";
        context.shadowBlur = star.radius * 7;
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(drawGalaxy);
    };

    drawGalaxy();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[580px] items-center justify-center overflow-hidden rounded-full bg-black">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-95"
      />

      <div className="absolute inset-[9%] rounded-full border border-gold/15 shadow-[inset_0_0_70px_rgba(193,155,94,0.16),0_0_90px_rgba(255,128,40,0.12)]" />
      <div className="absolute h-[52%] w-[52%] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 aspect-square w-[78%] max-w-[450px]">
        <Image
          src="/images/dhoop-cone-luxury.png"
          alt="Premium luxury dhoop cone on a round stone platform"
          fill
          priority
          sizes="(max-width: 768px) 88vw, 450px"
          className="object-contain drop-shadow-[0_32px_70px_rgba(0,0,0,0.85)]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[18%] h-7 w-7 -translate-x-1/2 rounded-full bg-orange-500/80 blur-md animate-[emberPulse_1.8s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[19%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-amber-200 shadow-[0_0_18px_8px_rgba(255,107,29,0.55)] animate-[emberPulse_1.35s_ease-in-out_infinite]"
        />
      </div>

      <style jsx>{`
        @keyframes emberPulse {
          0%,
          100% {
            opacity: 0.64;
            transform: translateX(-50%) scale(0.88);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.18);
          }
        }
      `}</style>
    </div>
  );
}
