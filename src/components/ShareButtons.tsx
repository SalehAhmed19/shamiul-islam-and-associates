
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

const ShareButtons = ({ url, title }: { url: string; title: string }) => {
    return (
        <div className="flex gap-4 items-center mt-6">
            <p className="font-semibold text-gray-700">Share this:</p>

            {/* Facebook */}
            <FacebookShareButton url={url}>
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            {/* WhatsApp */}
            <WhatsappShareButton url={url} title={title} separator=":: ">
                <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            {/* LinkedIn */}
            <LinkedinShareButton url={url} title={title} summary={title} source="Adv Prince">
                <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>

            {/* Twitter (X) */}
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
        </div>
    );
};

export default ShareButtons;