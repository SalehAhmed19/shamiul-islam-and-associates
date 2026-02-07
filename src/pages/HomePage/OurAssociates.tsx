import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
import Heading from "../../components/ui/Headings/Heading";
import { useGetAssociates } from "@/hooks/useGetAssociates";
import { motion } from "framer-motion";
import { ourAssociatesVariants } from "@/motions/motions";
import { useEffect, useState } from "react";

export default function OurAssociates({ sliceNumber }: { sliceNumber?: number }) {
    const { associates, loading } = useGetAssociates()
    const [staticAssociate, setStaticAssociate] = useState([]);

    useEffect(() => {
        fetch("/shamiul-islam-and-associates.associates.json")
            .then((res) => res.json())
            .then((data) => setStaticAssociate(data))
    }, [])


    if (loading) return <section className="py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10">
        <div className="space-y-2">
            <Heading className="text-center">Our Associates</Heading>
            <motion.p variants={ourAssociatesVariants} initial="paragraphInitial" whileInView="paragraphWhileInView" className="text-center text-sm md:text-base px-2">
                Experienced Legal Counsel Dedicated to Your Success
            </motion.p>

        </div>

        <div className="flex justify-center">
            {staticAssociate?.slice(0, 1).map((associate: any, index: number) => (
                <AssociatesCard
                    key={index}
                    image={associate.image?.url as string}
                    name={associate.name}
                    court={associate.court}
                    position={associate.position}
                // socialLinks={associate.socialLinks}
                />
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto max-w-7xl">
            {staticAssociate?.slice(1, sliceNumber ? sliceNumber : associates.length).map((associate: any, index: number) => (
                <AssociatesCard
                    key={index}
                    image={associate.image?.url as string}
                    name={associate.name}
                    court={associate.court}
                    position={associate.position}
                // socialLinks={associate.socialLinks}
                />
            ))}
        </div>
    </section >
    console.log({ staticAssociate })

    return (
        <section className="py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10">
            <div className="space-y-2">
                <Heading className="text-center">Our Associates</Heading>
                <motion.p variants={ourAssociatesVariants} initial="paragraphInitial" whileInView="paragraphWhileInView" className="text-center text-sm md:text-base px-2">
                    Experienced Legal Counsel Dedicated to Your Success
                </motion.p>

            </div>

            {/* Grid is already good, just added 'max-w-7xl' to prevent stretching on huge screens */}
            <div className="flex justify-center">
                {associates.slice(0, 1).map((associate, index) => (
                    <AssociatesCard
                        key={index}
                        image={associate.image?.url as string}
                        name={associate.name}
                        court={associate.court}
                        position={associate.position}
                    // socialLinks={associate.socialLinks}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto max-w-7xl">
                {associates.slice(1, sliceNumber ? sliceNumber : associates.length).map((associate, index) => (
                    <AssociatesCard
                        key={index}
                        image={associate.image?.url as string}
                        name={associate.name}
                        court={associate.court}
                        position={associate.position}
                    // socialLinks={associate.socialLinks}
                    />
                ))}
            </div>
        </section >
    )
}