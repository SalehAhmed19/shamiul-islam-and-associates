import { useState } from "react";
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';
import { Link, Check, Share2 } from "lucide-react";
import toast from "react-hot-toast";

const ShareButtons = ({ slug, title }: { slug: string; title: string }) => {

    const [copied, setCopied] = useState(false);

    // সুরক্ষা: স্লাগ না থাকলে রেন্ডার হবে না
    if (!slug) return null;

    // ✅ ফিক্স: শেষের স্ল্যাশ (/) সরানো হয়েছে যাতে ডবল স্ল্যাশ না হয়
    const domain = "https://www.advprince.com";

    // লিংক তৈরি
    const shareUrl = `${domain}/api/share/blog/${slug}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            toast.success("Link copied with preview!");
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
            toast.error("Failed to copy link");
        }
    };

    return (
        <div className="w-full mt-8 mb-4">
            {/* কন্টেইনার ডিজাইন: মোবাইলে কলাম, বড় স্ক্রিনে রো (Row) */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm gap-4">

                {/* টেক্সট সেকশন */}
                <div className="flex items-center gap-2 text-gray-700">
                    <div className="p-2 bg-white rounded-full text-[#604B33] shadow-sm">
                        <Share2 size={18} />
                    </div>
                    <p className="font-bold text-sm uppercase tracking-wide">Share this article</p>
                </div>

                {/* বাটন গ্রুপ: মোবাইলে র‍্যাপ হবে এবং সেন্টারে থাকবে */}
                <div className="flex flex-wrap justify-center sm:justify-end gap-3">

                    {/* Facebook */}
                    <FacebookShareButton
                        url={shareUrl}
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>

                    {/* WhatsApp */}
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>

                    {/* LinkedIn */}
                    <LinkedinShareButton
                        url={shareUrl}
                        title={title}
                        summary={title}
                        source="Adv Prince"
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>

                    {/* Twitter (X) */}
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="hover:scale-110 transition-transform duration-200 focus:outline-none"
                    >
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>

                    {/* ✅ Copy Link Button (Custom Styled) */}
                    <button
                        onClick={handleCopyLink}
                        className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 focus:outline-none ${copied
                                ? "bg-green-500 text-white shadow-green-200"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                            }`}
                        title="Copy Link with Preview"
                    >
                        {copied ? <Check size={20} /> : <Link size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareButtons;