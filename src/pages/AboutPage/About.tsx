import { images } from "../../assets/assets";
import Faq from "../../components/ui/Accordants/Faq";
import Header from "../../components/ui/Header/Header";
import OurAssociates from "../HomePage/OurAssociates";
import OurBlogs from "../HomePage/OurBlogs";
import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function About() {
    return (
        <div className="bg-[#F9F8F5]">
            <Header title="About Us" image={images.Header} />
            <AboutContent />
            <OurAssociates />
            <Stats />
            <Faq />
            <OurBlogs />
        </div>
    )
}