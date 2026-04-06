'use client';

import { motion } from 'framer-motion';

const icons = [
  { icon: 'public', label: 'Website' },
  { icon: 'group', label: 'Community' },
  { icon: 'hub', label: 'Hub' },
];

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '60px 24px',
      borderTop: '1px solid rgba(73, 72, 71, 0.1)',
      backgroundColor: '#0e0e0e'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }}
        >
          CONTRATADO
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            gap: '32px'
          }}
        >
          {icons.map((item, index) => (
            <motion.a
              key={item.icon}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: '#ff9062', scale: 1.2 }}
              href="#"
              style={{
                color: '#777575',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '12px'
          }}
        >
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontWeight: 500,
            color: '#777575',
            margin: 0
          }}>
            © 2024 KINETIC ELECTRIC. ALL RIGHTS RESERVED.
          </p>
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
          }}>
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
              <motion.a
                key={link}
                whileHover={{ color: '#ff9062' }}
                href="#"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: '#777575',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none'
                }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
