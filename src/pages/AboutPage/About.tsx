import Header from "../../components/ui/Header/Header";
import OurAssociates from "../HomePage/OurAssociates";
import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function About() {
    return (
        <div className="bg-[#F9F8F5]">
            <Header title="About Us" />
            <AboutContent />
            <OurAssociates />
            <Stats />
        </div>
    )
}