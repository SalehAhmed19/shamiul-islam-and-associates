// import { useState } from "react";
// import {
// FacebookShareButton,
// WhatsappShareButton,
// TwitterShareButton,
// LinkedinShareButton,
// FacebookIcon,
// WhatsappIcon,
// TwitterIcon,
// LinkedinIcon,
// } from "react-share";
// import { Link, Check, Share2 } from "lucide-react";
// import toast from "react-hot-toast";

// interface ShareButtonsProps {
// title: string;
// id: string; // ✅ আইডি অবশ্যই লাগবে
// }

// const ShareButtons = ({ title, id }: ShareButtonsProps) => {
// const [copied, setCopied] = useState(false);

// if (!id) return null;

// const domain = "https://www.advprince.com";

// // ✅ একটাই লিংক (সবাই ID ব্যবহার করবে)
// // এটি প্রিভিউ জেনারেট করার জন্য পারফেক্ট
// const shareUrl = `${domain}/api/share/blog/${id}`;

// const handleCopyLink = async () => {
// try {
//     await navigator.clipboard.writeText(shareUrl);
//     setCopied(true);
//     toast.success("Link copied!");
//     setTimeout(() => setCopied(false), 2000);
// } catch (err) {
//     console.error("Failed to copy: ", err);
//     toast.error("Failed to copy link");
// }
// };

// return (
// <div className="w-full mt-8 mb-4">
//     <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 shadow-sm sm:flex-row sm:justify-between bg-gray-50 rounded-xl">
//     <div className="flex items-center gap-2 text-gray-700">
//         <div className="p-2 bg-white rounded-full text-[#604B33] shadow-sm">
//         <Share2 size={18} />
//         </div>
//         <p className="text-sm font-bold tracking-wide uppercase">
//         Share this article
//         </p>
//     </div>

//     <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
//         {/* ✅ সবাই এখন shareUrl (ID Link) ব্যবহার করছে */}

//         <FacebookShareButton
//         url={shareUrl}
//         className="transition-transform duration-200 hover:scale-110"
//         >
//         <FacebookIcon size={40} round={true} />
//         </FacebookShareButton>

//         <WhatsappShareButton
//         url={shareUrl}
//         title={title}
//         separator=":: "
//         className="transition-transform duration-200 hover:scale-110"
//         >
//         <WhatsappIcon size={40} round={true} />
//         </WhatsappShareButton>

//         <LinkedinShareButton
//         url={shareUrl}
//         title={title}
//         summary={title}
//         source="Adv Prince"
//         className="transition-transform duration-200 hover:scale-110"
//         >
//         <LinkedinIcon size={40} round={true} />
//         </LinkedinShareButton>

//         <TwitterShareButton
//         url={shareUrl}
//         title={title}
//         className="transition-transform duration-200 hover:scale-110"
//         >
//         <TwitterIcon size={40} round={true} />
//         </TwitterShareButton>

//         <button
//         onClick={handleCopyLink}
//         className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${copied ? "bg-green-500 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"}`}
//         >
//         {copied ? <Check size={20} /> : <Link size={20} />}
//         </button>
//     </div>
//     </div>
// </div>
// );
// };

// export default ShareButtons;
// import { useState } from "react";
// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   TwitterShareButton,
//   LinkedinShareButton,
//   FacebookIcon,
//   WhatsappIcon,
//   TwitterIcon,
//   LinkedinIcon,
// } from "react-share";
// import { Link, Check, Share2 } from "lucide-react";
// import toast from "react-hot-toast";

// interface ShareButtonsProps {
//   title: string;
//   id: string;
//   type?: "blogs" | "news"; // ✅ নতুন প্রপস: ডিফল্টভাবে 'blog' থাকবে
// }

// const ShareButtons = ({ title, id, type = "blogs" }: ShareButtonsProps) => {
//   const [copied, setCopied] = useState(false);

//   if (!id) return null;

//   const domain = "https://www.advprince.com";

//   // ✅ আপনার নতুন এপিআই পাথ অনুযায়ী ইউআরএল জেনারেট হচ্ছে
//   // type 'news' হলে path হবে /api/share/news/${id}
//   // type 'blog' হলে path হবে /api/share/blog/${id}
//   const shareUrl = `${domain}/api/share/${type}/${id}`;

//   const handleCopyLink = async () => {
//     try {
//       await navigator.clipboard.writeText(shareUrl);
//       setCopied(true);
//       toast.success("Link copied!");
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy: ", err);
//       toast.error("Failed to copy link");
//     }
//   };

//   return (
//     <div className="w-full mt-8 mb-4">
//       <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 shadow-sm sm:flex-row sm:justify-between bg-gray-50 rounded-xl">
//         <div className="flex items-center gap-2 text-gray-700">
//           <div className="p-2 bg-white rounded-full text-[#604B33] shadow-sm">
//             <Share2 size={18} />
//           </div>
//           <p className="text-sm font-bold tracking-wide uppercase">
//             Share this {type === "news" ? "news" : "article"}
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
//           <FacebookShareButton
//             url={shareUrl}
//             className="transition-transform duration-200 hover:scale-110"
//           >
//             <FacebookIcon size={40} round={true} />
//           </FacebookShareButton>

//           <WhatsappShareButton
//             url={shareUrl}
//             title={title}
//             separator=":: "
//             className="transition-transform duration-200 hover:scale-110"
//           >
//             <WhatsappIcon size={40} round={true} />
//           </WhatsappShareButton>

//           <LinkedinShareButton
//             url={shareUrl}
//             title={title}
//             summary={title}
//             source="Adv Prince"
//             className="transition-transform duration-200 hover:scale-110"
//           >
//             <LinkedinIcon size={40} round={true} />
//           </LinkedinShareButton>

//           <TwitterShareButton
//             url={shareUrl}
//             title={title}
//             className="transition-transform duration-200 hover:scale-110"
//           >
//             <TwitterIcon size={40} round={true} />
//           </TwitterShareButton>

//           <button
//             onClick={handleCopyLink}
//             className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${
//               copied
//                 ? "bg-green-500 text-white"
//                 : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
//             }`}
//           >
//             {copied ? <Check size={20} /> : <Link size={20} />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShareButtons;
import { useState } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { Link, Check, Share2 } from "lucide-react";
import toast from "react-hot-toast";

interface ShareButtonsProps {
  title: string;
  id: string; // ডাটাবেস আইডি (ফেসবুক প্রিভিউয়ের জন্য)
  slug: string; // ইউআরএল স্লাগ (WhatsApp/LinkedIn এর জন্য)
  type?: "blog" | "news"; // নিউজ নাকি ব্লগ সেটি শনাক্ত করতে
}

const ShareButtons = ({
  title,
  id,
  slug,
  type = "blog",
}: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  if (!id) return null;

  const domain = "https://www.advprince.com";
  const folder = type === "news" ? "news" : "blogs";

  // ১. ফেসবুকের জন্য এপিআই লিঙ্ক (যাতে ব্যাকেন্ড থেকে মেটা ট্যাগ লোড হয়)
  const fbShareUrl = `${domain}/api/share/${type}/${id}`;

  // ২. অন্যদের জন্য সরাসরি ফ্রন্টএন্ড স্লাগ লিঙ্ক (দেখতে সুন্দর লাগে)
  const cleanSlugUrl = `${domain}/${folder}/${slug || id}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(cleanSlugUrl);
      setCopied(true);
      toast.success("Link copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="w-full mt-8 mb-4">
      <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 shadow-sm sm:flex-row sm:justify-between bg-gray-50 rounded-xl">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="p-2 bg-white rounded-full text-[#604B33] shadow-sm">
            <Share2 size={18} />
          </div>
          <p className="text-sm font-bold tracking-wide uppercase">
            Share this {type === "news" ? "news" : "article"}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
          {/* ✅ ফেসবুকের জন্য আইডি ভিত্তিক এপিআই লিঙ্ক */}
          <FacebookShareButton
            url={fbShareUrl}
            className="transition-transform duration-200 hover:scale-110"
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>

          {/* ✅ হোয়াটসঅ্যাপের জন্য ক্লিন স্লাগ লিঙ্ক */}
          <WhatsappShareButton
            url={cleanSlugUrl}
            title={title}
            separator=":: "
            className="transition-transform duration-200 hover:scale-110"
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>

          {/* ✅ লিঙ্কডইন এর জন্য ক্লিন স্লাগ লিঙ্ক */}
          <LinkedinShareButton
            url={cleanSlugUrl}
            title={title}
            summary={title}
            source="Adv Prince"
            className="transition-transform duration-200 hover:scale-110"
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>

          {/* ✅ টুইটার এর জন্য ক্লিন স্লাগ লিঙ্ক */}
          <TwitterShareButton
            url={cleanSlugUrl}
            title={title}
            className="transition-transform duration-200 hover:scale-110"
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <button
            onClick={handleCopyLink}
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${copied ? "bg-green-500 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"}`}
          >
            {copied ? <Check size={20} /> : <Link size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
