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
            <OurAssociates />
            <LegalExcellence />
            <FreeConsulForm />
            <OurBlogs />
        </div>
    )
}