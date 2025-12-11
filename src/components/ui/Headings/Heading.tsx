export default function Heading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={`text-[40px] font-bold text-[#604B33] ${className}`}>{children}</h2>
    )
}