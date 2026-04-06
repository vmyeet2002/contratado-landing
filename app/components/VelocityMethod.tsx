'use client';

import { motion } from 'framer-motion';

const modules = [
  { number: 1, title: 'Crear Tu Marca Personal', description: 'Diferenciación y posicionamiento que te coloque en la lista corta' },
  { number: 2, title: 'Presencia Online Estratégica', description: 'LinkedIn, YouTube, Medium: cómo construir autoridad sin quemarte' },
  { number: 3, title: 'Define Tu Trabajo Ideal', description: 'Elegir tu destino con precisión quirúrgica, no solo aceptar lo que hay' },
  { number: 4, title: 'Encuentra Empleos Ocultos', description: 'Las 4 fuentes secretas donde está el 80% de los mejores trabajos' },
  { number: 5, title: 'Portfolio WOW', description: 'Convertir proyectos técnicos en casos de negocio que impresionen' },
  { number: 6, title: 'CV Irresistible', description: 'Superar ATS y convertir tu experiencia en una historia imposible de ignorar' },
  { number: 7, title: 'Domina El Proceso', description: 'Qué hacer, qué decir, cómo superar cada tipo de entrevista' },
  { number: 8, title: 'Negocia Tu Oferta', description: 'Frameworks psicológicos para cerrar ofertas que premien tu valor real' },
];

export default function VelocityMethod() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#0e0e0e',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '80px',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }}
        >
          Los 8 Módulos Del Sistema CONTRATADO
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                padding: '24px',
                backgroundColor: '#1a1919',
                border: '1px solid rgba(255, 144, 98, 0.2)',
                borderRadius: '16px',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                margin: '0 auto 16px',
                borderRadius: '8px',
                backgroundColor: '#ff9062',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 900,
                color: '#ffffff'
              }}>
                {module.number}
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                {module.title}
              </h3>
              <p style={{
                fontSize: '12px',
                color: '#adaaaa',
                lineHeight: 1.5
              }}>
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
