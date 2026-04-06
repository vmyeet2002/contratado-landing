'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50" style={{
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(14, 14, 14, 0.95)',
      borderBottom: '1px solid rgba(255, 144, 98, 0.1)',
      padding: '16px 24px'
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#ff9062',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 900,
          color: '#ffffff'
        }}>
          C
        </div>
        <span style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          CONTRATADO
        </span>
      </motion.div>
    </header>
  );
}
