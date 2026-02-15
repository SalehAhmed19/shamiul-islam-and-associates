// import { images } from "../../assets/assets";
// import Faq from "../../components/ui/Accordants/Faq";
// import Header from "../../components/ui/Header/Header";
// import OurAssociates from "../HomePage/OurAssociates";
// // import OurBlogs from "../HomePage/OurBlogs";
// import AboutContent from "./AboutContent";
// import Stats from "./Stats";

// export default function About() {
//     return (
//         <div className="bg-[#F9F8F5]">
//             <Header title="About Us" image={images.Header} />
//             <AboutContent />
//             <OurAssociates />
//             <Stats />
//             <Faq />
//             {/* <OurBlogs /> */}
//         </div>
//     )
// }
import { images } from "../../assets/assets";
import Faq from "../../components/ui/Accordants/Faq";
import Header from "../../components/ui/Header/Header";
import OurAssociates from "../HomePage/OurAssociates";
// import OurBlogs from "../HomePage/OurBlogs";
import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function About() {
  return (
    <div className="bg-[#F9F8F5]">
      {/* টাইটেল হিসেবে হার্ডকোডেড "About Us" এর বদলে 
                ট্রান্সলেশন কী "page_title_about" ব্যবহার করা হলো 
            */}
      <Header title="page_title_about" image={images.Header} />

      <AboutContent />
      <OurAssociates />
      <Stats />
      <Faq />
      {/* <OurBlogs /> */}
    </div>
  );
}
