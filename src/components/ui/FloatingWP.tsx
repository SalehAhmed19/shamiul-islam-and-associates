// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CustomWhatsApp({
//   phoneNumber = "8801700000000", // Country code সহ (যেমন: 880...)
//   accountName = "Shamiul Islam and Associates",
//   avatar = "https://ui-avatars.com/api/?name=Shamiul+Islam&background=dbb671&color=fff", // ডিফল্ট লোগো বা আপনার আইকন
//   chatMessage = "Hey, how can I help you today?",
//   darkMode = true, // true বা false করতে পারবেন
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [time, setTime] = useState("");
//   const chatRef = useRef(null);

//   // চ্যাট বাবল এর মধ্যে বর্তমান সময় দেখানোর জন্য
//   useEffect(() => {
//     const now = new Date();
//     setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
//   }, [isOpen]);

//   // বাইরে ক্লিক করলে চ্যাট বক্স বন্ধ হয়ে যাওয়ার লজিক
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (chatRef.current && !chatRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // WhatsApp-এ মেসেজ পাঠানোর ফাংশন
//   // WhatsApp-এ মেসেজ পাঠানোর ফাংশন
//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       // এই লাইনটি ফোন নাম্বার থেকে স্পেস, প্লাস (+) বা ড্যাশ (-) রিমুভ করে শুধু নাম্বারটি রাখবে
//       const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");

//       const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
//       window.open(url, "_blank");
//       setMessage(""); // ইনপুট ক্লিয়ার
//       setIsOpen(false); // বক্স বন্ধ
//     }
//   };

//   // ডার্ক এবং লাইট থিমের কালার কোড
//   const theme = {
//     headerBg: darkMode ? "bg-[#202C33]" : "bg-[#00a884]",
//     headerText: "text-white",
//     bodyBg: darkMode ? "bg-[#0b141a]" : "bg-[#efeae2]",
//     bubbleBg: darkMode ? "bg-[#202c33]" : "bg-white",
//     bubbleText: darkMode ? "text-[#e9edef]" : "text-[#111b21]",
//     timeText: darkMode ? "text-[#8696a0]" : "text-[#667781]",
//     footerBg: darkMode ? "bg-[#202C33]" : "bg-[#f0f2f5]",
//     inputBg: darkMode
//       ? "bg-[#2a3942] text-[#e9edef]"
//       : "bg-white text-[#111b21]",
//   };

//   return (
//     <div className="fixed z-[99999] right-5 sm:right-6 bottom-6" ref={chatRef}>
//       {/* =========================================
//           CHAT WINDOW (Popup)
//           ========================================= */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.5, y: 20 }}
//             transition={{
//               duration: 0.3,
//               type: "spring",
//               stiffness: 250,
//               damping: 20,
//             }}
//             style={{ transformOrigin: "bottom right" }}
//             className={`absolute bottom-16 right-0 w-[300px] sm:w-[350px] flex flex-col overflow-hidden rounded-2xl shadow-2xl border ${
//               darkMode ? "border-[#2a3942]" : "border-gray-200"
//             }`}
//           >
//             {/* --- HEADER --- */}
//             <div
//               className={`flex items-center justify-between p-4 ${theme.headerBg} ${theme.headerText}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="relative">
//                   <img
//                     src={avatar}
//                     alt="Avatar"
//                     className="w-10 h-10 rounded-full object-cover border border-white/20"
//                   />
//                   <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full"></span>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-sm sm:text-base leading-tight">
//                     {accountName}
//                   </h3>
//                   <p className="text-[10px] sm:text-xs text-white/80">
//                     Typically replies instantly
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-1 transition-colors rounded-full hover:bg-black/10"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* --- BODY (Chat Area) --- */}
//             <div
//               className={`p-4 h-[200px] overflow-y-auto ${theme.bodyBg} relative`}
//               style={{
//                 backgroundImage:
//                   "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
//                 backgroundSize: "cover",
//                 backgroundBlendMode: darkMode ? "overlay" : "normal",
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className={`relative max-w-[85%] p-2.5 sm:p-3 text-sm rounded-lg rounded-tl-none shadow-sm mt-2 ${theme.bubbleBg} ${theme.bubbleText}`}
//               >
//                 {/* Tail point of the bubble */}
//                 <svg
//                   viewBox="0 0 8 13"
//                   className={`absolute top-0 -left-2 w-2 h-3 ${darkMode ? "text-[#202c33]" : "text-white"}`}
//                   fill="currentColor"
//                 >
//                   <path d="M5.188 1H0v11.156L7.984 2.193c.184-.246.06-.596-.24-.652L5.188 1z" />
//                 </svg>
//                 <p className="leading-relaxed">{chatMessage}</p>
//                 <p
//                   className={`text-[10px] text-right mt-1.5 ${theme.timeText}`}
//                 >
//                   {time}
//                 </p>
//               </motion.div>
//             </div>

//             {/* --- FOOTER (Input Area) --- */}
//             <form
//               onSubmit={handleSendMessage}
//               className={`flex items-center gap-2 p-3 ${theme.footerBg}`}
//             >
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className={`flex-1 w-full px-4 py-2.5 text-sm rounded-full focus:outline-none ${theme.inputBg}`}
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={!message.trim()}
//                 className={`flex items-center justify-center p-2.5 transition-all rounded-full ${
//                   message.trim()
//                     ? "bg-[#00a884] text-white hover:bg-[#008f6f]"
//                     : "bg-gray-400 text-gray-200 cursor-not-allowed"
//                 }`}
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-5 h-5 ml-1"
//                 >
//                   <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//                 </svg>
//               </button>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* =========================================
//           FLOATING BUTTON (Trigger)
//           ========================================= */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="relative flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-shadow"
//       >
//         {/* White outline for WhatsApp Icon */}
//         <svg
//           viewBox="0 0 32 32"
//           className="w-8 h-8 sm:w-9 sm:h-9 text-white"
//           fill="currentColor"
//         >
//           <path d="M16.08.192C7.296.192.16 7.328.16 16.112c0 2.816.736 5.568 2.144 8.032L.192 31.84l7.904-2.08c2.368 1.28 5.024 1.952 7.744 1.952 8.784 0 15.92-7.136 15.92-15.92S24.864.192 16.08.192zm0 26.688c-2.4 0-4.736-.64-6.816-1.856l-.48-.288-5.024 1.312 1.344-4.92-.32-.512a13.273 13.273 0 0 1-2.048-7.168c0-7.36 6.016-13.376 13.376-13.376s13.376 6.016 13.376 13.376-6.016 13.344-13.376 13.344zm7.328-9.984c-.416-.192-2.368-1.152-2.752-1.28-.352-.128-.64-.192-.928.192-.256.416-1.024 1.28-1.248 1.536-.256.256-.48.288-.896.096-2.016-.96-3.84-2.528-4.992-4.512-.192-.352 0-.512.192-.704.16-.192.416-.448.576-.704.192-.256.256-.448.384-.704.128-.256.06-.512-.032-.704-.096-.192-.928-2.24-1.248-3.072-.32-.832-.672-.704-.928-.736h-.8a1.55 1.55 0 0 0-1.12.512c-.384.416-1.472 1.44-1.472 3.52s1.504 4.096 1.728 4.416c.192.256 3.008 4.576 7.296 6.432 1.024.448 1.824.704 2.432.928 1.024.32 1.952.288 2.688.16.832-.128 2.368-.96 2.72-1.888.32-.96.32-1.76.224-1.888-.096-.16-.352-.256-.736-.448z" />
//         </svg>
//       </motion.button>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomWhatsApp({
  phoneNumber = "8801700000000", // Country code সহ (যেমন: 880...)
  accountName = "Shamiul Islam and Associates",
  avatar = "https://ui-avatars.com/api/?name=Shamiul+Islam&background=dbb671&color=fff",
  chatMessage = "Hey, how can I help you today?",
  darkMode = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  // চ্যাট বাবল এর মধ্যে বর্তমান সময় দেখানোর জন্য
  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // event.target as Node যুক্ত করা হয়েছে
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // WhatsApp-এ মেসেজ পাঠানোর ফাংশন
  // আগের কোড: const handleSendMessage = (e) => {
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");
      const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  // ডার্ক এবং লাইট থিমের কালার কোড
  const theme = {
    headerBg: darkMode ? "bg-[#202C33]" : "bg-[#00a884]",
    headerText: "text-white",
    bodyBg: darkMode ? "bg-[#0b141a]" : "bg-[#efeae2]",
    bubbleBg: darkMode ? "bg-[#202c33]" : "bg-white",
    bubbleText: darkMode ? "text-[#e9edef]" : "text-[#111b21]",
    timeText: darkMode ? "text-[#8696a0]" : "text-[#667781]",
    footerBg: darkMode ? "bg-[#202C33]" : "bg-[#f0f2f5]",
    inputBg: darkMode
      ? "bg-[#2a3942] text-[#e9edef]"
      : "bg-white text-[#111b21]",
  };

  return (
    // মোবাইলে bottom-4, right-4 এবং ডেস্কটপে bottom-6, right-6
    <div
      className="fixed z-[99999] right-4 sm:right-6 bottom-4 sm:bottom-6"
      ref={chatRef}
    >
      {/* =========================================
          CHAT WINDOW (Popup)
          ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            style={{ transformOrigin: "bottom right" }}
            // width রেস্পন্সিভ করা হয়েছে: w-[calc(100vw-32px)] যাতে মোবাইলে স্ক্রিনের বাইরে না যায়
            className={`absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-32px)] sm:w-[350px] max-w-[380px] flex flex-col overflow-hidden rounded-2xl shadow-2xl border ${
              darkMode ? "border-[#2a3942]" : "border-gray-200"
            }`}
          >
            {/* --- HEADER --- */}
            <div
              className={`flex items-center justify-between p-4 ${theme.headerBg} ${theme.headerText}`}
            >
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="object-cover w-10 h-10 border rounded-full sm:w-12 sm:h-12 border-white/20"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight sm:text-base">
                    {accountName}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-white/80 mt-0.5">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 transition-colors rounded-full hover:bg-black/10 shrink-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* --- BODY (Chat Area) --- */}
            {/* মোবাইলের জন্য হাইট একটু বাড়ানো হয়েছে (h-[250px]) */}
            <div
              className={`p-4 h-[250px] sm:h-[300px] overflow-y-auto ${theme.bodyBg} relative`}
              style={{
                backgroundImage:
                  "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                backgroundSize: "cover",
                backgroundBlendMode: darkMode ? "overlay" : "normal",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`relative max-w-[85%] p-3 sm:p-3.5 text-sm sm:text-base rounded-lg rounded-tl-none shadow-sm mt-2 ${theme.bubbleBg} ${theme.bubbleText}`}
              >
                {/* Tail point of the bubble */}
                <svg
                  viewBox="0 0 8 13"
                  className={`absolute top-0 -left-2 w-2 h-3 ${darkMode ? "text-[#202c33]" : "text-white"}`}
                  fill="currentColor"
                >
                  <path d="M5.188 1H0v11.156L7.984 2.193c.184-.246.06-.596-.24-.652L5.188 1z" />
                </svg>
                <p className="leading-relaxed">{chatMessage}</p>
                <p
                  className={`text-[10px] sm:text-xs text-right mt-1.5 ${theme.timeText}`}
                >
                  {time}
                </p>
              </motion.div>
            </div>

            {/* --- FOOTER (Input Area) --- */}
            <form
              onSubmit={handleSendMessage}
              className={`flex items-center gap-2 p-3 ${theme.footerBg}`}
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`flex-1 w-full px-4 py-3 text-sm sm:text-base rounded-full focus:outline-none ${theme.inputBg}`}
                required
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className={`flex items-center justify-center p-3 transition-all rounded-full shrink-0 ${
                  message.trim()
                    ? "bg-[#00a884] text-white hover:bg-[#008f6f]"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 ml-0.5"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          FLOATING BUTTON (Trigger)
          ========================================= */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-shadow"
      >
        {/* =========================================
            PERFECT WHATSAPP LOGO (No Breaking)
            ========================================= */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white sm:w-9 sm:h-9"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.316 1.262.505 1.694.646.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.button>
    </div>
  );
}
