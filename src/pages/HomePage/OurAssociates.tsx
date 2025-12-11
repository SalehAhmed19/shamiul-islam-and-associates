// import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
// import Heading from "../../components/ui/Headings/Heading";
// import { AssociatesData } from "../../data/Associates";

// export default function OurAssociates() {
//     return (
//         <section className="p-[60px] bg-[#FAF9F4] space-y-10">
//             <div>
//                 <Heading className="text-center">Our Associates</Heading>
//                 <p className="text-center">Experienced Legal Counsel Dedicated to Your Success</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
//                 {AssociatesData.map((associate, index) => (
//                     <AssociatesCard key={index} image={associate.image} name={associate.name} position={associate.position} socialLinks={associate.socialLinks} />
//                 ))}
//             </div>
//         </section>
//     )
// }

import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
import Heading from "../../components/ui/Headings/Heading";
import { AssociatesData } from "../../data/Associates";

export default function OurAssociates() {
    return (
        // Changed fixed p-[60px] to responsive py-16 px-4
        <section className="py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10">
            <div className="space-y-2">
                <Heading className="text-center">Our Associates</Heading>
                <p className="text-center text-sm md:text-base px-2">
                    Experienced Legal Counsel Dedicated to Your Success
                </p>
            </div>

            {/* Grid is already good, just added 'max-w-7xl' to prevent stretching on huge screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto max-w-7xl">
                {AssociatesData.map((associate, index) => (
                    <AssociatesCard
                        key={index}
                        image={associate.image}
                        name={associate.name}
                        position={associate.position}
                        socialLinks={associate.socialLinks}
                    />
                ))}
            </div>
        </section>
    )
}