export default function BlogHeader({ image }: { image: string }) {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="h-[420px]">
            <div className="flex flex-col items-center justify-center h-full">

                <h1 className="text-[40px] font-bold text-white uppercase">Blog</h1>
            </div>
        </div>
    )
}