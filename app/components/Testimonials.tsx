'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Miguel',
    age: '47 años',
    context: 'Venía de un sector totalmente diferente',
    actions: [
      'Cambió posicionamiento a perfil híbrido',
      'Usó el modelo de relato de transición en seniors',
      'Aplicó el hack de crear un caso ad-hoc para la empresa'
    ],
    result: 'Nuevo puesto, reconversión y sin cambiarse de ciudad',
    icon: '🚀'
  },
  {
    name: 'Francisco',
    age: '40+ años',
    context: 'Mucha experiencia previa técnica (3 años DS) y de negocio (manager)',
    actions: [
      'Identificamos que lo estaba enfocando casi todo mal',
      'Tenía excelente materia prima, pero fatalmente ejecutada',
      'Aplicó los cambios en varias partes del proceso'
    ],
    result: '3 meses después: nuevo puesto de manager en una Big Four',
    icon: '📈'
  },
  {
    name: 'Antoni',
    age: 'Ingeniero',
    context: '2 años de experiencia en tareas no data. No veía progresión',
    actions: [
      'Hizo Data Analytics Mastery para capacitarse técnicamente',
      'Hizo el CONTRATADO y aplicó los pasos a rajatabla',
      'Implementó cada framework paso a paso'
    ],
    result: 'Cambio a Data y nuevo puesto de Data Analyst',
    icon: '⭐'
  },
  {
    name: 'Francisco (otro)',
    age: '40 años',
    context: 'Sector tradicional: agroalimentario. Máster de Big Data hecho',
    actions: [
      'Hizo el CONTRATADO',
      'Aplicó el método completo',
      'Salto profesional significativo'
    ],
    result: 'Nuevo puesto de analista, cambio de sector, salto profesional',
    icon: '✨'
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Testimonials() {
  return (
    <section style={{
      padding: '100px 24px',
      background: '#0E0E0E',
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
            Casos de Éxito
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#FF9062',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '0'
          }}>
            Desde candidatos invisibles a profesionales deseados
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{
                padding: '32px',
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
              {/* Icon */}
              <div style={{
                fontSize: '36px',
                marginBottom: '16px',
                lineHeight: '1'
              }}>
                {testimonial.icon}
              </div>

              {/* Name & Info */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#FF9062',
                marginBottom: '4px',
                marginTop: '0',
                letterSpacing: '-0.01em'
              }}>
                {testimonial.name}
              </h3>

              <p style={{
                fontSize: '12px',
                color: '#ADAAAA',
                marginBottom: '16px',
                marginTop: '0',
                fontWeight: 500
              }}>
                {testimonial.age}
              </p>

              {/* Context */}
              <div style={{
                padding: '16px',
                backgroundColor: 'rgba(255, 144, 98, 0.05)',
                borderRadius: '8px',
                marginBottom: '16px',
                borderLeft: '3px solid #FF9062'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#ffffff',
                  margin: '0',
                  lineHeight: '1.5',
                  fontWeight: 500
                }}>
                  {testimonial.context}
                </p>
              </div>

              {/* Actions */}
              <div style={{ marginBottom: '16px' }}>
                {testimonial.actions.map((action, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '8px',
                    fontSize: '12px',
                    color: '#d0cdcd',
                    lineHeight: '1.4'
                  }}>
                    <span style={{ color: '#FF9062', minWidth: '16px' }}>✓</span>
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 144, 98, 0.1)'
              }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#FF9062',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '80px',
            padding: '40px',
            textAlign: 'center',
            background: 'rgba(255, 144, 98, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 144, 98, 0.1)'
          }}
        >
          <p style={{
            fontSize: '15px',
            color: '#ADAAAA',
            lineHeight: '1.8',
            margin: '0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            No puedo prometerte que TÚ lo conseguirás, pero SÍ puedo enseñarte todos los hacks de más de 25 años de experiencia. Y cuando las haces bien la probabilidad de éxito es mucho mayor.
          </p>
          <p style={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#FF9062',
            marginTop: '20px',
            marginBottom: '0'
          }}>
            Me encantaría que tú fueras nuestro siguiente caso de éxito.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
