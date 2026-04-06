'use client';

import { motion } from 'framer-motion';

const partners = ['STRATUM', 'NEXUS', 'VERTEX', 'PRISM', 'OMNI'];

export default function AuthorityBar() {
  return (
    <section style={{
      padding: '60px 24px',
      backgroundColor: '#000000',
      borderTop: '1px solid rgba(73, 72, 71, 0.1)',
      borderBottom: '1px solid rgba(73, 72, 71, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#adaaaa',
            fontWeight: 500,
            textTransform: 'uppercase',
            marginBottom: '40px',
            opacity: 0.5
          }}
        >
          Global Partners & Recognition
        </motion.p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '60px',
          opacity: 0.3,
          transition: 'opacity 0.5s ease'
        }}>
          {partners.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                fontSize: '20px',
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff9062'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
