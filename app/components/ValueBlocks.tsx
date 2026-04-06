'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: 'trending_up',
    title: 'Hay Trabajo',
    description: 'El problema no es falta de trabajo. En España hay más de 5.000 puestos data sin cubrir. El reto real es DESTACAR frente al resto de candidatos.',
  },
  {
    icon: 'star',
    title: 'Portfolio "WOW"',
    description: 'Un portfolio excelente te vuelve contratable aunque seas junior. Te enseñamos a crear casos de negocio que impresionan a los hiring managers.',
  },
  {
    icon: 'lock',
    title: 'Domina el Proceso',
    description: 'Conoce los secretos de los procesos de selección. Desde el CV hasta la negociación salarial, domina cada paso del camino.',
  },
];

export default function ValueBlocks() {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '60px',
            textAlign: 'center'
          }}
        >
          Los 3 Elementos Clave Del Éxito
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                padding: '32px',
                backgroundColor: '#1a1919',
                border: '1px solid rgba(73, 72, 71, 0.1)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <motion.span
                className="material-symbols-outlined"
                style={{
                  fontSize: '48px',
                  color: '#ff9062',
                  marginBottom: '16px',
                  display: 'block'
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                {value.icon}
              </motion.span>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
                textAlign: 'left'
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#adaaaa',
                lineHeight: 1.6,
                textAlign: 'left'
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
