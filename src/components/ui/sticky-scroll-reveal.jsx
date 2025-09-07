'use client';
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ['#0f172a', '#000000', '#171717', '#1e293b'];

  const linearGradients = [
    'linear-gradient(to bottom right, #06b6d4, #10b981)',
    'linear-gradient(to bottom right, #ec4899, #6366f1)',
    'linear-gradient(to bottom right, #f97316, #eab308)',
    'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      ref={containerRef}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='relative w-full'
    >
      {/* responsive layout */}
      <div className='flex flex-col md:px-10 lg:flex-row'>
        {/*mobile image*/}
        <motion.div
          animate={{
            backgroundColor:
              backgroundColors[activeCard % backgroundColors.length],
          }}
          className='sticky top-0 flex h-[55vh] lg:hidden items-center justify-center pb-0'
        >
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              'w-100  aspect-[4/3] overflow-hidden rounded-lg shadow-md',
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </div>
        </motion.div>

        {/* text side */}
        <div className='flex-1 px-3 text-justify'>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className='min-h-screen flex flex-col justify-center items-center'
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className='text-3xl sm:text-4xl font-bold text-white'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className='mt-0.5  max-w-md text-gray-200'
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* 👇 desktop image (sticky, side) */}
        <motion.div
          animate={{
            backgroundColor:
              backgroundColors[activeCard % backgroundColors.length],
          }}
          className='sticky top-0 hidden lg:flex h-screen items-center justify-center p-10'
        >
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              'h-100 w-full overflow-hidden rounded-xl shadow-lg',
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
