import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/Buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import TipTap from "@/components/ui/TextEditor/TipTap";
import type { Blog } from "@/Interfaces/blogsInterface";
import { updateBlog } from "@/RTK/features/blogs/blogsSlice";
import { useAppDispatch } from "@/hooks/hooks";
import toast from "react-hot-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { options } from "@/data/blogsCategory";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { Edit, UploadCloud } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
import { useGetBlog } from "@/hooks/useGetBlog";
import imageCompression from "browser-image-compression";

export default function EditForm() {
    const { id } = useParams();
    const [preview, setPreview] = useState<string | null>(null);
    const { blog } = useGetBlog(id ? id : "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const fromSchema = z.object({
        title: z.string().min(3, "Title must be at least 3 characters long").optional().or(z.literal("")),
        category: z.string().min(3, "Category is required").optional().or(z.literal("")),
        date: z.string().min(3, "Date is required").optional().or(z.literal("")),
        author: z.string().min(3, "Author is required").optional().or(z.literal("")),
        image: z.any().optional(),
        relatedVideoLink: z.string().optional().or(z.literal("")),
        content: z.string().min(3, "Content is required").optional().or(z.literal("")),
    });

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
    });

    // Update form values when blog data arrives
    useEffect(() => {
        if (blog) {
            form.reset({
                title: blog.title,
                category: blog.category,
                date: blog.date,
                author: blog.author || "অ্যাড. সামিউল ইসলাম প্রিন্স",
                relatedVideoLink: blog.relatedVideoLink,
                content: blog.content
            });
        }
    }, [blog, form]);

    const onSubmit = async (data: z.infer<typeof fromSchema>) => {
        try {
            setIsSubmitting(true);
            const compressedOption = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            }

            let imagePayload = null;

            // Only upload if a new file is selected
            if (data.image instanceof File) {
                const compressedImage = await imageCompression(data.image, compressedOption);
                imagePayload = await uploadToCloudinary(compressedImage);
            }

            const formData: Blog = {
                _id: blog?._id || "",
                title: data.title || "",
                category: data.category || "",
                date: data.date || "",
                author: data.author || "অ্যাড. সামিউল ইসলাম প্রিন্স",
                image: imagePayload,
                relatedVideoLink: data.relatedVideoLink || "",
                content: data.content || ""
            };

            await dispatch(updateBlog(formData)).unwrap();
            toast.success("Blog updated successfully");
            navigate("/dashboard/secure/admin-panel/manage-blogs");
        } catch (error) {
            toast.error("Something went wrong!");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) return <AddBlogsLoading title="Blog Updating..." />;

    return (
        <section className="p-4 md:p-8 space-y-8 bg-white border border-black/10 rounded-lg max-w-5xl mx-auto shadow-sm">
            <header className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold text-[#604B33]">Update Blog Post</h1>
                <p className="text-sm text-gray-500">Fill in the details below to update a blog post.</p>
            </header>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Grid for Title and Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="title" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Title</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-6 border-gray-300 focus:ring-2 focus:ring-[#604B33]" placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="category" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Category</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="py-6 rounded-md border-gray-300">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {options.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* Grid for Date and Author */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="date" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Date</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-6 border-gray-300" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="author" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Author</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-6 border-gray-300" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* Video Link & Image Upload Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <FormField control={form.control} name="relatedVideoLink" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Related Video Link</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-6 border-gray-300" placeholder="Paste video URL" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="image" render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Thumbnail Image</FormLabel>
                                <FormControl>
                                    <div className="relative group">
                                        <label
                                            htmlFor="image-upload"
                                            className={`flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all overflow-hidden relative ${preview ? 'border-none p-0' : ''}`}
                                        >
                                            {preview ? (
                                                // Preview Image Logic
                                                <div className="w-full h-full relative group">
                                                    <img
                                                        src={preview}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                    {/* Hover Overlay to show user they can change it */}
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                                        <p className="text-white text-sm font-semibold">Change Image</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Default Upload UI
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <UploadCloud className="w-8 h-8 mb-2 text-gray-400 group-hover:text-[#604B33]" />
                                                    <p className="text-xs md:text-sm text-gray-500">
                                                        <span className="font-bold">Click to update image</span>
                                                    </p>
                                                    <p className="text-[10px] text-gray-400 mt-1">Leave blank to keep existing image</p>
                                                </div>
                                            )}

                                            <Input
                                                id="image-upload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        onChange(file);
                                                        // Create Preview URL
                                                        const objectUrl = URL.createObjectURL(file);
                                                        setPreview(objectUrl);
                                                    }
                                                }}
                                                {...rest}
                                            />
                                        </label>

                                        {/* Filename text below box (optional - keeping your original style logic) */}
                                        {!preview && form.watch("image") instanceof File && (
                                            <p className="text-xs text-[#604B33] mt-1 italic">
                                                New file selected: {form.watch("image").name}
                                            </p>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* Rich Text Content */}
                    <FormField control={form.control} name="content" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold">Blog Content</FormLabel>
                            <FormControl>
                                <div className="border rounded-md overflow-hidden min-h-[300px] bg-white">
                                    <TipTap
                                        description={field.value || ""}
                                        onChange={field.onChange}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <div className="pt-4 flex flex-col md:flex-row gap-4">
                        <Button
                            type="submit"
                            className="w-full md:w-auto px-10 h-12 text-lg flex gap-2 items-center justify-center"
                        >
                            Update Blog <Edit size={18} />
                        </Button>
                        <Button
                            type="button"
                            // variant="outline"
                            onClick={() => navigate(-1)}
                            className="w-full md:w-auto px-10 h-12 border-gray-300"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
}