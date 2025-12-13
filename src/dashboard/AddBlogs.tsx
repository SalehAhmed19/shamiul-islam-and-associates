import { useForm } from "react-hook-form";
import Heading from "../components/ui/Headings/Heading";
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/Buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import TipTap from "@/components/ui/TextEditor/TipTap";
import type { Blog } from "@/Interfaces/blogsInterface";
import { createBlog } from "@/RTK/features/blogs/blogsSlice";
import { useAppDispatch } from "@/hooks/hooks";

export default function AddBlogs() {
    const fromSchema = z.object({
        title: z.string().min(3, "Title must be at least 3 characters long"),
        category: z.string().min(3, "Category must be at least 3 characters long"),
        date: z.string().min(3, "Date must be at least 3 characters long"),
        author: z.string().min(3, "Author must be at least 3 characters long"),
        image: z.string().min(3, "Image must be at least 3 characters long"),
        excerpt: z.string().min(3, "Excerpt must be at least 3 characters long"),
        content: z.string().min(3, "Content must be at least 3 characters long"),
    })

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
        defaultValues: {
            title: "This is a blog",
            category: "Blog Category",
            date: "2025-12-13",
            author: "John Doe",
            image: "",
            excerpt: "This is a blog excerpt",
            content: "This is a blog content"
        }
    })
    const dispatch = useAppDispatch()


    const onSubmit = (data: z.infer<typeof fromSchema>) => {
        const formData: Blog = {
            title: data.title,
            category: data.category,
            date: data.date,
            author: data.author,
            image: data.image,
            excerpt: data.excerpt,
            content: data.content
        }
        // dispatch(createBlog(formData))
        console.log(data)
        console.log(formData)
        dispatch(createBlog(formData))
    }
    return (
        <section className="p-16 space-y-6">
            <Heading className="text-center">Add Blogs</Heading>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex gap-6">
                            <FormField control={form.control} name="title" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                            </FormField>
                            <FormField control={form.control} name="category" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter category" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                            </FormField>
                        </div>
                        <div className="flex gap-6">
                            <FormField control={form.control} name="date" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                            </FormField>
                            <FormField control={form.control} name="author" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter author" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                            </FormField>
                        </div>
                        <div className="flex gap-6">
                            <FormField control={form.control} name="image" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input type="file" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                            </FormField>
                            <FormField control={form.control} name="excerpt" render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Excerpt</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter excerpt" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                            </FormField>
                        </div>
                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <TipTap description={field.name} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}>

                        </FormField>

                        <Button type="submit">Add Blog</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}