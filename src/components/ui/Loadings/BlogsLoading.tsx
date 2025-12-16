import { BlogsSkeleton } from "../Skeletons/BlogsSkeleton";

export default function BlogsLoading() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
        </section>
    )
}