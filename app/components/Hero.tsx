'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '120px',
      paddingBottom: '120px',
      background: '#0E0E0E',
      overflow: 'hidden'
    }}>
      {/* Kinetic Background Layer */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 144, 98, 0.1) 0%, rgba(255, 144, 98, 0) 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1000px',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Eyebrow Badge */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'inline-block',
            marginBottom: '32px'
          }}
        >
          <div style={{
            padding: '8px 16px',
            borderRadius: '24px',
            background: 'rgba(255, 144, 98, 0.1)',
            border: '1px solid rgba(255, 144, 98, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#FF9062',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              ✨ Candidato Invisible → Contratable
            </span>
          </div>
        </motion.div>

        {/* Hero Headline - AGGRESSIVE SCALE */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(48px, 10vw, 96px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '24px',
            marginTop: '0'
          }}
        >
          Más de 5.000
          <br />
          empleos data
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            sin cubrir en España
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#ADAAAA',
            lineHeight: 1.8,
            maxWidth: '680px',
            marginBottom: '60px',
            marginTop: '0'
          }}
        >
          Pero la mayoría de candidatos no recibe ni una llamada. Descubre el sistema que puede llevarte de candidato invisible a profesional deseado en 45 días.
        </motion.p>

        {/* CTA Buttons - with gradient and neon glow */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '16px 40px',
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
            Acceder al Sistema
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '16px 40px',
              borderRadius: '16px',
              background: 'rgba(19, 19, 19, 0.8)',
              color: '#FF9062',
              border: '1px solid rgba(255, 144, 98, 0.2)',
              backdropFilter: 'blur(10px)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0.4)';
              e.currentTarget.style.background = 'rgba(19, 19, 19, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0.2)';
              e.currentTarget.style.background = 'rgba(19, 19, 19, 0.8)';
            }}
          >
            Ver Casos de Éxito
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
