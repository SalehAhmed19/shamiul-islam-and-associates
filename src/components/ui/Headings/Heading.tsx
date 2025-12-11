import { Fade } from "react-awesome-reveal";

export default function Heading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        // text-3xl on mobile -> text-[40px] on desktop
        <Fade cascade={true} delay={200} direction="up"><h2 className={`text-3xl md:text-[40px] font-bold text-[#604B33] ${className}`}>
            {children}
        </h2></Fade>
    )
}