'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section style={{
      padding: '100px 24px',
      background: '#0E0E0E',
      width: '100%'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '64px 48px',
          borderRadius: '16px',
          background: 'rgba(26, 25, 25, 0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(73, 72, 71, 0.15)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 144, 98, 0.3), transparent)',
          pointerEvents: 'none'
        }} />

        <h2 style={{
          fontSize: 'clamp(40px, 6vw, 52px)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          marginBottom: '20px',
          marginTop: '0'
        }}>
          ¿Listo para cambiar de trabajo?
        </h2>

        <p style={{
          fontSize: '16px',
          color: '#ADAAAA',
          marginBottom: '40px',
          lineHeight: 1.8,
          maxWidth: '700px',
          margin: '0 auto 40px'
        }}>
          El siguiente nivel de tu carrera requiere un nuevo nivel de conocimiento. Accede al Sistema CONTRATADO hoy y cambia tu futuro profesional en 45 días.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            padding: '16px 48px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
            color: '#ffffff',
            border: 'none',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            filter: 'drop-shadow(0 0 12px rgba(254, 95, 0, 0.4))',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(254, 95, 0, 0.6))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(254, 95, 0, 0.4))';
          }}
        >
          Acceder a CONTRATADO
        </motion.button>
      </motion.div>
    </section>
  );
}
