/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [step, setStep] = useState(0); // 0: Card, 1: Bouquet

  const handleOpen = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center overflow-hidden font-sans selection:bg-pink-200">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="card-view"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            className="relative cursor-pointer"
            onClick={handleOpen}
          >
            {/* Card Container */}
            <motion.div
              whileHover={{ y: -10, rotate: -1 }}
              className="relative w-64 h-80 bg-white rounded-2xl shadow-2xl border-4 border-pink-100 overflow-hidden flex flex-col items-center justify-center p-6"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #fff0f5 100%)'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-200 to-blue-200" />
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-200 to-pink-200" />
              
              <div className="text-center space-y-6 z-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-5xl"
                >
                  💌
                </motion.div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-pink-400 font-serif tracking-tight">Para Paty</h2>
                  <p className="text-blue-300 text-sm font-medium italic animate-pulse">Toca para abrir</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-pink-100 text-2xl">❤️</div>
              <div className="absolute bottom-4 left-4 text-blue-100 text-2xl">✨</div>
            </motion.div>

            <div className="absolute -top-12 -left-12 w-24 h-24 bg-pink-100/40 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-blue-100/40 rounded-full blur-2xl animate-pulse delay-1000" />
          </motion.div>
        ) : (
          <motion.div
            key="bouquet-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center w-full max-w-2xl text-center px-4"
          >
            {/* Header Message */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 space-y-2"
            >
              <div className="flex items-center justify-center gap-3">
                <h1 className="text-5xl md:text-7xl font-bold text-[#ff69b4] drop-shadow-sm font-serif">
                  Para ti
                </h1>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-5xl md:text-7xl"
                >
                  ❤️
                </motion.span>
              </div>
              <p className="text-xl text-gray-500 font-medium italic">¡Aquí están tus flores amarillas, Paty!</p>
            </motion.div>

            {/* Wrapped Bouquet (Image 2 Style) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: 'spring', damping: 15 }}
              className="relative mt-8"
            >
              {/* Sparkles/Rays Effect */}
              <div className="absolute inset-0 -z-10">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                      rotate: [0, 90, 180]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2 + Math.random() * 2,
                      delay: i * 0.2
                    }}
                    className="absolute text-yellow-300 text-2xl pointer-events-none"
                    style={{
                      top: '40%',
                      left: '50%',
                      transform: `rotate(${i * 30}deg) translateY(-140px)`
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </div>

              {/* Wrapping Paper */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 h-64 bg-[#f5deb3] clip-path-wrap z-0 shadow-lg border-x border-b border-[#e6cc99]" />

              {/* The Flowers */}
              <div className="relative z-10 flex flex-wrap justify-center items-center w-72 h-72">
                <div className="absolute top-0 left-1/2 -translate-x-1/2"><SunflowerHead color="#fdd835" size="w-28 h-28" /></div>
                <div className="absolute top-14 left-4"><SunflowerHead color="#ffeb3b" size="w-24 h-24" /></div>
                <div className="absolute top-14 right-4"><SunflowerHead color="#fbc02d" size="w-24 h-24" /></div>
                <div className="absolute top-32 left-1/2 -translate-x-1/2"><SunflowerHead color="#fff176" size="w-22 h-22" /></div>
                
                {/* Gold Ribbon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="relative w-28 h-14 flex justify-center items-center">
                    <div className="absolute w-10 h-10 bg-yellow-600 rounded-full border-2 border-yellow-700 z-10 shadow-md" />
                    <div className="absolute left-0 w-14 h-8 bg-yellow-500 rounded-l-full -rotate-12 border-y border-yellow-600 shadow-sm" />
                    <div className="absolute right-0 w-14 h-8 bg-yellow-500 rounded-r-full rotate-12 border-y border-yellow-600 shadow-sm" />
                    <div className="absolute bottom-[-15px] left-4 w-5 h-14 bg-yellow-500 rounded-sm -rotate-15 z-0 shadow-sm" />
                    <div className="absolute bottom-[-15px] right-4 w-5 h-14 bg-yellow-500 rounded-sm rotate-15 z-0 shadow-sm" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Reset Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(0)}
              className="mt-24 px-8 py-3 bg-pink-300 text-white rounded-full font-bold shadow-lg hover:bg-pink-400 transition-all"
            >
              Ver de nuevo ✨
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .clip-path-wrap {
          clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        }
      `}</style>
    </div>
  );
}

function SunflowerHead({ color, size = "w-20 h-20" }: { color: string, size?: string }) {
  return (
    <div className={`relative ${size}`}>
      {/* Brown Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-[#5d4037] rounded-full z-10 border-2 border-[#3e2723] shadow-inner" />
      
      {/* Petals */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0"
      >
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[22%] h-[50%] rounded-full origin-bottom shadow-sm border border-yellow-400/20"
            style={{ 
              backgroundColor: color,
              transform: `translateX(-50%) rotate(${i * (360/14)}deg)` 
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
