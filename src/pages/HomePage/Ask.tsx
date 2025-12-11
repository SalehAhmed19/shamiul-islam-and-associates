
import { Fade, Zoom } from "react-awesome-reveal";
import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";

export default function Ask() {
    return (
        <section
            style={{
                backgroundImage: `url(${images.ask})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            // Added 'px-4' (side padding for mobile) and responsive vertical padding 'md:py-24'
            className="space-y-6 md:space-y-10 text-center py-16 md:py-24 px-4"
        >
            {/* Changed fixed 'text-4xl' to responsive 'text-2xl md:text-4xl lg:text-5xl' */}
            <Zoom cascade={true} delay={200}><h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Have Legal Questions? Ask Our Experts!
            </h2></Zoom>

            <Fade cascade={true} delay={200} direction="up"><Button className="mx-auto">Ask an expert</Button></Fade>
        </section>
    )
}