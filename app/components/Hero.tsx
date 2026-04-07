'use client';

import { motion } from 'framer-motion';
import { StarButton } from './ui/star-button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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
      overflow: 'hidden',
      backgroundColor: '#0e0e0e',
      paddingTop: '100px',
      paddingBottom: '80px'
    }}>
      {/* Refined background */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(to bottom, rgba(255, 144, 98, 0.03) 0%, rgba(14, 14, 14, 0) 40%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '900px',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Eyebrow text */}
        <motion.span
          variants={itemVariants}
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: '#ff9062',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'IBM Plex Mono, monospace',
            marginBottom: '20px',
            lineHeight: '1'
          }}
        >
          El Sistema para Candidatos Data
        </motion.span>

        {/* Main heading - Instrument Serif for distinctive editorial feel */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            lineHeight: '1.15',
            letterSpacing: '-0.01em',
            color: '#ffffff',
            marginBottom: '24px',
            marginTop: '0'
          }}
        >
          Más de 5.000 empleos data
          <br />
          <span style={{ color: '#ff9062' }}>sin cubrir en España</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#d0cdcd',
            lineHeight: '1.7',
            maxWidth: '620px',
            marginBottom: '40px',
            marginTop: '0'
          }}
        >
          Pero la mayoría de candidatos no recibe ni una llamada. Descubre el sistema que puede llevarte de candidato invisible a profesional deseado en 45 días.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%'
          }}
        >
          <StarButton
            lightColor="#ff9062"
            backgroundColor="#fe5f00"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider"
          >
            Acceder al Sistema
          </StarButton>
          <StarButton
            lightColor="#adaaaa"
            backgroundColor="#1a1919"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider subtle-border"
          >
            Ver Casos de Éxito
          </StarButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
