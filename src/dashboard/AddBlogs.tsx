// import { useForm } from "react-hook-form";
// import Heading from "../components/ui/Headings/Heading";
// import * as z from "zod";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import Button from "@/components/ui/Buttons/Button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import TipTap from "@/components/ui/TextEditor/TipTap";
// import type { Blog } from "@/Interfaces/blogsInterface";
// import { createBlog } from "@/RTK/features/blogs/blogsSlice";
// import { useAppDispatch } from "@/hooks/hooks";
// import toast from "react-hot-toast";

// export default function AddBlogs() {
//     const currentDate = new Date().toDateString();
//     const fromSchema = z.object({
//         title: z.string().min(3, "Title must be at least 3 characters long"),
//         category: z.string().min(3, "Category must be at least 3 characters long"),
//         date: z.string().min(3, "Date must be at least 3 characters long"),
//         author: z.string().min(3, "Author must be at least 3 characters long"),
//         image: z.string().min(3, "Image must be at least 3 characters long"),
//         relatedVideoLink: z.string().min(3, "Related Video Link must be at least 3 characters long"),
//         content: z.string().min(3, "Content must be at least 3 characters long"),
//     });

//     const form = useForm<z.infer<typeof fromSchema>>({
//         mode: "onChange",
//         resolver: zodResolver(fromSchema),
//         defaultValues: {
//             title: "This is a blog",
//             category: "Blog Category",
//             date: currentDate,
//             author: "অ্যাড. সামিউল ইসলাম প্রিন্স",
//             image: "",
//             relatedVideoLink: "",
//             content: "This is a blog content"
//         }
//     });

//     const dispatch = useAppDispatch();

//     const onSubmit = (data: z.infer<typeof fromSchema>) => {
//         const formData: Blog = {
//             title: data.title,
//             category: data.category,
//             date: data.date,
//             author: data.author,
//             image: data.image,
//             relatedVideoLink: data.relatedVideoLink,
//             content: data.content
//         };

//         dispatch(createBlog(formData));
//         toast.success("Blog added successfully");

//         // ✅ RESET LOGIC HERE
//         // We pass empty strings to ensure it clears completely, 
//         // otherwise it would reset to the default "This is a blog" text.
//         form.reset({
//             title: "",
//             category: "",
//             date: "",
//             author: "",
//             image: "",
//             relatedVideoLink: "",
//             content: "",
//         });
//     };

//     return (
//         <section className="py-6 space-y-6">
//             <Heading>Add Blogs</Heading>
//             <div>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                         <div className="flex gap-6">
//                             <FormField control={form.control} name="title" render={({ field }) => (
//                                 <FormItem className="w-full">
//                                     <FormLabel>Title</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Enter title" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} />

//                             <FormField control={form.control} name="category" render={({ field }) => (
//                                 <FormItem className="w-full">
//                                     <FormLabel>Category</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Enter category" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} />
//                         </div>
//                         <div className="flex gap-6">
//                             <FormField control={form.control} name="date" render={({ field }) => (
//                                 <FormItem className="w-full">
//                                     <FormLabel>Date</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Enter date" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} />

//                             <FormField control={form.control} name="author" render={({ field }) => (
//                                 <FormItem className="w-full">
//                                     <FormLabel>Author</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Enter author" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} />
//                         </div>
//                         <div className="flex gap-6">
//                             <FormField control={form.control} name="image" render={({ field }) => (
//                                 <FormItem className="w-full">
//                                     <FormLabel>Image</FormLabel>
//                                     <FormControl>
//                                         <Input type="text" {...field} placeholder="Enter image url" />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} />

//                             <FormField control={form.control} name="relatedVideoLink" render={({ field }) => (
//                                 <FormItem className="w-full">
//                                     <FormLabel>Related Video Link</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Enter related video link" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} />
//                         </div>

//                         <FormField control={form.control} name="content" render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Content</FormLabel>
//                                 <FormControl>
//                                     {/* ✅ CHANGED: Added value={field.value} so TipTap clears when form resets */}
//                                     {/* <TipTap
//                                         description={field.name}
//                                         onChange={field.onChange}
//                                         value={field.value}
//                                     /> */}
//                                     <TipTap
//                                         description={field.value} // ✅ Pass form value here
//                                         onChange={field.onChange}
//                                     />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )} />

//                         <Button type="submit">Add Blog</Button>
//                     </form>
//                 </Form>
//             </div>
//         </section>
//     );
// }

import { useForm } from "react-hook-form";
import Heading from "../components/ui/Headings/Heading";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/Buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import TipTap from "@/components/ui/TextEditor/TipTap";
import type { Blog } from "@/Interfaces/blogsInterface";
import { createBlog } from "@/RTK/features/blogs/blogsSlice";
import { useAppDispatch } from "@/hooks/hooks";
import toast from "react-hot-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddBlogs() {
    const currentDate = new Date().toDateString();
    const fromSchema = z.object({
        title: z.string().min(3, "Title must be at least 3 characters long"),
        category: z.string().min(3, "Category must be at least 3 characters long"),
        date: z.string().min(3, "Date must be at least 3 characters long"),
        author: z.string().min(3, "Author must be at least 3 characters long"),
        image: z.string().min(3, "Image must be at least 3 characters long"),
        relatedVideoLink: z.string().min(3, "Related Video Link must be at least 3 characters long"),
        content: z.string().min(3, "Content must be at least 3 characters long"),
    });

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
        defaultValues: {
            title: "This is a blog",
            category: "",
            date: currentDate,
            author: "অ্যাড. সামিউল ইসলাম প্রিন্স",
            image: "",
            relatedVideoLink: "",
            content: "This is a blog content"
        }
    });

    const dispatch = useAppDispatch();

    const onSubmit = (data: z.infer<typeof fromSchema>) => {
        const formData: Blog = {
            title: data.title,
            category: data.category,
            date: data.date,
            author: data.author,
            image: data.image,
            relatedVideoLink: data.relatedVideoLink,
            content: data.content
        };

        dispatch(createBlog(formData));
        toast.success("Blog added successfully");

        form.reset({
            title: "",
            category: "",
            date: "",
            author: "",
            image: "",
            relatedVideoLink: "",
            content: "",
        });
    };

    return (
        // ১. মেইন কন্টেইনারে প্যাডিং (px-4) দিলাম যাতে মোবাইলে লেগে না থাকে
        <section className="py-6 px-4 md:px-0 space-y-6">
            <Heading>Add Blogs</Heading>
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
                                                <SelectItem value="নারী ও শিশু নির্যাতন">নারী ও শিশু নির্যাতন</SelectItem>
                                                <SelectItem value="বিবাহ ও তালাক">বিবাহ ও তালাক</SelectItem>
                                                <SelectItem value="পারিবারিক আইন ও অধিকার">পারিবারিক আইন ও অধিকার</SelectItem>
                                                <SelectItem value="ফৌজদারি আইন ও পরামর্শ">ফৌজদারি আইন ও পরামর্শ</SelectItem>
                                                <SelectItem value="আইন ও অধিকার / মুসলিম পারিবারিক আইন">আইন ও অধিকার / মুসলিম পারিবারিক আইন</SelectItem>
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
                            <FormField control={form.control} name="image" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-none py-6" type="text" {...field} placeholder="Enter image url" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

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

                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <TipTap
                                        description={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <Button type="submit">Add Blog</Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}