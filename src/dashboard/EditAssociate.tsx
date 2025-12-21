
import imageCompression from "browser-image-compression";
import { useNavigate, useParams } from "react-router-dom"
import { useGetAssociate } from "@/hooks/useGetAssociate"
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading"
import Heading from "@/components/ui/Headings/Heading"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Button from "@/components/ui/Buttons/Button"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { updateAssociate } from "@/RTK/features/associates/associatesSlice"
import toast from "react-hot-toast"
import { useAppDispatch } from "@/hooks/hooks"
import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface"
import { Edit, UploadCloud } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { uploadToCloudinary } from "@/utils/uploadToCloudinary"

export default function EditAssociate() {
    const { _id } = useParams()
    const { associate, loading } = useGetAssociate(_id ? _id : "")
    const [preview, setPreview] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const designationOptions = [
        { value: "Head of Legal", title: "Head of Legal" },
        { value: "Senior Consultant", title: "Senior Consultant" },
        { value: "Associates", title: "Associates" },
    ];

    const courtOptions = [
        { value: "Bangladesh Supreme Court", title: "Bangladesh Supreme Court" },
        { value: "Dhaka Judge Court", title: "Dhaka Judge Court" },
    ];

    const fromSchema = z.object({
        name: z.string().min(3, "Name must be at least 3 characters long"),
        position: z.string().min(3, "Designation must be at least 3 characters long"),
        image: z.any().optional(),
        court: z.string().min(3, "Court must be at least 3 characters long"),
    });

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
    });

    // Reset form values when associate data is fetched
    useEffect(() => {
        if (associate) {
            form.reset({
                name: associate.name,
                position: associate.position,
                court: associate.court,
                image: associate.image
            });
            setPreview(associate.image as string);
        }
    }, [associate, form]);

    const onSubmit = async (data: z.infer<typeof fromSchema>) => {
        try {
            setIsSubmitting(true);
            let imageUrl = associate?.image || "";
            const compressedOption = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            }
            // Check if a new file was selected
            if (data.image instanceof File) {
                const compressedImage = await imageCompression(data.image, compressedOption);
                imageUrl = await uploadToCloudinary(compressedImage);
            }

            const formData: AssociatesInterface = {
                _id: associate?._id || "",
                name: data.name,
                position: data.position,
                image: imageUrl as string,
                court: data.court
            };

            await dispatch(updateAssociate(formData)).unwrap();
            toast.success("Associate updated successfully");
            navigate("/dashboard/secure/admin-panel/manage-associates");
        } catch (error) {
            toast.error("Update failed. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <BlogsLoading />

    return (
        <section className="py-6 px-4 md:px-0 space-y-8 max-w-6xl mx-auto h-screen">
            <Heading>Edit Associate</Heading>

            <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#604B33]">Associate Profile Info</h3>

                {/* Responsive Grid: Stacks on mobile, Side-by-side on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* PHOTO UPLOAD SECTION (4 columns on desktop) */}
                    <div className="lg:col-span-4 p-6 border border-black/10 rounded-xl bg-white  flex flex-col items-center">
                        <p className="font-bold text-gray-400 self-start mb-6 uppercase tracking-wider text-xs">Profile Photo</p>

                        <label htmlFor="image-input" className="cursor-pointer group relative block w-fit mx-auto">
                            {/* This container has rounded-full AND overflow-hidden to clip everything inside it */}
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-md group-hover:border-[#604B33] transition-all">

                                <img
                                    src={preview || "/placeholder-avatar.png"}
                                    alt="Associate Preview"
                                    className="w-full h-full object-cover"
                                />

                                {/* Moving the overlay inside the overflow-hidden div ensures it is perfectly round */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <UploadCloud className="text-white" size={32} />
                                </div>

                            </div>

                            <p className="mt-4 text-center text-sm font-semibold text-[#604B33] group-hover:underline">
                                Update Image
                            </p>
                        </label>

                        <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed">
                            Allowed formats: *.jpeg, *.jpg, *.png <br /> Max size: 3.1 MB
                        </p>
                    </div>

                    {/* FORM SECTION (8 columns on desktop) */}
                    <div className="lg:col-span-8 p-6 md:p-8 border border-black/10 rounded-xl bg-white ">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="name" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold text-gray-700">Full Name</FormLabel>
                                            <FormControl>
                                                <Input className="rounded-md py-6 border-gray-300 focus:ring-1 focus:ring-[#604B33]" placeholder="Enter name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="position" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold text-gray-700">Designation</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full py-6 rounded-md border-gray-300">
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
                                            <FormLabel className="font-semibold text-gray-700">Practicing Court</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full py-6 rounded-md border-gray-300">
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

                                    {/* Invisible File Input handled via Label */}
                                    <FormField control={form.control} name="image" render={({ field: { onChange, value, ...rest } }) => (
                                        <FormItem className="hidden">
                                            <FormControl>
                                                <Input
                                                    id="image-input"
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
                                    )} />
                                </div>

                                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                    <Button
                                        // disabled={isSubmitting}
                                        type="submit"
                                        className="w-full sm:w-auto px-10 h-12 text-md flex gap-2 items-center justify-center transition-all active:scale-95"
                                    >
                                        {isSubmitting ? "Updating..." : "Update Associate"} <Edit size={18} />
                                    </Button>
                                    <Button
                                        type="button"
                                        // variant="outline"
                                        onClick={() => navigate(-1)}
                                        className="w-full sm:w-auto px-10 h-12 border-gray-300"
                                    >
                                        Cancel
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