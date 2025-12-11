// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";

// export default function Ask() {
//     return (
//         <div style={{ backgroundImage: `url(${images.ask})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="space-y-10 text-center py-16">
//             <h2 className="text-4xl font-bold text-white mb-4">Have Legal Questions? Ask Our Experts!</h2>
//             <Button className="mx-auto">Ask an expert</Button>
//         </div>
//     )
// }

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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Have Legal Questions? Ask Our Experts!
            </h2>

            <Button className="mx-auto">Ask an expert</Button>
        </section>
    )
}