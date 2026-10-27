'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovered = false;
    let isHeader = false;
    let isClicked = false;
    let animationFrameId: number;

    const dotEl = dotRef.current;
    const ringEl = ringRef.current;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotEl) dotEl.style.opacity = '1';
        if (ringEl) ringEl.style.opacity = '1';
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        isHeader = Boolean(target.closest('header'));
        isHovered = Boolean(
          target.closest('a, button, [role="button"], .btn-chamfer, input, select, textarea, label, [data-cursor-hover]')
        );
      }
    };

    const onMouseDown = () => {
      isClicked = true;
    };

    const onMouseUp = () => {
      isClicked = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotEl) dotEl.style.opacity = '0';
      if (ringEl) ringEl.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotEl) dotEl.style.opacity = '1';
      if (ringEl) ringEl.style.opacity = '1';
    };

    // Ultra-fast 120fps render loop with zero React re-render overhead
    const render = () => {
      if (isVisible) {
        // Dot follows cursor immediately with 0 delay
        const isInteractive = isHovered || isHeader;
        if (dotEl) {
          const dotSize = isClicked ? 6 : isInteractive ? 11 : 8;
          dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
          dotEl.style.width = `${dotSize}px`;
          dotEl.style.height = `${dotSize}px`;
        }

        // Ring follows tightly with swift responsiveness (0.42 factor = fast, fluid, zero lag)
        ringX += (mouseX - ringX) * 0.42;
        ringY += (mouseY - ringY) * 0.42;

        if (ringEl) {
          // Large prominent expansion: Buttons & Header = 56px, Normal = 36px, Click = 26px
          let targetSize = 36;
          if (isClicked) {
            targetSize = 26;
          } else if (isInteractive) {
            targetSize = 56;
          }

          ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
          ringEl.style.width = `${targetSize}px`;
          ringEl.style.height = `${targetSize}px`;

          // Clean glowing cursor ring matching luxury design (transparent interior to avoid duplicate badge effect)
          if (isClicked) {
            ringEl.style.backgroundColor = 'rgba(235, 82, 80, 0.15)';
            ringEl.style.borderColor = '#EB5250';
            ringEl.style.boxShadow = '0 0 16px rgba(235, 82, 80, 0.6)';
          } else if (isInteractive) {
            ringEl.style.backgroundColor = 'transparent';
            ringEl.style.borderColor = '#FAC716';
            ringEl.style.boxShadow = '0 0 18px rgba(250, 199, 22, 0.65)';
          } else {
            ringEl.style.backgroundColor = 'transparent';
            ringEl.style.borderColor = '#FAC716';
            ringEl.style.boxShadow = '0 0 12px rgba(250, 199, 22, 0.35)';
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Outer Glow Ring - High Intensity Button Golden Amber with Sleek 2px Border */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none border-[2px] border-[#FAC716] transition-[width,height,background-color,border-color,box-shadow] duration-150 ease-out opacity-0"
        style={{
          boxShadow: '0 0 16px rgba(250, 199, 22, 0.55), 0 0 30px rgba(250, 199, 22, 0.25)',
          willChange: 'transform, width, height',
        }}
      />

      {/* Inner Point Dot - Instant Real-Time Tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none bg-[#FAC716] opacity-0"
        style={{
          boxShadow: '0 0 10px #FAC716, 0 0 18px #FAC716',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
