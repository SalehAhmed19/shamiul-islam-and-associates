import { useNavigate, useParams } from "react-router-dom"
import imageCompression from "browser-image-compression";
import { useGetAssociate } from "@/hooks/useGetAssociate"
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading"
import Heading from "@/components/ui/Headings/Heading"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Button from "@/components/ui/Buttons/Button"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { createAssociate } from "@/RTK/features/associates/associatesSlice"
import toast from "react-hot-toast"
import { useAppDispatch } from "@/hooks/hooks"
import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface"
import { Plus, UploadCloud } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { images } from "@/assets/assets"
import { useState } from "react"
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading"
import CloudinaryImageUploader from "txb-cloudinary-image-uploader"

export default function AddAssociates() {
    const { _id } = useParams()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { loading } = useGetAssociate(_id ? _id : "")
    const [preview, setPreview] = useState<string | null>(null)

    const designationOptions = [
        { value: "Head of Legal", title: "Head of Legal" },
        { value: "Senior Consultant", title: "Senior Consultant" },
        { value: "Consultant", title: "Consultant" },
        { value: "Associate", title: "Associate" },
    ];

    const courtOptions = [
        { value: "Bangladesh Supreme Court", title: "Bangladesh Supreme Court" },
        { value: "Dhaka Judge Court", title: "Dhaka Judge Court" },
    ];

    const fromSchema = z.object({
        name: z.string().min(3, "Name must be at least 3 characters long"),
        position: z.string().min(1, "Please select a designation"),
        image: z.instanceof(File).refine(
            (file) => file.size <= 3.1 * 1024 * 1024,
            "Image size must be less than 3.1MB"
        ),
        court: z.string().min(1, "Please select a court"),
    });

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
    });

    const onSubmit = async (data: z.infer<typeof fromSchema>) => {
        try {
            console.log("Associate added successfully");
            setIsSubmitting(true);

            // ১. পরিবর্তন: শুরুতে এটি null বা undefined রাখুন
            let imagePayload = null;

            const compressedOption = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            }

            if (data.image) {
                const compressedImage = await imageCompression(data.image, compressedOption);
                // ২. পরিবর্তন: এখানে এখন { url, public_id } অবজেক্ট আসবে
                imagePayload = await CloudinaryImageUploader(compressedImage, import.meta.env.VITE_CLOUDINARY_PRESET, import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
            }

            const formData: AssociatesInterface = {
                name: data.name,
                position: data.position,
                // ৩. পরিবর্তন: পুরো অবজেক্টটি পাস করছেন
                image: imagePayload,
                court: data.court
            };

            await dispatch(createAssociate(formData)).unwrap();
            toast.success("Associate added successfully");
            navigate("/dashboard/secure/admin-panel/manage-associates");
            form.reset();
            setPreview(null);
        } catch (error) {
            toast.error("Something went wrong!");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <BlogsLoading />
    if (isSubmitting) return <AddBlogsLoading title="Adding Associate..." />

    return (
        <section className="py-6 px-4 md:px-0 space-y-6 max-w-6xl mx-auto">
            <Heading>Add Associate</Heading>

            <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#604B33]">Associate Information</h3>

                {/* Main Responsive Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Side: Photo Upload (Spans 4 columns on large screens) */}
                    <div className="lg:col-span-4 p-6 border border-black/10 rounded-lg bg-white flex flex-col items-center justify-center space-y-4">
                        <p className="font-bold text-gray-500 w-full text-left">Profile Photo</p>

                        <div className="relative group">
                            <label className="cursor-pointer block" htmlFor="image">
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-inner bg-gray-50 flex items-center justify-center">
                                    <img
                                        src={preview || images.avatar}
                                        alt="avatar"
                                        className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                                    />
                                    {!preview && <UploadCloud className="absolute text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" size={40} />}
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-sm font-semibold text-[#604B33] hover:underline">Change Photo</p>
                                    <p className="text-[10px] md:text-xs text-gray-400 mt-2">
                                        Allowed *.jpeg, *.jpg, *.png, *.gif <br />
                                        Max size: 3.1 MB
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Right Side: Form Inputs (Spans 8 columns on large screens) */}
                    <div className="lg:col-span-8 p-6 border border-black/10 rounded-lg bg-white">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}
                                className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="name" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Full Name</FormLabel>
                                            <FormControl>
                                                <Input className="rounded-md py-6 border-gray-300 focus:ring-[#604B33]" placeholder="e.g. John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="position" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Designation</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="py-6 rounded-md border-gray-300">
                                                        <SelectValue placeholder="Select Designation" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {designationOptions.map((option) => (
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="court" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Associated Court</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="py-6 rounded-md border-gray-300">
                                                        <SelectValue placeholder="Select Court" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {courtOptions.map((option) => (
                                                        <SelectItem key={option.value} value={option.value}>
                                                            {option.title}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    {/* Hidden File Input Logic */}
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field: { onChange, value, ...rest } }) => (
                                            <FormItem className="hidden">
                                                <FormControl>
                                                    <Input
                                                        id="image"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                onChange(file);
                                                                const reader = new FileReader();
                                                                reader.onloadend = () => setPreview(reader.result as string);
                                                                reader.readAsDataURL(file);
                                                            }
                                                        }}
                                                        {...rest}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto flex gap-2 items-center justify-center transition-transform active:scale-95"
                                    >
                                        Add Associate <Plus size={18} />
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}