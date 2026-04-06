'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    name: 'Miguel',
    role: 'De 47 años a Data Scientist',
    context: '47 años, venía de un sector totalmente diferente',
    result: 'Nuevo puesto, reconversión y sin cambiarse de ciudad',
    actions: ['Cambió posicionamiento a perfil híbrido', 'Usó el modelo de relato de transición en seniors', 'Aplicó el hack de crear un caso ad-hoc para la empresa']
  },
  {
    name: 'Francisco',
    role: 'De Manager a Big Four',
    context: 'Mucha experiencia previa tanto técnica (3 años de DS) como de negocio (manager y ejecutivo corporate), pero no conseguía progresar',
    result: '3 meses después un nuevo puesto de manager en una Big Four',
    actions: ['Identificaron que estaba enfocando casi todo mal', 'Tenía excelente materia prima pero fatalmente ejecutada', 'Aplicó los cambios en varias partes del proceso']
  },
  {
    name: 'Antoni',
    role: 'Cambio a Data Analytics',
    context: 'Ingeniero con 2 años de experiencia en tareas no data, sin progresión',
    result: 'Cambio a Data y nuevo puesto de Data Analyst',
    actions: ['Hizo Data Analytics Mastery para capacitarse técnicamente', 'Hizo CONTRATADO y aplicó los pasos a rajatabla', 'Como buen ingeniero, siguió el método exactamente']
  },
  {
    name: 'Francisco (otro)',
    role: 'Cambio de Sector',
    context: '40 años, sector tradicional agroalimentario, máster de Big Data pero atascado',
    result: 'Nuevo puesto de analista, cambio de sector, salto profesional',
    actions: ['Hizo CONTRATADO', 'Aplicó el método', 'Logró cambio exitoso después de atascarse']
  }
];

export default function CaseStudies() {
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
          Casos De Éxito Reales
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                padding: '32px',
                backgroundColor: '#1a1919',
                border: '1px solid rgba(255, 144, 98, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#ff9062',
                  borderRadius: '50%'
                }}></div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ff9062',
                  margin: 0
                }}>
                  {caseItem.name}
                </h3>
              </div>

              <h4 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px',
                margin: 0
              }}>
                {caseItem.role}
              </h4>

              <p style={{
                fontSize: '13px',
                color: '#adaaaa',
                lineHeight: 1.5,
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                <strong>Contexto:</strong> {caseItem.context}
              </p>

              <div style={{
                marginBottom: '16px'
              }}>
                {caseItem.actions.map((action, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '8px',
                    fontSize: '12px',
                    color: '#ffffff'
                  }}>
                    <span style={{ color: '#ff9062', minWidth: '16px' }}>✓</span>
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <div style={{
                borderTop: '1px solid rgba(255, 144, 98, 0.1)',
                paddingTop: '16px',
                marginTop: 'auto'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#ff9062',
                  fontWeight: 700,
                  margin: 0
                }}>
                  {caseItem.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
