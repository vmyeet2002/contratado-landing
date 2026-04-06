'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Visionary() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#131313',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative'
            }}
          >
            <div style={{
              aspectRatio: '4/5',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1a1919',
              border: '1px solid rgba(73, 72, 71, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              position: 'relative',
              zIndex: 10
            }}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdYJMqb2K23u2QXiGUQYUkjqysT7A_dNtWaRr_91lno0E0Bdagb9rTeojuSzfQLBIXm6JOGVnaa1PDQAEPODSnB1fifjn1y7jbpFeFHdOJQWuOSb_3OmCSxieihjRFimQ4CI1VsWjG3dr5AuZPPH5Vez3wHDoRWJNUZtuqZ2emh_AYryLlv0v1ZvlOCThNz8erSkZMjsLdf_iHhqMr3eNGD9JvWX0TLpUECA4phbIk2PZbw6EjG-agZ1xwTD4stb-iRhKxcV9SX90z"
                alt="Professional executive"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '-40px',
                left: '-40px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 144, 98, 0.15) 0%, rgba(255, 144, 98, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
              color: '#ffffff'
            }}>
              THE PHILOSOPHY OF{' '}
              <span style={{ color: '#ff9062' }}>ABSOLUTE PERFORMANCE.</span>
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#adaaaa',
              lineHeight: 1.8
            }}>
              Kinetic Electric was founded on the principle that peak performance is a science, not a secret. We provide the tools for elite professionals to dismantle their plateaus.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {[
                'Bespoke 1-on-1 performance architecture',
                'Data-driven biological optimization',
                'Global executive network access',
              ].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span className="material-symbols-outlined" style={{
                    color: '#ff9062',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    check_circle
                  </span>
                  <p style={{
                    color: '#ffffff',
                    fontWeight: 500,
                    margin: 0
                  }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
