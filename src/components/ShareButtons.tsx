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

// ১. Props-এ 'url' এর বদলে 'blogId' নিচ্ছি, যাতে ব্যাকএন্ড লিংক বানাতে পারি
const ShareButtons = ({ blogId, title }: { blogId: string; title: string }) => {
    console.log(blogId)
    // ২. আপনার ব্যাকএন্ডের ডোমেইন এখানে বসান (অথবা .env ফাইল থেকে নিন)
    // উদাহরণ: https://api.advprince.com বা http://localhost:5000
    const backendUrl = import.meta.env.VITE_baseURL || "http://localhost:4000/api";

    // ৩. সেই ম্যাজিক লিংক তৈরি করা হচ্ছে
    const shareUrl = `${backendUrl}/share/blog/${blogId}`;

    return (
        <div className="flex gap-4 items-center mt-6">
            <p className="font-semibold text-gray-700">Share this:</p>

            {/* Facebook - এখন এটি ব্যাকএন্ড লিংক শেয়ার করবে, তাই ছবি মিস হবে না */}
            <FacebookShareButton url={shareUrl} className="hover:opacity-80 transition-opacity">
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            {/* WhatsApp */}
            <WhatsappShareButton url={shareUrl} title={title} separator=":: " className="hover:opacity-80 transition-opacity">
                <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            {/* LinkedIn */}
            <LinkedinShareButton url={shareUrl} title={title} summary={title} source="Adv Prince" className="hover:opacity-80 transition-opacity">
                <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>

            {/* Twitter (X) */}
            <TwitterShareButton url={shareUrl} title={title} className="hover:opacity-80 transition-opacity">
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
        </div>
    );
};

export default ShareButtons;