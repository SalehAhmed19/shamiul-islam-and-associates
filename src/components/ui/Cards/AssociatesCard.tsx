import { Zoom } from "react-awesome-reveal";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function AssociatesCard({ image, name, position, socialLinks }: { image: string, name: string, position: string, socialLinks: { facebook: string, twitter: string, instagram: string, linkedin: string, youtube?: string | undefined } }) {
    return (
        <Zoom cascade={true} delay={200}><div className="space-y-5">
            <img src={image} alt={name} className="w-full object-cover" />
            <div className="text-center font-bold">
                <h3 className="text-[24px]">{name}</h3>
                <p className="text-[#94744E]">{position}</p>
            </div>
            <div className="flex justify-center gap-2">
                <a href={socialLinks.facebook} target="_blank" className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-[#604B33] hover:text-white duration-300"><FaFacebookF /></a>
                <a href={socialLinks.twitter} target="_blank" className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-[#604B33] hover:text-white duration-300"><FaXTwitter /></a>
                <a href={socialLinks.instagram} target="_blank" className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-[#604B33] hover:text-white duration-300"><FaInstagram /></a>
                <a href={socialLinks.linkedin} target="_blank" className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-[#604B33] hover:text-white duration-300"><FaLinkedinIn /></a>
                {socialLinks.youtube && <a href={socialLinks.youtube} target="_blank" className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-[#604B33] hover:text-white duration-300"><FaYoutube /></a>}
            </div>
        </div></Zoom>
    )
}