import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingYouTube() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // পেজ লোড হওয়ার সময় পপ-আপ হয়ে আসবে
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
      // bottom-[90px] বা আপনার হোয়াটসঅ্যাপের পজিশন অনুযায়ী অ্যাডজাস্ট করে নিন (১০ পিক্সেল উপরে)
      className="fixed z-[9999] right-5 sm:right-6 bottom-[90px] sm:bottom-[100px]"
    >
      <motion.a
        href="https://www.youtube.com/@AdvPrinceIslam" // আপনার ইউটিউব লিংক
        target="_blank"
        rel="noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        layout // এই ম্যাজিক প্রপার্টির কারণেই সাইজ পরিবর্তন একদম স্মুদ হবে
        className="flex items-center justify-center p-3 sm:p-3.5 bg-[#FF0000] rounded-full shadow-[0_4px_15px_rgba(255,0,0,0.4)]"
        // হোভার করলে হালকা উপরে উঠবে এবং শ্যাডো বাড়বে
        whileHover={{ y: -4, boxShadow: "0 8px 25px rgba(255,0,0,0.6)" }}
        transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
      >
        {/* YouTube SVG Icon */}
        <motion.svg
          layout
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white shrink-0 sm:w-7 sm:h-7"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </motion.svg>

        {/* Expandable Text (অ্যানিমেশনসহ) */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 10 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap text-sm sm:text-base font-bold text-white uppercase tracking-wider"
            >
              Subscribe
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}
