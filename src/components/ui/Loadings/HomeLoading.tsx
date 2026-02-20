// import { motion } from "framer-motion";

// // পার্টিকেল ইফেক্টের জন্য র‍্যান্ডম ডেটা
// const particles = Array.from({ length: 25 }).map((_, i) => ({
//   id: i,
//   x: Math.random() * 100 - 50 + "%",
//   y: Math.random() * 100 + "%",
//   size: Math.random() * 3 + 1 + "px",
//   duration: Math.random() * 5 + 6,
//   delay: Math.random() * 3,
// }));

// export default function LawFirmLoader() {
//   return (
//     // BASE BACKGROUND: Deep Premium Midnight Navy
//     <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#0A0F1A]">
//       {/* AMBIENT AURORA MESH (Animated Background Glows) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             x: ["0%", "-20%", "10%", "0%"],
//             y: ["0%", "20%", "-10%", "0%"],
//             scale: [1, 1.2, 0.9, 1],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#dbb671]/10 blur-[120px]"
//         />
//         <motion.div
//           animate={{
//             x: ["0%", "20%", "-10%", "0%"],
//             y: ["0%", "-20%", "10%", "0%"],
//             scale: [1, 1.3, 1, 1],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#1e3a8a]/15 blur-[150px]"
//         />
//       </div>

//       {/* FLOATING GOLD PARTICLES */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             initial={{ y: particle.y, x: particle.x, opacity: 0 }}
//             animate={{
//               y: "-20%",
//               opacity: [0, 0.8, 0],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               delay: particle.delay,
//               ease: "linear",
//             }}
//             style={{
//               position: "absolute",
//               width: particle.size,
//               height: particle.size,
//               borderRadius: "50%",
//               backgroundColor: "#dbb671",
//               boxShadow: "0 0 6px 1px rgba(219, 182, 113, 0.4)",
//               left: "50%",
//               top: "0%",
//             }}
//           />
//         ))}
//       </div>

//       {/* --- Main Content Wrapper --- */}
//       <div className="relative z-10 flex flex-col items-center w-full">
//         {/* --- Animated Scales of Justice --- */}
//         <div className="relative flex items-center justify-center w-32 h-32 mb-8 sm:w-40 sm:h-40">
//           <motion.div
//             animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.2, 0.4, 0.2] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 rounded-full bg-[#dbb671] blur-[50px]"
//           />

//           <svg
//             viewBox="0 0 64 64"
//             fill="none"
//             stroke="#dbb671"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_4px_12px_rgba(219,182,113,0.6)]"
//           >
//             <path d="M32 14 V56" />
//             <path d="M22 56 H42" />
//             <path d="M26 52 H38" />
//             <path d="M29 14 H35" />
//             <circle cx="32" cy="11" r="3.5" fill="#dbb671" />

//             <motion.g
//               animate={{ rotate: [-6, 6, -6] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               style={{ originX: "32px", originY: "14px" }}
//             >
//               <line x1="12" y1="18" x2="52" y2="18" />
//               <motion.g
//                 animate={{ rotate: [6, -6, 6] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{ originX: "12px", originY: "18px" }}
//               >
//                 <line x1="12" y1="18" x2="6" y2="34" strokeWidth="1.5" />
//                 <line x1="12" y1="18" x2="18" y2="34" strokeWidth="1.5" />
//                 <path d="M4 34 Q12 40 20 34 Z" fill="#dbb671" stroke="none" />
//               </motion.g>

//               <motion.g
//                 animate={{ rotate: [6, -6, 6] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{ originX: "52px", originY: "18px" }}
//               >
//                 <line x1="52" y1="18" x2="46" y2="34" strokeWidth="1.5" />
//                 <line x1="52" y1="18" x2="58" y2="34" strokeWidth="1.5" />
//                 <path d="M44 34 Q52 40 60 34 Z" fill="#dbb671" stroke="none" />
//               </motion.g>
//             </motion.g>
//           </svg>
//         </div>

//         {/* --- Typography --- */}
//         <div className="flex flex-col items-center gap-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-xl font-extrabold tracking-[0.25em] text-white uppercase sm:text-2xl font-english drop-shadow-[0_2px_8px_rgba(219,182,113,0.3)]"
//           >
//             Shamiul Islam <span className="text-[#dbb671]">&</span> Associates
//           </motion.h2>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 1 }}
//             className="flex items-center gap-4"
//           >
//             <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#dbb671]"></div>
//             <motion.p
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="text-xs font-bold tracking-[0.35em] text-[#dbb671] uppercase sm:text-sm font-english"
//             >
//               Balancing Justice
//             </motion.p>
//             <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#dbb671]"></div>
//           </motion.div>
//         </div>

//         {/* =========================================
//             NEW: Premium Floating Progress Bar
//             ========================================= */}
//         <div className="absolute flex flex-col items-center w-full gap-3 -translate-x-1/2 bottom-12 sm:bottom-16 left-1/2">
//           {/* Progress Track */}
//           <div className="relative w-56 sm:w-72 h-[4px] bg-[#1a2236] rounded-full overflow-hidden border border-white/5 shadow-inner backdrop-blur-md">
//             {/* Glowing Loading Bar */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: "200%" }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-[#dbb671] to-transparent shadow-[0_0_10px_rgba(219,182,113,0.8)]"
//             />
//           </div>
//           {/* Subtle Loading Text */}
//           <motion.p
//             animate={{ opacity: [0.4, 0.9, 0.4] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="text-[9px] sm:text-[11px] text-[#dbb671]/70 uppercase tracking-[0.4em] font-english"
//           >
//             Initializing
//           </motion.p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

// পার্টিকেল ইফেক্টের জন্য র‍্যান্ডম ডেটা
const particles = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100 - 50 + "%",
  y: Math.random() * 100 + "%",
  size: Math.random() * 3 + 1 + "px",
  duration: Math.random() * 5 + 6,
  delay: Math.random() * 3,
}));

export default function LawFirmLoader() {
  return (
    // BASE BACKGROUND: Deep Premium Midnight Navy
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#0A0F1A]">
      {/* AMBIENT AURORA MESH (Animated Background Glows) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ["0%", "-20%", "10%", "0%"],
            y: ["0%", "20%", "-10%", "0%"],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] rounded-full bg-[#dbb671]/10 blur-[100px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            x: ["0%", "20%", "-10%", "0%"],
            y: ["0%", "-20%", "10%", "0%"],
            scale: [1, 1.3, 1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] rounded-full bg-[#1e3a8a]/15 blur-[120px] md:blur-[150px]"
        />
      </div>

      {/* FLOATING GOLD PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ y: particle.y, x: particle.x, opacity: 0 }}
            animate={{
              y: "-20%",
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              backgroundColor: "#dbb671",
              boxShadow: "0 0 6px 1px rgba(219, 182, 113, 0.4)",
              left: "50%",
              top: "0%",
            }}
          />
        ))}
      </div>

      {/* --- Main Content Wrapper (Center Aligned) --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 -mt-10">
        {/* Animated Scales of Justice */}
        <div className="relative flex items-center justify-center mb-6 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 md:mb-8">
          <motion.div
            animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#dbb671] blur-[40px] md:blur-[50px]"
          />

          <svg
            viewBox="0 0 64 64"
            fill="none"
            stroke="#dbb671"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 drop-shadow-[0_4px_12px_rgba(219,182,113,0.6)]"
          >
            <path d="M32 14 V56" />
            <path d="M22 56 H42" />
            <path d="M26 52 H38" />
            <path d="M29 14 H35" />
            <circle cx="32" cy="11" r="3.5" fill="#dbb671" />

            <motion.g
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "32px", originY: "14px" }}
            >
              <line x1="12" y1="18" x2="52" y2="18" />
              <motion.g
                animate={{ rotate: [6, -6, 6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ originX: "12px", originY: "18px" }}
              >
                <line x1="12" y1="18" x2="6" y2="34" strokeWidth="1.5" />
                <line x1="12" y1="18" x2="18" y2="34" strokeWidth="1.5" />
                <path d="M4 34 Q12 40 20 34 Z" fill="#dbb671" stroke="none" />
              </motion.g>

              <motion.g
                animate={{ rotate: [6, -6, 6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ originX: "52px", originY: "18px" }}
              >
                <line x1="52" y1="18" x2="46" y2="34" strokeWidth="1.5" />
                <line x1="52" y1="18" x2="58" y2="34" strokeWidth="1.5" />
                <path d="M44 34 Q52 40 60 34 Z" fill="#dbb671" stroke="none" />
              </motion.g>
            </motion.g>
          </svg>
        </div>

        {/* Typography */}
        <div className="flex flex-col items-center gap-3 text-center md:gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-[0.2em] md:tracking-[0.25em] text-white uppercase font-english drop-shadow-[0_2px_8px_rgba(219,182,113,0.3)] leading-snug"
          >
            Shamiul Islam <span className="text-[#dbb671]">&</span> Associates
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="h-[1px] w-8 md:w-10 bg-gradient-to-r from-transparent to-[#dbb671]"></div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] md:tracking-[0.35em] text-[#dbb671] uppercase font-english whitespace-nowrap"
            >
              Balancing Justice
            </motion.p>
            <div className="h-px w-8 md:w-10 bg-linear-to-l from-transparent to-[#dbb671]"></div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          NEW: Full-width Absolute Bottom Progress Bar
          ========================================= */}
      <div className="absolute left-0 flex flex-col items-center w-full bottom-5">
        {/* Subtle Loading Text floating just above the bar */}
        <motion.p
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-3 sm:mb-4 text-[9px] sm:text-[10px] md:text-xs text-[#dbb671]/70 uppercase tracking-[0.5em] font-english"
        >
          Initializing...
        </motion.p>

        {/* Edge-to-Edge Glowing Progress Track */}
        <div className="relative w-full h-0.5 sm:h-[3px] bg-white/5 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[40%] h-full bg-linear-to-r from-transparent via-[#dbb671] to-transparent shadow-[0_0_15px_rgba(219,182,113,1)]"
          />
        </div>
      </div>
    </div>
  );
}
