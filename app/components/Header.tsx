'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header
      className="w-full fixed top-0 z-50 glass-morphism-nav"
      style={{
        borderBottom: '1px solid rgba(73, 72, 71, 0.15)',
        padding: '16px 24px'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.div
            whileHover={{ scale: 1.08 }}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            C
          </motion.div>
          <span style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            CONTRATADO
          </span>
        </div>

        {/* Nav Links */}
        <div style={{
          display: 'flex',
          gap: '32px'
        }}>
          {['Módulos', 'Precios', 'Contacto'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ color: '#FF9062' }}
              href="#"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#ADAAAA',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
