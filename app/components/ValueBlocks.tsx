'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: 'trending_up',
    title: 'Hay Trabajo',
    description: 'En España hay más de 5.000 puestos data sin cubrir. El reto real es DESTACAR.',
  },
  {
    icon: 'star',
    title: 'Portfolio "WOW"',
    description: 'Un portfolio excelente te vuelve contratable aunque seas junior.',
  },
  {
    icon: 'check_circle',
    title: 'Domina el Proceso',
    description: 'Conoce los secretos de los procesos de selección.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ValueBlocks() {
  return (
    <section style={{
      padding: '100px 24px',
      background: '#0E0E0E',
      width: '100%',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: '80px',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 56px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '12px'
          }}>
            Los 3 Elementos
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#FF9062',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '0'
          }}>
            Clave del Éxito
          </p>
        </motion.div>

        {/* Cards Grid with Overlapping */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{
                padding: '40px 32px',
                background: '#1A1919',
                borderRadius: '12px',
                border: '1px solid rgba(73, 72, 71, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#262626';
                e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1A1919';
                e.currentTarget.style.borderColor = 'rgba(73, 72, 71, 0.15)';
              }}
            >
              {/* Subtle corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255, 144, 98, 0.05) 0%, transparent 100%)',
                borderRadius: '0 12px 0 80px',
                pointerEvents: 'none'
              }} />

              <motion.span
                className="material-symbols-outlined"
                whileHover={{ scale: 1.2, rotate: 8 }}
                style={{
                  fontSize: '44px',
                  color: '#FF9062',
                  marginBottom: '20px',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {value.icon}
              </motion.span>

              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
                marginTop: '0',
                letterSpacing: '-0.01em',
                position: 'relative',
                zIndex: 1
              }}>
                {value.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#ADAAAA',
                lineHeight: 1.7,
                marginBottom: '0',
                marginTop: '0',
                position: 'relative',
                zIndex: 1
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
