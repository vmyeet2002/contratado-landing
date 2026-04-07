'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '64px 24px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      backgroundColor: '#0e0e0e'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '48px',
        gridAutoFlow: 'dense'
      }}>
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#ff9062',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 600,
              color: '#ffffff'
            }}>
              C
            </div>
            <span style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'IBM Plex Mono, monospace'
            }}>
              CONTRATADO
            </span>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#7d7a7a',
            lineHeight: '1.6'
          }}>
            De candidato invisible a contratable en 45 días.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'IBM Plex Mono, monospace',
            marginBottom: '16px'
          }}>
            Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Inicio', 'Módulos', 'Precios', 'Contacto'].map((link) => (
              <li key={link} style={{ marginBottom: '8px' }}>
                <motion.a
                  whileHover={{ color: '#ff9062' }}
                  href="#"
                  style={{
                    fontSize: '12px',
                    color: '#7d7a7a',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'IBM Plex Mono, monospace',
            marginBottom: '16px'
          }}>
            Legal
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Privacidad', 'Términos', 'Cookies'].map((link) => (
              <li key={link} style={{ marginBottom: '8px' }}>
                <motion.a
                  whileHover={{ color: '#ff9062' }}
                  href="#"
                  style={{
                    fontSize: '12px',
                    color: '#7d7a7a',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          maxWidth: '1100px',
          margin: '48px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center'
        }}
      >
        <p style={{
          fontSize: '11px',
          color: '#7d7a7a',
          letterSpacing: '0.05em',
          fontFamily: 'IBM Plex Mono, monospace',
          margin: 0
        }}>
          © 2025 CONTRATADO • España
        </p>
      </motion.div>
    </footer>
  );
}
