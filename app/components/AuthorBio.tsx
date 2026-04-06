'use client';

import { motion } from 'framer-motion';

export default function AuthorBio() {
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left: Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#1a1919',
              height: '400px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 144, 98, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <div style={{
              padding: '24px'
            }}>
              <div style={{
                fontSize: '64px',
                marginBottom: '16px'
              }}>
                👨‍💼
              </div>
              <p style={{
                fontSize: '14px',
                color: '#adaaaa'
              }}>
                Isaac González<br />
                Creador del Sistema CONTRATADO
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '24px',
              margin: '0 0 24px 0',
              lineHeight: 1.2
            }}>
              CONTRATADO!
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#ff9062',
              fontWeight: 700,
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              El sistema completo para conseguir tu primer trabajo como Analista o Científico de Datos
            </p>

            <div style={{
              marginBottom: '32px'
            }}>
              <p style={{
                fontSize: '15px',
                color: '#adaaaa',
                lineHeight: 1.8,
                marginBottom: '16px'
              }}>
                Soy Isaac González, llevo ya casi <strong style={{ color: '#ffffff' }}>25 años dedicado en exclusiva a Data Science y Data Analytics</strong>.
              </p>

              <p style={{
                fontSize: '15px',
                color: '#adaaaa',
                lineHeight: 1.8,
                marginBottom: '16px'
              }}>
                En mi carrera fui desde junior hasta Director, pasando por todos los puestos intermedios. <strong style={{ color: '#ffffff' }}>He entrevistado a cientos de candidatos</strong> para elegir a los profesionales que han sido parte de mis equipos.
              </p>

              <p style={{
                fontSize: '15px',
                color: '#adaaaa',
                lineHeight: 1.8,
                marginBottom: '16px'
              }}>
                Pero lo que a lo mejor no sabías es que <strong style={{ color: '#ffffff' }}>de formación soy psicólogo, con especialidad en selección de personal</strong>. Así que también conozco al dedillo cómo funciona un proceso de selección y cómo te van a evaluar.
              </p>

              <p style={{
                fontSize: '15px',
                color: '#adaaaa',
                lineHeight: 1.8,
                marginBottom: '16px'
              }}>
                Tengo una doble visión privilegiada: entiendo qué quieren los decisores de Data, pero también cómo funcionan los procesos de selección. Eso me permitió hacer coaching uno a uno que funcionaba, pero no me compensaba económicamente.
              </p>

              <p style={{
                fontSize: '15px',
                color: '#adaaaa',
                lineHeight: 1.8
              }}>
                Lo que sí he hecho es <strong style={{ color: '#ffffff' }}>paquetizar toda esa experiencia en el CONTRATADO</strong> para poder ofrecerlo de forma mucho más económica a quien esté interesado en cambiar su situación laboral.
              </p>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: '#1a1919',
              borderRadius: '12px',
              borderLeft: '4px solid #ff9062'
            }}>
              <p style={{
                fontSize: '14px',
                color: '#ffffff',
                fontWeight: 700,
                margin: '0 0 12px 0'
              }}>
                Mi misión es clara:
              </p>
              <p style={{
                fontSize: '14px',
                color: '#adaaaa',
                margin: 0,
                lineHeight: 1.6
              }}>
                Que dejes de ser un candidato invisible y te conviertas en alguien que las empresas buscan activamente. Y que lo hagas en menos de 45 días, sabiendo exactamente qué hacer en cada paso del camino.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
