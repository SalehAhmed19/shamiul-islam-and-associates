import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Headings/Heading";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetBlogs } from "@/hooks/useGetBlogs"
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function ManageBlogs() {
    const { blogs, loading } = useGetBlogs();
    if (loading) {
        return <div>Loading...</div>
    }

    console.log(blogs);
    return (
        <section className="py-6 space-y-6">
            <Heading>Manage Blogs</Heading>
            <div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            blogs.map((blog, idx) => (
                                <TableRow key={blog._id} className="cursor-pointer">
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{blog.title}</TableCell>
                                    <TableCell>{blog.category}</TableCell>
                                    <TableCell>{blog.author}</TableCell>
                                    <TableCell>{blog.date}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button variant="outline" asChild className="cursor-pointer"><Link to={`/dashboard/secure/admin-panel/manage-blogs/edit-blogs/${blog._id}`}>Edit <Edit /></Link></Button>
                                        <Button variant="destructive" asChild className="cursor-pointer"><Link to={`/dashboard/secure/admin-panel/manage-blogs/edit-blogs/${blog._id}`}>Delete <Trash /></Link></Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}