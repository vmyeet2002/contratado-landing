'use client';

import { motion } from 'framer-motion';

const modules = [
  { number: 1, title: 'Marca Personal', description: 'Diferenciación que te coloque en la lista corta' },
  { number: 2, title: 'Presencia Online', description: 'LinkedIn, YouTube, Medium: autoridad sin quemarte' },
  { number: 3, title: 'Tu Trabajo Ideal', description: 'Elegir destino con precisión, no solo aceptar' },
  { number: 4, title: 'Empleos Ocultos', description: 'Las 4 fuentes donde está el 80% de los mejores' },
  { number: 5, title: 'Portfolio WOW', description: 'Proyectos técnicos en casos de negocio' },
  { number: 6, title: 'CV Irresistible', description: 'Superar ATS y contar tu historia' },
  { number: 7, title: 'Domina Proceso', description: 'Qué hacer, qué decir en entrevistas' },
  { number: 8, title: 'Negocia Oferta', description: 'Cerrar ofertas que premien tu valor real' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function VelocityMethod() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#0e0e0e',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Section header */}
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
            marginBottom: '0'
          }}>
            Los 8 Módulos
          </h2>
          <p style={{
            fontSize: '12px',
            color: '#ff9062',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'IBM Plex Mono, monospace',
            marginTop: '12px'
          }}>
            Del Sistema CONTRATADO
          </p>
        </motion.div>

        {/* Modules grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          {modules.map((module) => (
            <motion.div
              key={module.number}
              variants={itemVariants}
              whileHover={{
                y: -3,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                padding: '24px',
                backgroundColor: 'rgba(26, 25, 25, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 25, 25, 0.6)';
                e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 25, 25, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              {/* Module number */}
              <div style={{
                display: 'inline-flex',
                width: '32px',
                height: '32px',
                marginBottom: '16px',
                borderRadius: '6px',
                backgroundColor: '#ff9062',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'IBM Plex Mono, monospace'
              }}>
                {String(module.number).padStart(2, '0')}
              </div>

              {/* Module title */}
              <h3 style={{
                fontSize: '15px',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                color: '#ffffff',
                marginBottom: '10px',
                marginTop: '0',
                lineHeight: '1.3',
                letterSpacing: '-0.005em'
              }}>
                {module.title}
              </h3>

              {/* Module description */}
              <p style={{
                fontSize: '12px',
                color: '#adaaaa',
                lineHeight: 1.6,
                marginBottom: '0',
                marginTop: 'auto',
                fontWeight: 400
              }}>
                {module.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
