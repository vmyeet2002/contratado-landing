'use client';

import { motion } from 'framer-motion';
import { StarButton } from './ui/star-button';

export default function Pricing() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#0e0e0e',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <h2 style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }}>
            Invierte En Tu Futuro
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#adaaaa',
            lineHeight: 1.6
          }}>
            Un máster en Data cuesta 8.000€ - 15.000€. Un bootcamp, 4.000€ - 6.000€.<br />
            Pero sin saber cómo conseguir trabajo, no te sirve de nada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            padding: '60px 48px',
            backgroundColor: '#1a1919',
            border: '2px solid rgba(255, 144, 98, 0.3)',
            borderRadius: '16px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top gradient line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #ff9062, transparent)',
            opacity: 0.7
          }} />

          <h3 style={{
            fontSize: '48px',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '8px',
            margin: '0 0 8px 0',
            textTransform: 'uppercase'
          }}>
            CONTRATADO
          </h3>

          <p style={{
            fontSize: '32px',
            color: '#ff9062',
            fontWeight: 700,
            margin: '0 0 24px 0'
          }}>
            247€ + IVA
          </p>

          <p style={{
            fontSize: '14px',
            color: '#adaaaa',
            marginBottom: '32px',
            margin: '0 0 32px 0',
            fontStyle: 'italic'
          }}>
            Acceso inmediato • Contenido para siempre • Acceso total a la vez
          </p>

          <div style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            textAlign: 'left'
          }}>
            <h4 style={{
              fontSize: '16px',
              color: '#ffffff',
              fontWeight: 700,
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              Incluye:
            </h4>
            {[
              'Mi experiencia de 25 años paquetizada en un sistema aplicable',
              'El sistema que puede cambiar definitivamente tu situación laboral',
              'Plantillas y recursos que valen casi 300€',
              '8 módulos completos con frameworks reproducibles',
              'Checklists y guiones que ya han funcionado en casos reales'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '12px',
                fontSize: '14px',
                color: '#ffffff'
              }}>
                <span style={{ color: '#ff9062', minWidth: '20px' }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            textAlign: 'left',
            borderTop: '1px solid rgba(255, 144, 98, 0.1)',
            paddingTop: '24px'
          }}>
            <h4 style={{
              fontSize: '16px',
              color: '#ffffff',
              fontWeight: 700,
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              NO incluye:
            </h4>
            {[
              'Revisión de CVs, portfolios o material individual',
              'Consultoría personalizada por ningún canal',
              'Garantía de devolución (es contenido digital descargable)'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '12px',
                fontSize: '14px',
                color: '#adaaaa'
              }}>
                <span style={{ color: '#ff9062', minWidth: '20px' }}>✗</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <StarButton
            lightColor="#ff9062"
            backgroundColor="#fe5f00"
            className="px-12 py-4 text-base font-bold uppercase tracking-wider"
          >
            Acceder Al Sistema CONTRATADO
          </StarButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '60px',
            padding: '40px 32px',
            backgroundColor: 'rgba(255, 144, 98, 0.05)',
            borderRadius: '12px',
            textAlign: 'center'
          }}
        >
          <h4 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '16px',
            margin: '0 0 16px 0'
          }}>
            ¿Cómo es esto de barato comparado con la consultoría?
          </h4>
          <p style={{
            fontSize: '14px',
            color: '#adaaaa',
            lineHeight: 1.7
          }}>
            Una consultoría de carrera personalizada cuesta 1.500€. Con CONTRATADO, tienes acceso al mismo sistema por 247€ porque lo he paquetizado para que muchas personas puedan beneficiarse sin costar una fortuna. Es simple: este es el primer año que está disponible públicamente. Es posible que no vuelva a estarlo a este precio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
