
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Heading from "@/components/ui/Headings/Heading";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/hooks/hooks";
import { useGetBlogs } from "@/hooks/useGetBlogs"
import { deleteBlog } from "@/RTK/features/blogs/blogsSlice";
import { Edit, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ManageBlogs() {
    const { blogs, loading } = useGetBlogs();
    const dispatch = useAppDispatch();

    const handleDeleteBlog = (id: string) => {
        dispatch(deleteBlog(id));
        toast.success("Blog deleted successfully");
    }

    if (loading) return <BlogsLoading />

    return (
        <section className="py-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <Heading>Manage Blogs</Heading>
                <p className="text-sm text-muted-foreground">
                    Total Blogs: <span className="font-bold text-[#604B33]">{blogs?.length || 0}</span>
                </p>
            </div>

            {/* Responsive Wrapper: 
                rounded-md + border + overflow-x-auto handles small screens 
            */}
            <div className="rounded-md border bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-50">
                            <TableRow>
                                <TableHead className="w-[60px] text-center">SL</TableHead>
                                <TableHead className="min-w-[200px]">Title</TableHead>
                                <TableHead className="hidden md:table-cell">Category</TableHead>
                                <TableHead className="hidden lg:table-cell">Author</TableHead>
                                <TableHead className="min-w-[120px]">Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {blogs?.map((blog, idx) => (
                                <TableRow key={blog._id} className="hover:bg-gray-50/50 transition-colors">
                                    <TableCell className="text-center font-medium text-muted-foreground">
                                        {idx + 1}
                                    </TableCell>

                                    <TableCell className="font-semibold max-w-[250px]">
                                        <div className="truncate bangla" title={blog.title}>
                                            {blog.title}
                                        </div>
                                        {/* Mobile-only sub-info */}
                                        <div className="md:hidden text-[10px] text-muted-foreground mt-1 flex gap-2">
                                            <span>{blog.category}</span>
                                            <span>•</span>
                                            <span>{blog.author}</span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="hidden md:table-cell">
                                        <span className="inline-flex items-center px-2.5 bangla py-0.5 rounded-full text-xs font-medium bg-brown-50 text-brown-700 border border-brown-100">
                                            {blog.category}
                                        </span>
                                    </TableCell>

                                    <TableCell className="bangla hidden lg:table-cell text-sm italic text-gray-600">
                                        {blog.author}
                                    </TableCell>

                                    <TableCell className="text-sm text-gray-500">
                                        {blog.date}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            {/* Edit Button - Icon only on mobile to save space */}
                                            <Button variant="outline" size="sm" asChild className="h-8 md:h-9">
                                                <Link to={`/dashboard/secure/admin-panel/manage-blogs/edit-blogs/${blog._id}`}>
                                                    <span className="hidden md:inline mr-2">Edit</span>
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                            </Button>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="destructive" size="sm" className="h-8 md:h-9">
                                                        <span className="hidden md:inline mr-2">Delete</span>
                                                        <Trash className="h-4 w-4" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                        <DialogDescription>
                                                            This will permanently delete <span className="font-bold text-red-600">"{blog.title}"</span>. This action cannot be undone.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter className="mt-4 gap-2 sm:gap-0">
                                                        <DialogClose asChild>
                                                            <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
                                                        </DialogClose>
                                                        <Button
                                                            variant="destructive"
                                                            className="w-full sm:w-auto"
                                                            onClick={() => handleDeleteBlog(blog._id || "")}
                                                        >
                                                            Confirm Delete
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile Empty State Helper */}
                {!blogs?.length && (
                    <div className="py-10 text-center text-muted-foreground">
                        No blogs found.
                    </div>
                )}
            </div>
        </section>
    )
}