import { Fade } from "react-awesome-reveal";

export default function Header({ title, image }: { title: string, image: string }) {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="h-[420px]">
            <div className="flex items-center justify-center h-full">
                <Fade cascade={true} delay={200} direction="up">
                    <h1 className="text-[40px] font-bold text-white uppercase">{title}</h1>
                </Fade>
            </div>
        </div>
    )
}