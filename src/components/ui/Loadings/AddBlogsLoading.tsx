import TypeWriter from "./TypeWriter";

export default function AddBlogsLoading() {
    return <section className="flex flex-col items-center justify-center h-screen space-y-2">
        <TypeWriter />
        <p className="font-bold">Blog Creating...</p>
    </section>
}