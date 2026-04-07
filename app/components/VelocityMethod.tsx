'use client';

import { motion } from 'framer-motion';

const modules = [
  { number: 1, title: 'Crear Tu Marca Personal', description: 'Diferenciación y posicionamiento' },
  { number: 2, title: 'Presencia Online Estratégica', description: 'LinkedIn, YouTube, Medium: autoridad' },
  { number: 3, title: 'Define Tu Trabajo Ideal', description: 'Elegir tu destino con precisión' },
  { number: 4, title: 'Encuentra Empleos Ocultos', description: 'Las 4 fuentes donde está el 80%' },
  { number: 5, title: 'Portfolio WOW', description: 'Proyectos técnicos en casos de negocio' },
  { number: 6, title: 'CV Irresistible', description: 'Superar ATS y contar tu historia' },
  { number: 7, title: 'Domina El Proceso', description: 'Qué hacer, qué decir en entrevistas' },
  { number: 8, title: 'Negocia Tu Oferta', description: 'Frameworks para cerrar ofertas' },
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
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function VelocityMethod() {
  return (
    <section style={{
      padding: '100px 24px',
      background: '#131313',
      width: '100%',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
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
            Los 8 Módulos
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#FF9062',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '0'
          }}>
            Del Sistema CONTRATADO
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            position: 'relative'
          }}
        >
          {modules.map((module) => (
            <motion.div
              key={module.number}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              style={{
                padding: '28px',
                background: '#1A1919',
                borderRadius: '12px',
                border: '1px solid rgba(73, 72, 71, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#201F1F';
                e.currentTarget.style.borderColor = 'rgba(255, 144, 98, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1A1919';
                e.currentTarget.style.borderColor = 'rgba(73, 72, 71, 0.15)';
              }}
            >
              {/* Module Number Badge */}
              <div style={{
                display: 'inline-flex',
                width: '40px',
                height: '40px',
                marginBottom: '16px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 700,
                color: '#ffffff',
                position: 'relative',
                zIndex: 1
              }}>
                {String(module.number).padStart(2, '0')}
              </div>

              <h3 style={{
                fontSize: '17px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
                marginTop: '0',
                letterSpacing: '-0.01em',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.3
              }}>
                {module.title}
              </h3>

              <p style={{
                fontSize: '13px',
                color: '#ADAAAA',
                lineHeight: 1.6,
                marginBottom: '0',
                marginTop: 'auto',
                fontWeight: 400,
                position: 'relative',
                zIndex: 1
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
