// import { images } from "../../assets/assets"
// import Heading from "../../components/ui/Headings/Heading"

// export default function Message() {
//     return (
//         <div className="relative flex justify-center">
//             <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 bg-white absolute top-[-100px] grid grid-cols-2 gap-10">
//                 <div className="space-y-6">
//                     <Heading>
//                         Dedicated Expertise for <br /> Your Legal Needs
//                     </Heading>
//                     <p className="w-1/2">We provide clear, effective, and trustworthy legal services. We're here to understand your unique situation and guide you with expert advice and strong representation. Your legal clarity and peace of mind are our priority.</p>
//                 </div>
//                 <div>
//                     <img src={images.prince1} alt="prince-01" />
//                 </div>
//             </div>
//         </div>
//     )
// }

import { images } from "../../assets/assets"
import Heading from "../../components/ui/Headings/Heading"

export default function Message() {
    return (
        // Added 'relative' and 'z-20' to ensure this sits ON TOP of the banner overlay
        <div className="relative z-20 px-4 md:px-8">

            {/* Container Logic:
                1. -mt-16 / -mt-28: Pulls the box up to overlap the previous banner.
                2. shadow-xl: Adds depth so it separates from the background.
                3. grid-cols-1 md:grid-cols-2: Stacks on mobile, side-by-side on desktop.
            */}
            <div className="bg-white mx-auto max-w-7xl -mt-16 md:-mt-28 p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* --- Text Content --- */}
                {/* order-2 puts text below image on mobile, order-1 puts it left on desktop */}
                <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                    <Heading>
                        Dedicated Expertise for <br className="hidden lg:block" /> Your Legal Needs
                    </Heading>

                    <p className="text-sm md:text-base leading-relaxed w-full lg:max-w-lg">
                        We provide clear, effective, and trustworthy legal services. We're here to
                        understand your unique situation and guide you with expert advice and strong
                        representation. Your legal clarity and peace of mind are our priority.
                    </p>
                </div>

                {/* --- Image Content --- */}
                {/* order-1 puts image on top on mobile */}
                <div className="order-1 md:order-2 h-64 md:h-full w-full overflow-hidden ">
                    <img
                        src={images.prince1}
                        alt="prince-01"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

            </div>
        </div>
    )
}