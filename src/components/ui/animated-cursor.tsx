import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    
    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    const hoverTargets = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    hoverTargets.forEach((element) => {
      element.addEventListener('mouseover', handleLinkHoverStart);
      element.addEventListener('mouseout', handleLinkHoverEnd);
    });
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      hoverTargets.forEach((element) => {
        element.removeEventListener('mouseover', handleLinkHoverStart);
        element.removeEventListener('mouseout', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'rgba(76, 175, 80, 0.4)',
      mixBlendMode: 'difference' as const,
    },
    clicked: {
      width: 24,
      height: 24,
      x: position.x - 12,
      y: position.y - 12,
      backgroundColor: 'rgba(76, 175, 80, 0.6)',
    },
    hovered: {
      width: 64,
      height: 64,
      x: position.x - 32,
      y: position.y - 32,
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      mixBlendMode: 'difference' as const,
    },
    hidden: {
      opacity: 0,
    },
  };

  const springConfig = { damping: 25, stiffness: 300 };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-primary mix-blend-difference"
      variants={cursorVariants}
      animate={hidden ? 'hidden' : clicked ? 'clicked' : linkHovered ? 'hovered' : 'default'}
      transition={{
        type: 'spring',
        ...springConfig
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        pointerEvents: 'none',
      }}
    />
  );
}