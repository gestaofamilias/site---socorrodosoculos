'use client';

import { motion } from 'motion/react';

/**
 * Timeline shared by every animated layer (letters, cracks, glow) so the
 * "shatter -> repair" illusion stays perfectly in sync across all of them.
 * Phases: 0 normal -> 0.15 cracks appear -> 0.35/0.5 fragments peak ->
 * 0.65/0.8 golden glow repairs it -> 0.95/1 back to perfect, loops forever.
 */
const TIMES = [0, 0.15, 0.35, 0.5, 0.65, 0.8, 0.95, 1];
const DURATION = 5; // seconds, within the requested 4–6s window

const FRAGMENT_OFFSETS = [
  { x: -3, y: -4, r: -7 },
  { x: 4, y: 3, r: 6 },
  { x: -2, y: 5, r: -5 },
  { x: 3, y: -4, r: 8 },
  { x: -4, y: 2, r: -8 },
  { x: 2, y: -5, r: 5 },
  { x: -3, y: 4, r: -6 },
  { x: 5, y: -2, r: 7 },
  { x: -2, y: -3, r: -4 },
];

const CRACK_PATHS = [
  'M42,8 L60,30 L46,50 L68,86',
  'M118,4 L98,26 L128,46 L106,90',
  'M178,12 L198,34 L172,54 L194,88',
  'M26,50 L78,44 L128,54 L178,47 L230,56',
  'M250,6 L270,30 L252,54 L274,86',
  'M88,18 L112,52',
];

interface CrackedTextProps {
  text: string;
  className?: string;
}

export default function CrackedText({ text, className = '' }: CrackedTextProps) {
  const letters = text.split('');

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Letters — subtle shatter & reassemble */}
      <span className="relative inline-block">
        {letters.map((char, i) => {
          const offset = FRAGMENT_OFFSETS[i % FRAGMENT_OFFSETS.length];
          return (
            <motion.span
              key={i}
              className="inline-block"
              style={{ willChange: 'transform, filter' }}
              animate={{
                x: [0, 0, offset.x * 0.3, offset.x, offset.x * 0.3, 0, 0, 0],
                y: [0, 0, offset.y * 0.3, offset.y, offset.y * 0.3, 0, 0, 0],
                rotate: [0, 0, offset.r * 0.3, offset.r, offset.r * 0.3, 0, 0, 0],
                filter: [
                  'drop-shadow(0 0 0px rgba(255,212,0,0))',
                  'drop-shadow(0 0 0px rgba(255,212,0,0))',
                  'drop-shadow(0 0 2px rgba(255,212,0,0.25))',
                  'drop-shadow(0 0 3px rgba(255,212,0,0.4))',
                  'drop-shadow(0 0 12px rgba(255,212,0,0.95))',
                  'drop-shadow(0 0 4px rgba(255,212,0,0.5))',
                  'drop-shadow(0 0 0px rgba(255,212,0,0))',
                  'drop-shadow(0 0 0px rgba(255,212,0,0))',
                ],
              }}
              transition={{ duration: DURATION, repeat: Infinity, ease: 'easeInOut', times: TIMES }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          );
        })}
      </span>

      {/* Crack lines */}
      <svg
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      >
        {CRACK_PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#FFD400"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0, 1, 1, 1, 1, 0, 0],
              opacity: [0, 0, 0.9, 1, 0.9, 0.5, 0, 0],
            }}
            transition={{
              duration: DURATION,
              repeat: Infinity,
              ease: 'easeInOut',
              times: TIMES,
              delay: i * 0.03,
            }}
          />
        ))}
      </svg>

      {/* Golden repair glow sweeping across the word */}
      <motion.span
        aria-hidden
        className="absolute inset-y-[-20%] w-1/3 pointer-events-none"
        style={{
          background: 'linear-gradient(100deg, transparent, rgba(255,212,0,0.95), transparent)',
          filter: 'blur(5px)',
          mixBlendMode: 'plus-lighter',
        }}
        animate={{
          left: ['-45%', '-45%', '-45%', '-20%', '45%', '125%', '125%', '125%'],
          opacity: [0, 0, 0, 0.2, 1, 0.6, 0, 0],
        }}
        transition={{ duration: DURATION, repeat: Infinity, ease: 'easeInOut', times: TIMES }}
      />
    </span>
  );
}
