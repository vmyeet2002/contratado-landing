'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 subtle-border" style={{
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(14, 14, 14, 0.92)',
      padding: '12px 24px'
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {/* Logo mark */}
        <div style={{
          width: '26px',
          height: '26px',
          backgroundColor: '#ff9062',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '0.02em'
        }}>
          C
        </div>
        {/* Logo text */}
        <span style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          lineHeight: '1',
          fontFamily: 'IBM Plex Mono, monospace'
        }}>
          CONTRATADO
        </span>
      </motion.div>
    </header>
  );
}
