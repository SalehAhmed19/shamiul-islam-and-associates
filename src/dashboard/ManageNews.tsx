// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useAppDispatch } from "@/hooks/hooks";
// import { useGetBlogs } from "@/hooks/useGetBlogs";
// import { deleteBlog } from "@/RTK/features/blogs/blogsSlice";
// import {
//   Edit,
//   Trash2,
//   FileText,
//   Plus,
//   Calendar,
//   User,
//   AlertCircle,
//   ImageIcon,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";

// export default function ManageNews() {
//   const { blogs, loading } = useGetBlogs();
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const handleDeleteBlog = (id: string) => {
//     dispatch(deleteBlog(id));
//     toast.success("News deleted successfully");
//   };

//   if (loading) return <BlogsLoading />;

//   return (
//     <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
//       <section className="mx-auto space-y-6 max-w-7xl">
//         {/* Header Section */}
//         <div className="flex flex-col items-start justify-between gap-4 p-6 bg-white border border-gray-200 shadow-sm rounded-xl md:p-8 md:flex-row md:items-center">
//           <div className="space-y-1">
//             <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
//               <FileText className="w-8 h-8 opacity-80" />
//               Manage News
//             </h1>
//             <p className="text-sm text-gray-500">
//               You have total{" "}
//               <span className="font-bold text-[#604B33]">
//                 {blogs?.length || 0}
//               </span>{" "}
//               news articles posted.
//             </p>
//           </div>

//           <Button
//             onClick={() =>
//               navigate("/dashboard/secure/admin-panel/create-news")
//             }
//             className="bg-[#604B33] hover:bg-[#4a3a28] text-white shadow-md active:scale-95 transition-all"
//           >
//             <Plus className="w-4 h-4 mr-2" /> Create New
//           </Button>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
//           {blogs?.length && blogs.length > 0 ? (
//             <div className="overflow-x-auto">
//               <Table>
//                 <TableHeader className="bg-[#604B33]/5">
//                   <TableRow className="hover:bg-transparent border-[#604B33]/10">
//                     <TableHead className="w-[60px] text-center font-bold text-[#604B33]">
//                       SL
//                     </TableHead>
//                     <TableHead className="w-[80px] font-bold text-[#604B33]">
//                       Image
//                     </TableHead>
//                     <TableHead className="min-w-[250px] font-bold text-[#604B33]">
//                       Title
//                     </TableHead>
//                     <TableHead className="hidden md:table-cell font-bold text-[#604B33]">
//                       Author
//                     </TableHead>
//                     <TableHead className="hidden lg:table-cell min-w-[120px] font-bold text-[#604B33]">
//                       Date
//                     </TableHead>
//                     <TableHead className="text-right font-bold text-[#604B33] pr-6">
//                       Actions
//                     </TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {blogs.map((blog, idx) => (
//                     <TableRow
//                       key={blog._id}
//                       className="transition-all border-gray-100 hover:bg-gray-50/80 group"
//                     >
//                       {/* SL */}
//                       <TableCell className="font-medium text-center text-gray-500">
//                         {idx + 1}
//                       </TableCell>

//                       {/* Image Thumbnail */}
//                       <TableCell>
//                         <div className="h-10 overflow-hidden bg-gray-100 border border-gray-200 rounded w-14">
//                           {blog.image ? (
//                             <img
//                               src={blog.image}
//                               alt="thumb"
//                               className="object-cover w-full h-full"
//                             />
//                           ) : (
//                             <div className="flex items-center justify-center w-full h-full text-gray-400">
//                               <ImageIcon size={16} />
//                             </div>
//                           )}
//                         </div>
//                       </TableCell>

//                       {/* Title & Mobile Info */}
//                       <TableCell className="max-w-[250px]">
//                         <div
//                           className="font-semibold text-gray-800 truncate bangla"
//                           title={blog.title}
//                         >
//                           {blog.title}
//                         </div>
//                         {/* Mobile-only sub-info */}
//                         <div className="md:hidden text-[11px] text-gray-400 mt-1 flex items-center gap-2">
//                           <span className="flex items-center gap-1">
//                             <User size={10} /> {blog.author}
//                           </span>
//                           <span>•</span>
//                           <span>{blog.date}</span>
//                         </div>
//                       </TableCell>

//                       {/* Author */}
//                       <TableCell className="hidden text-gray-600 md:table-cell">
//                         <div className="flex items-center gap-2 text-sm bangla">
//                           <div className="p-1.5 bg-gray-100 rounded-full">
//                             <User size={14} className="text-[#604B33]" />
//                           </div>
//                           {blog.author}
//                         </div>
//                       </TableCell>

//                       {/* Date */}
//                       <TableCell className="hidden text-gray-500 lg:table-cell">
//                         <div className="flex items-center gap-2 text-sm">
//                           <Calendar size={14} />
//                           {blog.date}
//                         </div>
//                       </TableCell>

//                       {/* Actions */}
//                       <TableCell className="pr-6 text-right">
//                         <div className="flex justify-end gap-2 transition-opacity opacity-80 group-hover:opacity-100">
//                           {/* Edit Button */}
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="w-8 h-8 text-blue-600 border-blue-200 hover:text-blue-700 hover:bg-blue-50"
//                             asChild
//                           >
//                             <Link
//                               to={`/dashboard/secure/admin-panel/manage-news/edit-news/${2}`}
//                             >
//                               <Edit size={14} />
//                             </Link>
//                           </Button>

//                           {/* Delete Dialog */}
//                           <Dialog>
//                             <DialogTrigger asChild>
//                               <Button
//                                 variant="outline"
//                                 size="icon"
//                                 className="w-8 h-8 text-red-600 border-red-200 hover:text-red-700 hover:bg-red-50"
//                               >
//                                 <Trash2 size={14} />
//                               </Button>
//                             </DialogTrigger>
//                             <DialogContent className="sm:max-w-[425px] border-l-4 border-l-red-500">
//                               <DialogHeader>
//                                 <DialogTitle className="flex items-center gap-2 text-red-600">
//                                   <AlertCircle size={20} /> Delete News?
//                                 </DialogTitle>
//                                 <DialogDescription className="pt-2 text-gray-600">
//                                   Are you sure you want to delete{" "}
//                                   <span className="font-bold text-gray-900">
//                                     "{blog.title}"
//                                   </span>
//                                   ? <br />
//                                   This action cannot be undone.
//                                 </DialogDescription>
//                               </DialogHeader>
//                               <DialogFooter className="gap-2 mt-4 sm:gap-0">
//                                 <DialogClose asChild>
//                                   <Button
//                                     variant="outline"
//                                     className="w-full sm:w-auto hover:bg-gray-100"
//                                   >
//                                     Cancel
//                                   </Button>
//                                 </DialogClose>
//                                 <Button
//                                   variant="destructive"
//                                   className="w-full bg-red-600 sm:w-auto hover:bg-red-700"
//                                   onClick={() =>
//                                     handleDeleteBlog(blog._id || "")
//                                   }
//                                 >
//                                   Yes, Delete
//                                 </Button>
//                               </DialogFooter>
//                             </DialogContent>
//                           </Dialog>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           ) : (
//             // Empty State
//             <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
//               <div className="flex items-center justify-center w-20 h-20 mb-4 border border-gray-100 rounded-full bg-gray-50">
//                 <FileText className="w-10 h-10 text-gray-300" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 No news available
//               </h3>
//               <p className="max-w-sm mt-1 mb-6 text-gray-500">
//                 It looks like you haven't published any news yet. Start sharing
//                 updates with your audience.
//               </p>
//               <Button
//                 onClick={() =>
//                   navigate("/dashboard/secure/admin-panel/create-news")
//                 }
//                 className="bg-[#604B33] hover:bg-[#4a3a28]"
//               >
//                 <Plus className="w-4 h-4 mr-2" /> Create First News
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { deleteNews, getNews } from "@/RTK/features/news/newsSlice"; // News actions import
import {
  Edit,
  Trash2,
  FileText, // Icon for News
  Plus,
  Calendar,
  User,
  AlertCircle,
  ImageIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ManageNews() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // ১. ব্লগ স্লাইসের বদলে নিউজ স্লাইস থেকে ডাটা আনা হচ্ছে
  const { newsList, loading } = useAppSelector((state) => state.news);

  // ২. পেজ লোড হলে নিউজ ফেচ করা হবে
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const handleDeleteNews = (id: string) => {
    dispatch(deleteNews(id));
    toast.success("News deleted successfully");
  };

  if (loading) return <BlogsLoading />;

  return (
    <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
      <section className="mx-auto space-y-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-4 p-6 bg-white border border-gray-200 shadow-sm rounded-xl md:p-8 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
              <FileText className="w-8 h-8 opacity-80" />
              Manage News
            </h1>
            <p className="text-sm text-gray-500">
              You have total{" "}
              <span className="font-bold text-[#604B33]">
                {newsList?.length || 0}
              </span>{" "}
              news articles posted.
            </p>
          </div>

          <Button
            onClick={() =>
              navigate("/dashboard/secure/admin-panel/create-news")
            }
            className="bg-[#604B33] hover:bg-[#4a3a28] text-white shadow-md active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 mr-2" /> Create New
          </Button>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          {newsList?.length && newsList.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-[#604B33]/5">
                  <TableRow className="hover:bg-transparent border-[#604B33]/10">
                    <TableHead className="w-[60px] text-center font-bold text-[#604B33]">
                      SL
                    </TableHead>
                    <TableHead className="w-[80px] font-bold text-[#604B33]">
                      Image
                    </TableHead>
                    <TableHead className="min-w-[250px] font-bold text-[#604B33]">
                      Title
                    </TableHead>
                    {/* Category Column Removed for News */}
                    <TableHead className="hidden md:table-cell font-bold text-[#604B33]">
                      Author
                    </TableHead>
                    <TableHead className="hidden lg:table-cell min-w-[120px] font-bold text-[#604B33]">
                      Date
                    </TableHead>
                    <TableHead className="text-right font-bold text-[#604B33] pr-6">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newsList.map((news, idx) => (
                    <TableRow
                      key={news._id}
                      className="transition-all border-gray-100 hover:bg-gray-50/80 group"
                    >
                      {/* SL */}
                      <TableCell className="font-medium text-center text-gray-500">
                        {idx + 1}
                      </TableCell>

                      {/* Image Thumbnail */}
                      <TableCell>
                        <div className="h-10 overflow-hidden bg-gray-100 border border-gray-200 rounded w-14">
                          {news.image ? (
                            <img
                              src={news.image.url}
                              alt="thumb"
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full text-gray-400">
                              <ImageIcon size={16} />
                            </div>
                          )}
                        </div>
                      </TableCell>

                      {/* Title & Mobile Info */}
                      <TableCell className="max-w-[250px]">
                        <div
                          className="font-semibold text-gray-800 truncate bangla"
                          title={news.title}
                        >
                          {news.title}
                        </div>
                        {/* Mobile-only sub-info */}
                        <div className="md:hidden text-[11px] text-gray-400 mt-1 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <User size={10} /> {news.author}
                          </span>
                          <span>•</span>
                          <span>{news.date}</span>
                        </div>
                      </TableCell>

                      {/* Author */}
                      <TableCell className="hidden text-gray-600 md:table-cell">
                        <div className="flex items-center gap-2 text-sm bangla">
                          <div className="p-1.5 bg-gray-100 rounded-full">
                            <User size={14} className="text-[#604B33]" />
                          </div>
                          {news.author}
                        </div>
                      </TableCell>

                      {/* Date */}
                      <TableCell className="hidden text-gray-500 lg:table-cell">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={14} />
                          {news.date}
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="pr-6 text-right">
                        <div className="flex justify-end gap-2 transition-opacity opacity-80 group-hover:opacity-100">
                          {/* Edit Button */}
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="w-8 h-8 text-blue-600 border-blue-200 hover:text-blue-700 hover:bg-blue-50"
                          >
                            {/* Fixed Link to correct News Edit Route */}
                            <Link
                              to={`/dashboard/secure/admin-panel/manage-news/edit-news/${news._id}`}
                            >
                              <Edit size={14} />
                            </Link>
                          </Button>

                          {/* Delete Dialog */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8 text-red-600 border-red-200 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] border-l-4 border-l-red-500">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-red-600">
                                  <AlertCircle size={20} /> Delete News?
                                </DialogTitle>
                                <DialogDescription className="pt-2 text-gray-600">
                                  Are you sure you want to delete{" "}
                                  <span className="font-bold text-gray-900">
                                    "{news.title}"
                                  </span>
                                  ? <br />
                                  This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter className="gap-2 mt-4 sm:gap-0">
                                <DialogClose asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full sm:w-auto hover:bg-gray-100"
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  className="w-full bg-red-600 sm:w-auto hover:bg-red-700"
                                  onClick={() =>
                                    handleDeleteNews(news._id || "")
                                  }
                                >
                                  Yes, Delete
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
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
              <div className="flex items-center justify-center w-20 h-20 mb-4 border border-gray-100 rounded-full bg-gray-50">
                <FileText className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                No news available
              </h3>
              <p className="max-w-sm mt-1 mb-6 text-gray-500">
                It looks like you haven't published any news yet. Start sharing
                updates with your audience.
              </p>
              <Button
                onClick={() =>
                  navigate("/dashboard/secure/admin-panel/create-news")
                }
                className="bg-[#604B33] hover:bg-[#4a3a28]"
              >
                <Plus className="w-4 h-4 mr-2" /> Create First News
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
