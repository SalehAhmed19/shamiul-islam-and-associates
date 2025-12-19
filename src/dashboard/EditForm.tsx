
import { useForm } from "react-hook-form";
import Heading from "../components/ui/Headings/Heading";
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
import { Edit, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
import { useGetBlog } from "@/hooks/useGetBlog";
import { useParams } from "react-router-dom";

export default function EditForm() {
    const { id } = useParams()
    const { blog } = useGetBlog(id ? id : "")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const fromSchema = z.object({
        title: z.string().min(3, "Title must be at least 3 characters long").optional().or(z.literal("")),
        category: z.string().min(3, "Category must be at least 3 characters long").optional().or(z.literal("")),
        date: z.string().min(3, "Date must be at least 3 characters long").optional().or(z.literal("")),
        author: z.string().min(3, "Author must be at least 3 characters long").optional().or(z.literal("")),
        image: z.instanceof(File).refine(
            (file) => file.size <= 3 * 1024 * 1024,
            "Image size must be less than 3MB"
        ).optional().or(z.literal("")),
        relatedVideoLink: z.string().min(3, "Related Video Link must be at least 3 characters long").optional().or(z.literal("")),
        content: z.string().min(3, "Content must be at least 3 characters long").optional().or(z.literal("")),
    });

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
        defaultValues: {
            title: blog?.title,
            category: blog?.category,
            date: blog?.date,
            author: "অ্যাড. সামিউল ইসলাম প্রিন্স",
            image: undefined,
            relatedVideoLink: blog?.relatedVideoLink,
            content: blog?.content
        }
    });

    const dispatch = useAppDispatch();

    const onSubmit = async (data: z.infer<typeof fromSchema>) => {
        try {
            setIsSubmitting(true)
            let imageUrl = "";

            // ১. যদি ইমেজ থাকে তবেই আপলোড হবে
            if (data.image) {
                // আপনার uploadToCloudinary ফাংশনটি কল করা হচ্ছে
                imageUrl = await uploadToCloudinary(data.image);
            }

            // ২. ডাটা অবজেক্ট তৈরি করা হচ্ছে ডাটাবেসের জন্য
            const formData: Blog = {
                _id: blog?._id || "",
                title: data.title || "",
                category: data.category || "",
                date: data.date || "",
                author: data.author || "অ্যাড. সামিউল ইসলাম প্রিন্স",
                image: imageUrl, // এখানে এখন ক্লাউডিনারি থেকে আসা স্ট্রিং URL টি বসবে
                relatedVideoLink: data.relatedVideoLink || "",
                content: data.content || ""
            };

            // ৩. রিডাক্স অ্যাকশন ডিসপ্যাচ
            await dispatch(updateBlog(formData)).unwrap();

            toast.success("Blog updated successfully");

            // ৪. ফর্ম রিসেট
            form.reset();

            navigate("/dashboard/secure/admin-panel/manage-blogs")


        } catch (error) {
            toast.error("Something went wrong!");
            console.error("Submission Error:", error);
        }
        finally {
            setIsSubmitting(false)
        }
    };

    if (isSubmitting) return <AddBlogsLoading />

    return (
        // ১. মেইন কন্টেইনারে প্যাডিং (px-4) দিলাম যাতে মোবাইলে লেগে না থাকে
        <section className="py-6 px-4 md:px-0 space-y-6">
            <Heading>Update Blogs</Heading>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <div className="flex flex-col md:flex-row gap-6">
                            <FormField control={form.control} name="title" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-none py-6" placeholder="Enter title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="category" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Category</FormLabel>
                                    {/* <Input className="rounded-none py-6" placeholder="Enter category" {...field} /> */}
                                    <FormControl>
                                        <Select onValueChange={field.onChange}
                                            defaultValue={field.value}>
                                            <SelectTrigger className="w-full py-6 rounded-none">
                                                <SelectValue placeholder="Select Category" className="placeholder:text-black" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {options.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.title}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <FormField control={form.control} name="date" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-none py-6" placeholder="Enter date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="author" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-none py-6" placeholder="Enter author" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>


                        <div className="flex flex-col md:flex-row gap-6">
                            <FormField control={form.control} name="relatedVideoLink" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Related Video Link</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-none py-6" placeholder="Enter related video link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field: { onChange, value, ...rest } }) => (
                                <FormItem>
                                    {/* FormLabel সরিয়ে দেওয়া হয়েছে অথবা 'sr-only' ক্লাস দিয়ে হাইড করা হয়েছে */}
                                    <FormLabel htmlFor="image" className="">
                                        <div className="cursor-pointer w-full">
                                            {/* <img src={images.avatar} alt="avatar" className="w-40 h-40 rounded-xl aspect-square" /> */}
                                            <div className="bg-black/5 p-5 rounded w-full h-40 flex items-center justify-center">
                                                <Image className="text-black/20" />
                                            </div>
                                            <p className="text-center text-sm text-[#604B33]">Upload Thumbnail</p>
                                            <p className="text-center text-xs text-black/50">Allowed *.jpeg, *.jpg, *.png, *.gif
                                                <br /> Max size of 3.1 MB</p>
                                        </div>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="image"
                                            type="file"
                                            accept="image/*"
                                            className="rounded-none py-2 hidden" // ফাইল ইনপুটে py-6 এর বদলে py-2 বা h-auto ভালো দেখায়
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    onChange(file); // এটি সরাসরি ফাইল অবজেক্ট সেট করবে
                                                }
                                            }}
                                            {...rest} // value বাদ দিয়ে বাকি সব (name, onBlur, ref) পাস করা হচ্ছে
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <TipTap
                                        description={field.value || ""}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <Button type="submit" className="flex gap-2 items-center">Update Blog <Edit /></Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}