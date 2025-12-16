import Faq from "../../components/ui/Accordants/Faq";
import Ask from "./Ask";
import Banner from "./Banner";
import FreeConsulForm from "./FreeConsulForm";
import LegalExcellence from "./LegalExcellence";
import OurAssociates from "./OurAssociates";
import OurBlogs from "./OurBlogs";
// import Message from "./Message";
import Services from "./Services";

export default function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <Ask />
            <OurAssociates sliceNumber={4} />
            <LegalExcellence />
            <FreeConsulForm />
            <Faq />
            <OurBlogs />
        </div>
    )
}