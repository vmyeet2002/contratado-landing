'use client';

import { motion } from 'framer-motion';
import { StarButton } from './ui/star-button';

export default function FinalCTA() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#0e0e0e',
      width: '100%'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '840px',
          margin: '0 auto',
          padding: '64px 48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(26, 25, 25, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle top accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 144, 98, 0.3), transparent)',
          pointerEvents: 'none'
        }} />

        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 52px)',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontWeight: 400,
          color: '#ffffff',
          marginBottom: '20px',
          letterSpacing: '-0.01em',
          lineHeight: 1.25
        }}>
          ¿Listo para cambiar de trabajo?
        </h2>

        <p style={{
          fontSize: '15px',
          color: '#d0cdcd',
          marginBottom: '40px',
          lineHeight: 1.8,
          maxWidth: '640px',
          margin: '0 auto 40px'
        }}>
          El siguiente nivel de tu carrera requiere un nuevo nivel de conocimiento. Accede al Sistema CONTRATADO hoy y cambia tu futuro profesional en 45 días.
        </p>

        <StarButton
          lightColor="#ff9062"
          backgroundColor="#fe5f00"
          className="px-10 py-3 text-sm font-semibold uppercase tracking-wider"
        >
          Acceder a CONTRATADO
        </StarButton>
      </motion.div>
    </section>
  );
}
