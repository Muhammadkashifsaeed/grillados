'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    const checkHoverTarget = (target: HTMLElement | null) => {
      if (!target) {
        isHeader = false;
        isHovered = false;
        return;
      }
      isHeader = Boolean(target.closest('header'));
      isHovered = Boolean(
        target.closest(
          'a, button, [role="button"], .btn-chamfer, input, select, textarea, label, [data-cursor-hover], summary'
        )
      );
    };

    const updatePosition = (clientX: number, clientY: number, target: HTMLElement | null) => {
      mouseX = clientX;
      mouseY = clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotEl) dotEl.style.opacity = '1';
        if (ringEl) ringEl.style.opacity = '1';
      }

      checkHoverTarget(target);
    };

    // Desktop / Mouse interactions
    const onMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, e.target as HTMLElement | null);
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

    // Mobile / Touch interactions (seamless touch support identical to desktop)
    const onTouchStart = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null;
      updatePosition(touch.clientX, touch.clientY, target);
      isClicked = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null;
      updatePosition(touch.clientX, touch.clientY, target);
    };

    const onTouchEnd = () => {
      isClicked = false;
      isHovered = false;
      isHeader = false;
    };

    // High performance 120fps physics render loop
    const render = () => {
      if (isVisible) {
        const isInteractive = isHovered || isHeader;

        // Inner Point Dot: instant zero-latency tracking
        if (dotEl) {
          const dotSize = isClicked ? 7 : isInteractive ? 12 : 9;
          dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
          dotEl.style.width = `${dotSize}px`;
          dotEl.style.height = `${dotSize}px`;

          if (isClicked) {
            dotEl.style.backgroundColor = '#EB5250';
            dotEl.style.boxShadow = '0 0 12px #EB5250, 0 0 22px rgba(235, 82, 80, 0.9)';
          } else {
            dotEl.style.backgroundColor = '#FAC716';
            dotEl.style.boxShadow = isInteractive
              ? '0 0 14px #FAC716, 0 0 24px rgba(250, 199, 22, 0.9)'
              : '0 0 10px #FAC716, 0 0 18px rgba(250, 199, 22, 0.65)';
          }
        }

        // Outer Ring: fluid spring-like responsiveness (0.40 factor = swift, fluid, zero lag)
        ringX += (mouseX - ringX) * 0.4;
        ringY += (mouseY - ringY) * 0.4;

        if (ringEl) {
          // Prominent expansion: Interactive = 60px, Normal = 38px, Clicked = 28px
          let targetSize = 38;
          if (isClicked) {
            targetSize = 28;
          } else if (isInteractive) {
            targetSize = 60;
          }

          ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
          ringEl.style.width = `${targetSize}px`;
          ringEl.style.height = `${targetSize}px`;

          // Thicker 3px / 3.5px border and enhanced high-intensity golden radiance
          if (isClicked) {
            ringEl.style.backgroundColor = 'rgba(235, 82, 80, 0.2)';
            ringEl.style.borderColor = '#EB5250';
            ringEl.style.borderWidth = '3.5px';
            ringEl.style.boxShadow =
              '0 0 20px rgba(235, 82, 80, 0.9), 0 0 42px rgba(235, 82, 80, 0.45), inset 0 0 10px rgba(235, 82, 80, 0.3)';
          } else if (isInteractive) {
            ringEl.style.backgroundColor = 'rgba(250, 199, 22, 0.1)';
            ringEl.style.borderColor = '#FAC716';
            ringEl.style.borderWidth = '3.5px';
            ringEl.style.boxShadow =
              '0 0 24px rgba(250, 199, 22, 0.9), 0 0 50px rgba(250, 199, 22, 0.45), inset 0 0 14px rgba(250, 199, 22, 0.25)';
          } else {
            ringEl.style.backgroundColor = 'rgba(250, 199, 22, 0.04)';
            ringEl.style.borderColor = '#FAC716';
            ringEl.style.borderWidth = '3px';
            ringEl.style.boxShadow =
              '0 0 18px rgba(250, 199, 22, 0.7), 0 0 34px rgba(250, 199, 22, 0.3), inset 0 0 8px rgba(250, 199, 22, 0.2)';
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Listeners for mouse
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Listeners for mobile touch screens
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);

      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  return (
    <div className="block pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Outer Glow Ring - High Intensity Button Golden Amber with Thick 3px/3.5px Border */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none border-[3px] border-[#FAC716] transition-[width,height,background-color,border-color,border-width,box-shadow] duration-150 ease-out opacity-0"
        style={{
          boxShadow: '0 0 18px rgba(250, 199, 22, 0.7), 0 0 34px rgba(250, 199, 22, 0.3), inset 0 0 8px rgba(250, 199, 22, 0.2)',
          willChange: 'transform, width, height',
        }}
      />

      {/* Inner Point Dot - Instant Real-Time Tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none bg-[#FAC716] opacity-0 transition-[background-color,box-shadow] duration-150 ease-out"
        style={{
          boxShadow: '0 0 10px #FAC716, 0 0 18px rgba(250, 199, 22, 0.65)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
