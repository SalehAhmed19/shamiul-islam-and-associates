export default function Button({ children, className, type, onClick }: { children: React.ReactNode, className?: string, type?: "button" | "submit" | "reset", onClick?: () => void }) {
    return (
        <button onClick={onClick} type={type} className={`bg-[#604B33] text-white px-8 py-3 font-bold cursor-pointer ${className}`}>{children}</button>
    )
}