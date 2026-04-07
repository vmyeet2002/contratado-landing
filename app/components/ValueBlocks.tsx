'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: 'trending_up',
    title: 'Hay Trabajo',
    description: 'En España hay más de 5.000 puestos data sin cubrir. El reto real es DESTACAR frente al resto de candidatos.',
  },
  {
    icon: 'star',
    title: 'Portfolio "WOW"',
    description: 'Un portfolio excelente te vuelve contratable aunque seas junior. Casos que impresionan a los hiring managers.',
  },
  {
    icon: 'check_circle',
    title: 'Domina el Proceso',
    description: 'Conoce los secretos de los procesos de selección. Desde el CV hasta la negociación salarial.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ValueBlocks() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#0e0e0e',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: '60px',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '-0.01em',
            lineHeight: '1.2',
            marginBottom: '12px'
          }}>
            Los 3 Elementos Clave
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#adaaaa',
            fontWeight: 400,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: 'IBM Plex Mono, monospace'
          }}>
            Del Éxito
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                padding: '32px',
                backgroundColor: 'rgba(26, 25, 25, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle border animation on hover */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '8px',
                border: '1px solid rgba(255, 144, 98, 0)',
                transition: 'border-color 0.3s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0)'}
              />

              <motion.span
                className="material-symbols-outlined"
                style={{
                  fontSize: '40px',
                  color: '#ff9062',
                  marginBottom: '16px',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {value.icon}
              </motion.span>

              <h3 style={{
                fontSize: '18px',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                color: '#ffffff',
                marginBottom: '12px',
                marginTop: '0',
                letterSpacing: '-0.005em',
                position: 'relative',
                zIndex: 1
              }}>
                {value.title}
              </h3>

              <p style={{
                fontSize: '13px',
                color: '#adaaaa',
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
