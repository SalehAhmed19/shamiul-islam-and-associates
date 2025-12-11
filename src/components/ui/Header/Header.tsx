import { images } from "../../../assets/assets";


export default function Header({ title }: { title: string }) {
    return (
        <div style={{ backgroundImage: `url(${images.Header})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="h-[420px]">
            <div className="flex items-center justify-center h-full">
                <h1 className="text-[40px] font-bold text-white uppercase">{title}</h1>
            </div>
        </div>
    )
}