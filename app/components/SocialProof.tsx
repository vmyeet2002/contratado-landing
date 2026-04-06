'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SocialProof() {
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              UNRIVALED RESULTS.
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#adaaaa',
              lineHeight: 1.8
            }}>
              Read how Kinetic Electric has transformed high-performance trajectories for industry leaders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                padding: '32px',
                backgroundColor: '#1a1919',
                borderLeft: '4px solid #ff9062',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '16px'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '16px',
                      color: '#ff9062',
                      fontVariationSettings: "'FILL' 1"
                    }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p style={{
                color: '#ffffff',
                fontStyle: 'italic',
                lineHeight: 1.8,
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                "The level of detail in the assessment phase alone was a game-changer for my focus. Kinetic Electric is in a league of its own."
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#262626',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJh8zYnvRW6keNL8Uuhtt4-RDBhz_vYomOulmwbvejPZePRbj9Z_KfO9xMdDkNFUkROwiAxuhBUSXtjoinMSYPx07cEmJ7yFD2MrxFaeCiip1C3hEpGyR8Sw9xiodWh0bn8MHoNGAIXrp24nVBxwlNpUh4BhwDOZVbIGGwqXBNY0trWL0e4ghb3maGN5N65hIR3CLqbh-oz4AiS_ADyZocq2IslBQR5P9Qjo5GXP_Ovv-K3pIjVVS74nVGh8kv2fdDGrt0LEbo1FfM"
                    alt="Marcus Thorne"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 4px 0'
                  }}>
                    Marcus Thorne
                  </h4>
                  <span style={{
                    fontSize: '10px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#adaaaa'
                  }}>
                    Director, Stratum Inc.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
