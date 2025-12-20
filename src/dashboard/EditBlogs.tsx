
import EditForm from "./EditForm";
import { useGetBlog } from "@/hooks/useGetBlog";
import { useParams } from "react-router-dom";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";

export default function EditBlogs() {
    const { id } = useParams();
    const { blog, loading } = useGetBlog(id || "");
    if (loading) {
        return <AddBlogsLoading title="Updating Blog..." />;
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