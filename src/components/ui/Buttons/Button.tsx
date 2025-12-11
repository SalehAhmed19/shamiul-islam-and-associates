export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={`bg-[#604B33] text-white px-8 py-3 font-bold cursor-pointer ${className}`}>{children}</button>
    )
}