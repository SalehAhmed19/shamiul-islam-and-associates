import { images } from "../../assets/assets";
import Faq from "../../components/ui/Accordants/Faq";
import Header from "../AboutPage/Header";
import Ask from "../HomePage/Ask";
import OurBlogs from "../HomePage/OurBlogs";
import PracticeArea from "./PracticeArea";
import ServiceContent from "./ServiceContent";
import Steps from "./Steps";

export default function Service() {
    return (
        <section className="bg-[#F9F8F5] min-h-screen flex flex-col">

            <Header title="Services" image={images.serviceHeader} />


            <ServiceContent />

            <Steps />

            {/* These sections are typically full-width and handle their own layout */}
            <Ask />

            <PracticeArea />

            <Faq />

            {/* Added some bottom padding so the footer doesn't touch the blogs immediately */}
            <div className="pb-10 md:pb-20">
                <OurBlogs />
            </div>

        </section>
    )
}