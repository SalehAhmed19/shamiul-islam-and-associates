import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Heading from "@/components/ui/Headings/Heading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/hooks/hooks";
import { useGetBlogs } from "@/hooks/useGetBlogs"
import { deleteBlog } from "@/RTK/features/blogs/blogsSlice";
import { Edit, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ManageBlogs() {
    const { blogs, loading } = useGetBlogs();
    if (loading) {
        return <div>Loading...</div>
    }

    const dispatch = useAppDispatch();

    const handleDeleteBlog = (id: string) => {
        dispatch(deleteBlog(id));
        toast.success("Blog deleted successfully");
    }

    console.log(blogs);
    return (
        <section className="py-6 space-y-6">
            <Heading>Manage Blogs</Heading>
            <div>
                <Table>
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
                                    <TableCell className="bangla">{blog.title}</TableCell>
                                    <TableCell className="bangla">{blog.category}</TableCell>
                                    <TableCell className="bangla">{blog.author}</TableCell>
                                    <TableCell className="bangla">{blog.date}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button variant="outline" asChild className="cursor-pointer"><Link to={`/dashboard/secure/admin-panel/manage-blogs/edit-blogs/${blog._id}`}>Edit <Edit /></Link></Button>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="destructive" className="cursor-pointer">
                                                    Delete <Trash />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                    <DialogDescription>
                                                        This action cannot be undone. This will permanently delete your blog and remove data from your website.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline" className="cursor-pointer">Cancel</Button>
                                                    </DialogClose>
                                                    <Button variant="destructive" className="cursor-pointer" onClick={() => handleDeleteBlog(blog._id ? blog._id : "")}>Delete</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
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