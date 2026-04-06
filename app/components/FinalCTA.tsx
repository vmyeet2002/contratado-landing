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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '60px 48px',
          borderRadius: '16px',
          backgroundColor: '#1a1919',
          border: '1px solid rgba(73, 72, 71, 0.15)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Top gradient line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #ff9062, transparent)',
          opacity: 0.7
        }} />

        <h2 style={{
          fontSize: '48px',
          fontWeight: 900,
          color: '#ffffff',
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          lineHeight: 1.2
        }}>
          ¿Listo Para Cambiar de Trabajo?
        </h2>

        <p style={{
          fontSize: '18px',
          color: '#adaaaa',
          marginBottom: '40px',
          lineHeight: 1.8,
          maxWidth: '700px',
          margin: '0 auto 40px'
        }}>
          El siguiente nivel de tu carrera requiere un nuevo nivel de conocimiento. Accede al Sistema CONTRATADO hoy y cambia tu futuro profesional en 45 días.
        </p>

        <StarButton
          lightColor="#ff9062"
          backgroundColor="#fe5f00"
          className="px-12 py-4 text-base font-bold uppercase tracking-wider"
        >
          Acceder a CONTRATADO por 247€ + IVA
        </StarButton>
      </motion.div>
    </section>
  );
}
