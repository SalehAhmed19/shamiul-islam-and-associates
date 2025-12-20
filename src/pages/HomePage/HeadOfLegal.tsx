// import { images } from "@/assets/assets";

// export default function HeadOfLegal() {
//     return (
//         <section className="bg-white py-16">
//             <div className="container mx-auto px-4 md:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//                     <div className="relative"><div className="p-5 rounded-md before:border-[#dbb671] before:rounded-md before:absolute before:top-0 before:left-0 before:w-20 before:h-20 before:border-t-3 before:border-l-3 after:border-[#dbb671]">
//                         <div className="relative overflow-hidden rounded-md">
//                             <img src={images.prince2} alt="head of legal" className="rounded-md w-full hover:scale-105 transition-transform duration-500 cursor-pointer" />
//                             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[#604B33] text-white p-5">
//                                 <h3 className="text-2xl font-bold">Shamiul Islam Prince</h3>
//                                 <p className="text-xl text-white/90">Head of Legal</p>
//                                 <p className="text-white/90">Advocate Bangladesh Supreme Court</p>
//                             </div>
//                         </div>
//                     </div></div>
//                     <div className="space-y-6">
//                         <p className="bg-[#604B33]/20 rounded-md px-2 w-fit font-bold uppercase text-[#604B33] text-sm">Meet Advocate Shamiul Islam Prince</p>


//                         <h2 className="text-5xl font-bold leading-[1.2]"><span className="text-7xl">Justice is not</span> <br /><span className="text-[#604B33] italic">just a profession; it is a responsibility</span>
//                         </h2>

//                         <p className="text-xl">
//                             Hello, I am <strong>Advocate Md. Shamiul Islam (Prince)</strong>, an Advocate of the Supreme Court of Bangladesh. My career is built on a foundation of integrity and a passion for upholding the law.
//                             <br /> <br />
//                             I graduated from <a href="https://nub.edu.bd/" target="_blank" rel="noopener noreferrer" className="text-[#604B33] underline underline-offset-4 decoration-[#604B33]/20 font-bold">Northern University Bangladesh (NUB)</a> and have since dedicated my life to the legal profession. Beyond representing clients, I believe in serving the legal community, which led me to serve as an Executive Committee Member (2022-23) of the Dhaka Bar Association.
//                             <br /> <br />
//                         </p>
//                         <div className="text-3xl border-l-2 border-[#604B33] bg-[#604b33]/5 p-10 rounded-r-md quote italic">
//                             "Whether you are seeking legal counsel for complex litigation or require guidance on legal procedures, I am here to provide clear, strategic, and effective solutions. My chamber is based in Kotwali, Dhaka, but my commitment extends to ensuring justice for every client I represent."
//                         </div>

//                         <p>My commitment extends to ensuring justice for every client I represent, ensuring their rights are protected within the complex framework of our legal system.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import { images } from "@/assets/assets";

export default function HeadOfLegal() {
    return (
        <section className="bg-white py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Column with Responsive Corner Borders */}
                    <div className="relative group max-w-2xl mx-auto lg:mx-0">
                        {/* The Border Frame Container */}
                        <div className="relative p-3 md:p-5">
                            {/* Top Left Corner */}
                            <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-[#dbb671] rounded-tl-md"></div>

                            {/* Bottom Right Corner */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-[#dbb671] rounded-br-md"></div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-md shadow-xl">
                                <img
                                    src={images.prince2}
                                    alt="head of legal"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
                                />

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#604B33] via-[#604B33]/80 to-transparent text-white p-6 md:p-8">
                                    <h3 className="text-xl md:text-2xl font-bold">Shamiul Islam Prince</h3>
                                    <p className="text-lg text-white/90">Head of Legal</p>
                                    <p className="text-sm md:text-base text-white/80">Advocate Bangladesh Supreme Court</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Column */}
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <div>
                            <p className="bg-[#604B33]/10 rounded-full px-4 py-1 w-fit font-bold uppercase text-[#604B33] text-xs tracking-wider mb-4">
                                Meet Advocate Shamiul Islam Prince
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                <span className="block text-5xl md:text-7xl mb-2">Justice is not</span>
                                <span className="text-[#604B33] italic font-serif">just a profession; it is a responsibility</span>
                            </h2>
                        </div>

                        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Hello, I am <strong className="text-gray-900">Advocate Md. Shamiul Islam (Prince)</strong>, an Advocate of the Supreme Court of Bangladesh. My career is built on a foundation of integrity and a passion for upholding the law.
                            </p>
                            <p>
                                I graduated from <a href="https://nub.ac.bd/" target="_blank" rel="noopener noreferrer" className="text-[#604B33] underline underline-offset-4 decoration-[#604B33]/40 hover:decoration-[#604B33] transition-all font-bold">Northern University Bangladesh (NUB)</a> and have since dedicated my life to the legal profession. Beyond representing clients, I served as an Executive Committee Member (2022-23) of the Dhaka Bar Association.
                            </p>
                        </div>

                        <div className="text-xl md:text-2xl border-l-4 border-[#604B33] bg-[#604b33]/5 p-6 md:p-10 rounded-r-xl italic text-gray-800 font-serif leading-relaxed quote">
                            "Whether you are seeking legal counsel for complex litigation or require guidance on legal procedures, I am here to provide strategic and effective solutions."
                        </div>

                        <p className="text-gray-600 font-medium italic border-t border-gray-100 pt-4">
                            Committed to ensuring your rights are protected within the complex framework of our legal system.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}