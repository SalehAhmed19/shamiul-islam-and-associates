// import { useState } from "react";
// import {
//     FacebookShareButton,
//     WhatsappShareButton,
//     TwitterShareButton,
//     LinkedinShareButton,
//     FacebookIcon,
//     WhatsappIcon,
//     TwitterIcon,
//     LinkedinIcon
// } from 'react-share';
// import { Link, Check, Share2 } from "lucide-react";
// import toast from "react-hot-toast";

// // ইন্টারফেসে _id যুক্ত করা হয়েছে
// interface ShareButtonsProps {
//     slug: string;
//     title: string;
//     id: string; // ✅ নতুন প্রপ: ব্লগের আইডি
// }

// const ShareButtons = ({ slug, title, id }: ShareButtonsProps) => {

//     const [copied, setCopied] = useState(false);

//     if (!slug || !id) return null;

//     const domain = "https://www.advprince.com";

//     // 🔗 ১. ফেসবুকের জন্য স্লাগ লিংক (আগের মতোই)
//     const slugShareUrl = `${domain}/api/share/blog/${slug}`;

//     // 🔗 ২. বাকিদের জন্য আইডি লিংক (যেটা প্রিভিউ কাজ করে)
//     const idShareUrl = `${domain}/api/share/blog/${id}`;

//     const handleCopyLink = async () => {
//         try {
//             // কপি হবে আইডি ওয়ালা লিংক
//             await navigator.clipboard.writeText(idShareUrl);
//             setCopied(true);
//             toast.success("Link copied with preview!");
//             setTimeout(() => setCopied(false), 2000);
//         } catch (err) {
//             console.error("Failed to copy: ", err);
//             toast.error("Failed to copy link");
//         }
//     };

//     return (
//         <div className="w-full mt-8 mb-4">
//             <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm gap-4">

//                 {/* টেক্সট সেকশন */}
//                 <div className="flex items-center gap-2 text-gray-700">
//                     <div className="p-2 bg-white rounded-full text-[#604B33] shadow-sm">
//                         <Share2 size={18} />
//                     </div>
//                     <p className="font-bold text-sm uppercase tracking-wide">Share this article</p>
//                 </div>

//                 {/* বাটন গ্রুপ */}
//                 <div className="flex flex-wrap justify-center sm:justify-end gap-3">

//                     {/* ✅ Facebook: আগের স্লাগ লিংক ব্যবহার করবে */}
//                     <FacebookShareButton
//                         url={slugShareUrl}
//                         className="hover:scale-110 transition-transform duration-200 focus:outline-none"
//                     >
//                         <FacebookIcon size={40} round={true} />
//                     </FacebookShareButton>

//                     {/* ✅ WhatsApp: এখন আইডি লিংক ব্যবহার করবে */}
//                     <WhatsappShareButton
//                         url={idShareUrl}
//                         title={title}
//                         separator=":: "
//                         className="hover:scale-110 transition-transform duration-200 focus:outline-none"
//                     >
//                         <WhatsappIcon size={40} round={true} />
//                     </WhatsappShareButton>

//                     {/* ✅ LinkedIn: এখন আইডি লিংক ব্যবহার করবে */}
//                     <LinkedinShareButton
//                         url={idShareUrl}
//                         title={title}
//                         summary={title}
//                         source="Adv Prince"
//                         className="hover:scale-110 transition-transform duration-200 focus:outline-none"
//                     >
//                         <LinkedinIcon size={40} round={true} />
//                     </LinkedinShareButton>

//                     {/* ✅ Twitter: এখন আইডি লিংক ব্যবহার করবে */}
//                     <TwitterShareButton
//                         url={idShareUrl}
//                         title={title}
//                         className="hover:scale-110 transition-transform duration-200 focus:outline-none"
//                     >
//                         <TwitterIcon size={40} round={true} />
//                     </TwitterShareButton>

//                     {/* ✅ Copy Link: এখন আইডি লিংক কপি করবে */}
//                     <button
//                         onClick={handleCopyLink}
//                         className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 focus:outline-none ${copied
//                             ? "bg-green-500 text-white shadow-green-200"
//                             : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
//                             }`}
//                         title="Copy Link with Preview"
//                     >
//                         {copied ? <Check size={20} /> : <Link size={20} />}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShareButtons;

import { useState } from "react";
import {
    FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    FacebookIcon,
    WhatsappIcon,
    LinkedinIcon
} from 'react-share';
import { Link, Check, Share2 } from "lucide-react";
import toast from "react-hot-toast";

interface ShareButtonsProps {
    slug: string;
    title: string;
    id: string; // ✅ আইডি অবশ্যই লাগবে
}

const ShareButtons = ({ slug, title, id }: ShareButtonsProps) => {

    const [copied, setCopied] = useState(false);

    // সুরক্ষা
    if (!slug || !id) return null;

    const domain = "https://www.advprince.com";

    // 🔴 ১. Facebook-এর জন্য স্লাগ লিংক (আপনার রিকোয়েস্ট অনুযায়ী)
    const facebookUrl = `${domain}/api/share/blog/${slug}`;

    // 🟢 ২. WhatsApp, LinkedIn ও কপির জন্য আইডি লিংক (যেটা অলরেডি কাজ করছে)
    const idUrl = `${domain}/api/share/blog/${id}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(idUrl); // আইডি লিংক কপি হবে
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
            <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm gap-4">

                <div className="flex items-center gap-2 text-gray-700">
                    <div className="p-2 bg-white rounded-full text-[#604B33] shadow-sm">
                        <Share2 size={18} />
                    </div>
                    <p className="font-bold text-sm uppercase tracking-wide">Share this article</p>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-end gap-3">

                    {/* 🔴 Facebook Button: Uses Slug URL */}
                    <FacebookShareButton
                        url={facebookUrl}
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>

                    {/* 🟢 WhatsApp Button: Uses ID URL */}
                    <WhatsappShareButton
                        url={idUrl}
                        title={title}
                        separator=":: "
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>

                    {/* 🟢 LinkedIn Button: Uses ID URL */}
                    <LinkedinShareButton
                        url={idUrl}
                        title={title}
                        summary={title}
                        source="Adv Prince"
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>

                    {/* 🟢 Copy Link: Uses ID URL */}
                    <button
                        onClick={handleCopyLink}
                        className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 focus:outline-none ${copied
                            ? "bg-green-500 text-white shadow-green-200"
                            : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                            }`}
                    >
                        {copied ? <Check size={20} /> : <Link size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareButtons;