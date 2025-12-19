
import EditForm from "./EditForm";
import { useGetBlog } from "@/hooks/useGetBlog";
import { useParams } from "react-router-dom";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";

export default function EditBlogs() {
    const { id } = useParams();
    const { blog, loading } = useGetBlog(id || "");
    if (loading) {
        return <BlogsLoading />;
    }
    console.log(blog);
    return (
        <section className="py-6 space-y-6">
            <div className="space-y-6">
                <EditForm />
            </div>
        </section>
    )
}