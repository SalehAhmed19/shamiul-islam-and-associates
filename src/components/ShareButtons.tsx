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
import { Link, Check } from "lucide-react";
import toast from "react-hot-toast";

const ShareButtons = ({ slug, title }: { slug: string; title: string }) => {

    const [copied, setCopied] = useState(false);

    // ⚠️ সুরক্ষা: যদি কোনো কারণে slug না আসে, তবে বাটন রেন্ডার হবে না
    if (!slug) return null;

    // ✅ ফিক্স: এখানে dynamic window.location.origin ব্যবহার করবেন না।
    // কারণ লোকালহোস্টে কাজ করার সময় এটি ভুল লিংক জেনারেট করবে।
    // শেয়ার লিংক সবসময় লাইভ সাইটের হতে হবে।
    const domain = "https://www.advprince.com/";

    // ২. ম্যাজিক লিংক তৈরি (এটি ব্যাকএন্ডে হিট করে প্রিভিউ আনবে)
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
        <div className="flex flex-wrap gap-3 items-center mt-6">
            <p className="font-semibold text-gray-700 mr-2">Share this:</p>

            {/* Facebook */}
            <FacebookShareButton url={shareUrl} className="hover:opacity-80 transition-opacity hover:scale-110 duration-200">
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            {/* WhatsApp */}
            <WhatsappShareButton url={shareUrl} title={title} separator=":: " className="hover:opacity-80 transition-opacity hover:scale-110 duration-200">
                <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            {/* LinkedIn */}
            <LinkedinShareButton url={shareUrl} title={title} summary={title} source="Adv Prince" className="hover:opacity-80 transition-opacity hover:scale-110 duration-200">
                <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>

            {/* Twitter (X) */}
            <TwitterShareButton url={shareUrl} title={title} className="hover:opacity-80 transition-opacity hover:scale-110 duration-200">
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            {/* ✅ Copy Link Button */}
            <button
                onClick={handleCopyLink}
                className={`flex items-center justify-center w-[40px] h-[40px] rounded-full transition-all duration-200 hover:scale-110 ${copied ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                title="Copy Link with Preview"
            >
                {copied ? <Check size={20} /> : <Link size={20} />}
            </button>
        </div>
    );
};

export default ShareButtons;