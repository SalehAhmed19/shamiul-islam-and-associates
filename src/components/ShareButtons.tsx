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
  id: string; // ডাটাবেস আইডি
  type?: "blog" | "news"; // নিউজ নাকি ব্লগ
}

const ShareButtons = ({ title, id, type = "blog" }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  if (!id) return null;

  const domain = "https://www.advprince.com";

  // ✅ ফেসবুক এবং হোয়াটসঅ্যাপ উভয়ের জন্যই আইডি ভিত্তিক এপিআই লিঙ্ক
  // এটি করলে ব্যাকেন্ড থেকে ইমেজ প্রিভিউ ১০০% নিশ্চিত হবে
  const shareUrl = `${domain}/api/share/${type}/${id}`;

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
          {/* ✅ ফেসবুক - আইডি লিঙ্ক */}
          <FacebookShareButton
            url={shareUrl}
            className="transition-transform duration-200 hover:scale-110"
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>

          {/* ✅ হোয়াটসঅ্যাপ - আইডি লিঙ্ক (প্রিভিউ নিশ্চিত করতে) */}
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="transition-transform duration-200 hover:scale-110"
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>

          {/* লিঙ্কডইন */}
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="transition-transform duration-200 hover:scale-110"
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>

          {/* টুইটার */}
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="transition-transform duration-200 hover:scale-110"
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <button
            onClick={handleCopyLink}
            className={`flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-sm transition-all duration-200 hover:scale-110 ${
              copied
                ? "bg-green-500 text-white"
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
