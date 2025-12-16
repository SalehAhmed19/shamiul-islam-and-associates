import Heading from "@/components/ui/Headings/Heading";
import EditForm from "./EditForm";
import { useGetBlog } from "@/hooks/useGetBlog";
import { useParams } from "react-router-dom";

export default function EditBlogs() {
    const { id } = useParams();
    const { blog, loading } = useGetBlog(id || "");
    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(blog);
    return (
        <section className="py-6 space-y-6">
            <div className="space-y-6">
                <Heading>Edit Blogs</Heading>
                <EditForm />
            </div>
        </section>
    )
}