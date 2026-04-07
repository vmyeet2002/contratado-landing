'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section style={{
      padding: '100px 24px',
      background: '#0E0E0E',
      width: '100%',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 56px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '12px',
            marginTop: '0'
          }}>
            Quién Somos
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#FF9062',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '0'
          }}>
            Más de 25 años de experiencia data science
          </p>
        </motion.div>

        {/* Isaac Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '64px 48px',
            background: '#1A1919',
            borderRadius: '12px',
            border: '1px solid rgba(73, 72, 71, 0.15)',
            position: 'relative',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '48px',
            alignItems: 'center'
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
          {/* Avatar Circle */}
          <div style={{
            width: '180px',
            height: '180px',
            minWidth: '180px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            fontWeight: 700,
            color: '#ffffff',
            boxShadow: '0 0 24px rgba(254, 95, 0, 0.3)'
          }}>
            I
          </div>

          {/* Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '4px',
                marginTop: '0',
                letterSpacing: '-0.01em'
              }}>
                Isaac González
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#FF9062',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginTop: '0',
                marginBottom: '16px'
              }}>
                Fundador de CONTRATADO
              </p>
            </div>

            {/* Bio Points */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {[
                {
                  title: '25+ años en Data Science',
                  desc: 'Experiencia práctica en proyectos reales, implantaciones, equipos y estrategia'
                },
                {
                  title: 'Especialización en Psicología de Selección',
                  desc: 'Entrenamiento formal en reclutamiento, selección y evaluación de personal'
                },
                {
                  title: 'Cientos de entrevistas',
                  desc: 'Ha entrevistado, evaluado y seleccionado a cientos de candidatos data'
                },
                {
                  title: 'Mentor de profesionales en transición',
                  desc: 'Ha guiado a profesionales de diferentes sectores a conseguir empleo en data'
                }
              ].map((point, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '12px'
                }}>
                  <span style={{
                    color: '#FF9062',
                    minWidth: '20px',
                    fontWeight: 700,
                    marginTop: '2px'
                  }}>
                    ✓
                  </span>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '4px',
                      marginTop: '0',
                      lineHeight: '1.4'
                    }}>
                      {point.title}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#ADAAAA',
                      marginBottom: '0',
                      marginTop: '0',
                      lineHeight: '1.5'
                    }}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 144, 98, 0.1)'
            }}>
              <p style={{
                fontSize: '15px',
                color: '#ADAAAA',
                fontStyle: 'italic',
                lineHeight: '1.7',
                margin: '0'
              }}>
                "CONTRATADO es el sistema que me hubiera gustado tener cuando empecé. He simplificado 25 años de experiencia en frameworks reproducibles que funcionan."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
