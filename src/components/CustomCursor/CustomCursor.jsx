import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
    },
  };

  return (
    <motion.div
      id="custom-cursor"
      className="fixed top-0 left-0 z-50 pointer-events-none"
      variants={cursorVariants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <motion.div 
        className="absolute rounded-full bg-primary-500 dark:bg-primary-500"
        style={{ width: '100%', height: '100%' }}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: isHovering ? [0.8, 1.2, 0.9] : 0.8,
          opacity: isHovering ? 0.8 : 0.5
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CustomCursor;