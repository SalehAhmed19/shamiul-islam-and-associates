import Header from "@/components/ui/Header/Header";
import { images } from "../../assets/assets";
import Faq from "../../components/ui/Accordants/Faq";
// import OurBlogs from "../HomePage/OurBlogs";
import PracticeArea from "./PracticeArea";
import ServiceContent from "./ServiceContent";
import Steps from "./Steps";

export default function Service() {
  return (
    <section className="bg-[#F9F8F5] min-h-screen flex flex-col">
      <Header title="page_title_services" image={images.serviceHeader} />

      <ServiceContent />

      <Steps />

      <PracticeArea />

      <Faq />

      {/* Added some bottom padding so the footer doesn't touch the blogs immediately */}
      {/* <div className="pb-10 md:pb-20">
                <OurBlogs />
            </div> */}
    </section>
  );
}
