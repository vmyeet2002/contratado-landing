'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section style={{
      padding: '100px 24px',
      background: '#0E0E0E',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Header */}
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
            marginBottom: '16px'
          }}>
            Invierte en Tu Futuro
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#ADAAAA',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Un máster cuesta 8.000€–15.000€. Un bootcamp, 4.000€–6.000€. Pero sin saber conseguir trabajo, no te sirve.
          </p>
        </motion.div>

        {/* Pricing Card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            padding: '64px 48px',
            background: 'rgba(26, 25, 25, 0.4)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: '1px solid rgba(73, 72, 71, 0.15)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top gradient line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 144, 98, 0.3), transparent)',
            pointerEvents: 'none'
          }} />

          {/* Price Display */}
          <h3 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#FF9062',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            marginTop: '0'
          }}>
            CONTRATADO
          </h3>

          <div style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            lineHeight: '1'
          }}>
            247€
          </div>

          <p style={{
            fontSize: '13px',
            color: '#ADAAAA',
            letterSpacing: '0.05em',
            marginBottom: '48px',
            marginTop: '8px'
          }}>
            + IVA • ACCESO INMEDIATO • CONTENIDO PARA SIEMPRE
          </p>

          {/* Includes List */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 48px',
            textAlign: 'left'
          }}>
            <h4 style={{
              fontSize: '13px',
              color: '#FF9062',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              marginTop: '0'
            }}>
              Incluye:
            </h4>
            {[
              '25 años de experiencia paquetizados',
              'Sistema reproducible y aplicable',
              '8 módulos con frameworks probados',
              'Plantillas y recursos (valor ~300€)',
              'Checklists y guiones de casos reales'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '12px',
                fontSize: '14px',
                color: '#ffffff',
                lineHeight: '1.6'
              }}>
                <span style={{ color: '#FF9062', minWidth: '20px', flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Exclusions */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 48px',
            textAlign: 'left',
            borderTop: '1px solid rgba(73, 72, 71, 0.15)',
            paddingTop: '32px'
          }}>
            <h4 style={{
              fontSize: '13px',
              color: '#ADAAAA',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              marginTop: '0'
            }}>
              No Incluye:
            </h4>
            {[
              'Revisión personalizada de CVs o portfolios',
              'Consultoría individual por ningún canal',
              'Devolución (es contenido digital)'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '12px',
                fontSize: '14px',
                color: '#7D7A7A',
                lineHeight: '1.6'
              }}>
                <span style={{ minWidth: '20px' }}>—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '16px 48px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
              color: '#ffffff',
              border: 'none',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              filter: 'drop-shadow(0 0 12px rgba(254, 95, 0, 0.4))',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(254, 95, 0, 0.6))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(254, 95, 0, 0.4))';
            }}
          >
            Acceder Al Sistema
          </motion.button>
        </motion.div>

        {/* FAQ Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: '48px',
            padding: '32px 40px',
            background: 'rgba(255, 144, 98, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 144, 98, 0.1)',
            textAlign: 'left'
          }}
        >
          <h4 style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '12px',
            marginTop: '0'
          }}>
            ¿Cómo es tan barato?
          </h4>
          <p style={{
            fontSize: '14px',
            color: '#ADAAAA',
            lineHeight: 1.8,
            margin: '0'
          }}>
            Una consultoría personalizada cuesta 1.500€. Aquí tienes el mismo sistema paquetizado por 247€. Es el primer año disponible públicamente. Es posible que no vuelva a este precio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
