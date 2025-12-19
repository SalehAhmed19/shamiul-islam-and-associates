import { Fade } from "react-awesome-reveal";
import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
import Heading from "../../components/ui/Headings/Heading";
import { useGetAssociates } from "@/hooks/useGetAssociates";
import { BlogsSkeleton } from "@/components/ui/Skeletons/BlogsSkeleton";

export default function OurAssociates({ sliceNumber }: { sliceNumber?: number }) {
    const { associates, loading } = useGetAssociates()

    if (loading) return <BlogsSkeleton />
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10">
            <div className="space-y-2">
                <Fade cascade={true} delay={200} direction="up"><Heading className="text-center">Our Associates</Heading>
                    <p className="text-center text-sm md:text-base px-2">
                        Experienced Legal Counsel Dedicated to Your Success
                    </p>
                </Fade>
            </div>

            {/* Grid is already good, just added 'max-w-7xl' to prevent stretching on huge screens */}
            <div className="flex justify-center">
                {associates.slice(0, 1).map((associate, index) => (
                    <AssociatesCard
                        key={index}
                        image={associate.image as string}
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
                        image={associate.image as string}
                        name={associate.name}
                        court={associate.court}
                        position={associate.position}
                    // socialLinks={associate.socialLinks}
                    />
                ))}
            </div>
        </section>
    )
}