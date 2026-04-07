'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '80px 24px 40px',
      borderTop: '1px solid rgba(73, 72, 71, 0.15)',
      backgroundColor: '#0E0E0E'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
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
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #FE5F00 0%, #FF9062 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                color: '#ffffff'
              }}>
                C
              </div>
              <span style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                CONTRATADO
              </span>
            </div>
            <p style={{
              fontSize: '13px',
              color: '#ADAAAA',
              lineHeight: '1.7',
              marginTop: '0'
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
              fontSize: '12px',
              fontWeight: 700,
              color: '#FF9062',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              marginTop: '0'
            }}>
              Explorar
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Inicio', 'Los 8 Módulos', 'Precios', 'Contacto'].map((link) => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <motion.a
                    whileHover={{ color: '#FF9062' }}
                    href="#"
                    style={{
                      fontSize: '13px',
                      color: '#ADAAAA',
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
              fontSize: '12px',
              fontWeight: 700,
              color: '#FF9062',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              marginTop: '0'
            }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Privacidad', 'Términos', 'Cookies'].map((link) => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <motion.a
                    whileHover={{ color: '#FF9062' }}
                    href="#"
                    style={{
                      fontSize: '13px',
                      color: '#ADAAAA',
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

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            borderTop: '1px solid rgba(73, 72, 71, 0.15)',
            paddingTop: '32px',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '12px',
            color: '#7D7A7A',
            letterSpacing: '0.05em',
            margin: '0'
          }}>
            © 2025 CONTRATADO • España • Todos los derechos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
