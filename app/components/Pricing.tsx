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
        maxWidth: '920px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '-0.01em',
            lineHeight: '1.2',
            marginBottom: '16px'
          }}>
            Invierte en Tu Futuro
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#adaaaa',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Un máster cuesta 8.000€–15.000€. Un bootcamp, 4.000€–6.000€. Pero sin saber conseguir trabajo, no te sirve de nada.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            padding: '56px 48px',
            backgroundColor: 'rgba(26, 25, 25, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle top accent line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 144, 98, 0.3), transparent)',
            pointerEvents: 'none'
          }} />

          {/* Price display */}
          <h3 style={{
            fontSize: '16px',
            fontFamily: 'IBM Plex Mono, monospace',
            fontWeight: 500,
            color: '#ff9062',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            margin: '0 0 12px 0'
          }}>
            CONTRATADO
          </h3>

          <div style={{
            fontSize: '56px',
            fontWeight: 300,
            color: '#ffffff',
            margin: '0 0 8px 0',
            fontFamily: "'Instrument Serif', Georgia, serif",
            letterSpacing: '-0.02em'
          }}>
            247€
          </div>

          <p style={{
            fontSize: '12px',
            color: '#adaaaa',
            fontFamily: 'IBM Plex Mono, monospace',
            letterSpacing: '0.05em',
            marginBottom: '36px',
            margin: '0 0 36px 0'
          }}>
            + IVA • ACCESO INMEDIATO
          </p>

          {/* Includes section */}
          <div style={{
            maxWidth: '560px',
            margin: '0 auto 40px',
            textAlign: 'left'
          }}>
            <h4 style={{
              fontSize: '12px',
              color: '#ff9062',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'IBM Plex Mono, monospace',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              Incluye:
            </h4>
            {[
              '25 años de experiencia paquetizados en un sistema aplicable',
              'Sistema que puede cambiar definitivamente tu situación laboral',
              'Plantillas y recursos (valor ~300€)',
              '8 módulos con frameworks reproducibles',
              'Checklists y guiones probados en casos reales'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '12px',
                fontSize: '13px',
                color: '#d0cdcd',
                lineHeight: '1.5'
              }}>
                <span style={{ color: '#ff9062', minWidth: '16px', flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Exclusions section */}
          <div style={{
            maxWidth: '560px',
            margin: '0 auto 40px',
            textAlign: 'left',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '32px'
          }}>
            <h4 style={{
              fontSize: '12px',
              color: '#adaaaa',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'IBM Plex Mono, monospace',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              No incluye:
            </h4>
            {[
              'Revisión personalizada de CVs o portfolios',
              'Consultoría individual por ningún canal',
              'Devolución (contenido digital descargable)'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '12px',
                fontSize: '13px',
                color: '#7d7a7a',
                lineHeight: '1.5'
              }}>
                <span style={{ minWidth: '16px', flexShrink: 0 }}>—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <StarButton
            lightColor="#ff9062"
            backgroundColor="#fe5f00"
            className="px-10 py-3 text-sm font-semibold uppercase tracking-wider"
          >
            Acceder al Sistema
          </StarButton>
        </motion.div>

        {/* FAQ callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: '48px',
            padding: '32px 40px',
            backgroundColor: 'rgba(255, 144, 98, 0.04)',
            border: '1px solid rgba(255, 144, 98, 0.08)',
            borderRadius: '8px',
            textAlign: 'left'
          }}
        >
          <h4 style={{
            fontSize: '14px',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: '#ffffff',
            marginBottom: '12px',
            margin: '0 0 12px 0'
          }}>
            ¿Cómo es tan barato vs. consultoría personalizada?
          </h4>
          <p style={{
            fontSize: '13px',
            color: '#adaaaa',
            lineHeight: 1.8,
            margin: '0'
          }}>
            Una consultoría cuesta 1.500€. Aquí tienes el mismo sistema por 247€ porque está paquetizado. Es el primer año disponible públicamente. Es posible que no vuelva a este precio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
