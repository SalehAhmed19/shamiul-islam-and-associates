export default function Header({ title, image }: { title: string, image: string }) {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="h-[420px]">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-[40px] font-bold text-white uppercase">{title}</h1>
                <div>
                </div>
            </div>
        </div>
    )
}