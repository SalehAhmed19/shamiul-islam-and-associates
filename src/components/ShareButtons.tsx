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

interface ShareButtonsProps {
    title: string;
    id: string; // ✅ আইডি অবশ্যই লাগবে
}

const ShareButtons = ({ title, id }: ShareButtonsProps) => {

    const [copied, setCopied] = useState(false);

    if (!id) return null;

    const domain = "https://www.advprince.com";

    // ✅ একটাই লিংক (সবাই ID ব্যবহার করবে)
    // এটি প্রিভিউ জেনারেট করার জন্য পারফেক্ট
    const shareUrl = `${domain}/api/share/blog/${id}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
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

                    {/* ✅ সবাই এখন shareUrl (ID Link) ব্যবহার করছে */}

                    <FacebookShareButton url={shareUrl} className="hover:scale-110 transition-transform duration-200">
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>

                    <WhatsappShareButton url={shareUrl} title={title} separator=":: " className="hover:scale-110 transition-transform duration-200">
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>

                    <LinkedinShareButton url={shareUrl} title={title} summary={title} source="Adv Prince" className="hover:scale-110 transition-transform duration-200">
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>

                    <TwitterShareButton url={shareUrl} title={title} className="hover:scale-110 transition-transform duration-200">
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>

                    <button
                        onClick={handleCopyLink}
                        className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${copied ? "bg-green-500 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"}`}
                    >
                        {copied ? <Check size={20} /> : <Link size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareButtons;