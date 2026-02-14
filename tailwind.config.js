// module.exports = {
//   // ...
//   plugins: [
//     require('@tailwindcss/typography'),
//   ],
// }
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // এই নামগুলো আমরা নেভবারে ব্যবহার করবো
        bengali: ["Anek Bangla", "sans-serif"],
        english: ["Mulish", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch", // লাইন অনেক লম্বা হওয়া আটকাবে
            lineHeight: "1.8", // বাংলার জন্য এটি পারফেক্ট
            color: "#333",
            h1: {
              fontWeight: "700",
              color: "#1a1a1a",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
