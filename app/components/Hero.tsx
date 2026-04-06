'use client';

import { motion } from 'framer-motion';
import { StarButton } from './ui/star-button';

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
      paddingTop: '80px',
      paddingBottom: '80px'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(255, 144, 98, 0.15) 0%, rgba(255, 144, 98, 0) 70%)',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      {/* Content container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '1200px',
        padding: '0 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 144, 98, 0.1)',
            border: '1px solid rgba(255, 144, 98, 0.2)',
            marginBottom: '2rem'
          }}
        >
          <span style={{ color: '#ff9062', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            De Candidato Invisible a Candidato Contratable
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: '100px',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            color: '#ffffff',
            margin: '0 0 2rem 0',
            padding: '0'
          }}
        >
          MÁS DE 5.000<br />
          EMPLEOS DATA<br />
          <span style={{ color: '#ff9062' }}>SIN CUBRIR EN ESPAÑA</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontSize: '18px',
            color: '#adaaaa',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 0 3rem 0',
            padding: '0'
          }}
        >
          Pero la mayoría de candidatos no recibe ni una llamada. Descubre el sistema que puede llevarte de candidato invisible a profesional deseado en 45 días.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <StarButton
            lightColor="#ff9062"
            backgroundColor="#fe5f00"
            className="px-8 py-4 text-base font-bold uppercase tracking-wider"
          >
            Acceder al Sistema CONTRATADO
          </StarButton>
          <StarButton
            lightColor="#adaaaa"
            backgroundColor="#262626"
            className="px-8 py-4 text-base font-semibold uppercase tracking-wider border border-gray-700"
          >
            Ver Casos de Éxito
          </StarButton>
        </motion.div>
      </div>
    </section>
  );
}
