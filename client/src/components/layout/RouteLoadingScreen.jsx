import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark from '../../images/logo_dark_transparent.png';

export default function RouteLoadingScreen() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const prevKeyRef = useRef(location.key);
  const isFirstMount = useRef(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevKeyRef.current = location.key;
      return;
    }
    if (location.key === prevKeyRef.current) return;
    prevKeyRef.current = location.key;

    setVisible(true);
    timeoutRef.current = setTimeout(() => setVisible(false), 900);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [location.key]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          aria-live="polite"
          aria-label="Loading"
        >
          <motion.img
            src={logoDark}
            alt="Intelera"
            className="h-14 w-auto object-contain"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#3730A3] via-[#4338CA] to-[#6366F1]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
