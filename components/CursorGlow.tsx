"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60]"
      animate={{ x: mousePosition.x - 150, y: mousePosition.y - 150 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.3 }}
      aria-hidden="true"
    >
      <div className="h-[300px] w-[300px] rounded-full bg-cyan/10 blur-3xl" />
    </motion.div>
  );
}
