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
import { createAssociate } from "@/RTK/features/associates/associatesSlice"
import toast from "react-hot-toast"
import { useAppDispatch } from "@/hooks/hooks"
import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface"
import { Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { uploadToCloudinary } from "@/utils/uploadToCloudinary"
import { images } from "@/assets/assets"

export default function AddAssociates() {
    const { _id } = useParams()
    const { loading } = useGetAssociate(_id ? _id : "")

    interface CourtInterface {
        value: string;
        title: string;
    }

    interface DesignationInterface {
        value: string;
        title: string;
    }

    const designationOptions: DesignationInterface[] = [
        { value: "Head of Legal", title: "Head of Legal" },
        { value: "Senior Consultant", title: "Senior Consultant" },
        { value: "Associates    ", title: "Associates" },
    ];

    const courtOptions: CourtInterface[] = [
        { value: "Bangladesh Supreme Court", title: "Bangladesh Supreme Court" },
        { value: "Dhaka Judge Court", title: "Dhaka Judge Court" },
    ];


    const fromSchema = z.object({
        name: z.string().min(3, "Name must be at least 3 characters long"),
        position: z.string().min(3, "Designation must be at least 3 characters long"),
        image: z.instanceof(File).refine(
            (file) => file.size <= 3 * 1024 * 1024,
            "Image size must be less than 3MB"
        ).optional().or(z.literal("")),
        court: z.string().min(3, "Court must be at least 3 characters long"),
    });

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
    });

    const onSubmit = async (data: z.infer<typeof fromSchema>) => {
        try {
            let imageUrl = data.image; // যদি আগের ইমেজ থাকে

            // ১. যদি নতুন কোনো ফাইল (File Object) সিলেক্ট করা হয়, তবে আপলোড করো
            if (data.image && typeof data.image !== "string") {
                imageUrl = await uploadToCloudinary(data.image); // [0] removed because data.image is already a File object
            }

            // ২. আপনার ডাটা অবজেক্ট তৈরি
            const formData: AssociatesInterface = {
                name: data.name,
                position: data.position,
                image: imageUrl as string, // এখানে এখন স্ট্রিং ইউআরএল যাচ্ছে
                court: data.court
            };

            // ৩. ডিসপ্যাচ এবং নেভিগেট
            await dispatch(createAssociate(formData)).unwrap();

            toast.success("Associate added successfully");
            navigate("/dashboard/secure/admin-panel/manage-associates");

            // ৪. ফর্ম রিসেট
            form.reset();
        } catch (error) {
            toast.error("Something went wrong!");
            console.error(error);
        }
    };

    if (loading) return <BlogsLoading />

    return (
        <section className="space-y-6">
            <Heading>Add Associate</Heading>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold">Associate info:</h3>
                <div className="flex gap-5">
                    <div className="p-5 border border-black/10 rounded space-y-6">
                        <p className="font-bold text-black/50">Profile Photo</p>
                        <label className="cursor-pointer" htmlFor="image">
                            <img src={images.avatar} alt="avatar" className="w-40 h-40 rounded-xl aspect-square" />
                            <p className="text-center text-sm text-[#604B33]">Change Photo</p>
                            <p className="text-center text-xs text-black/50">Allowed *.jpeg, *.jpg, *.png, *.gif
                                <br /> Max size of 3.1 MB</p>
                        </label>


                    </div>
                    <div className="p-5 border border-black/10 rounded space-y-6 w-full">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <FormField control={form.control} name="name" render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input className="rounded-none py-6" placeholder="Enter name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="position" render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Designation</FormLabel>
                                            {/* <Input className="rounded-none py-6" placeholder="Enter category" {...field} /> */}
                                            <FormControl>
                                                <Select onValueChange={field.onChange}
                                                    defaultValue={field.value}>
                                                    <SelectTrigger className="w-full py-6 rounded-none">
                                                        <SelectValue placeholder="Select Designation" className="placeholder:text-black" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {designationOptions.map((option) => (
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
                                    <FormField control={form.control} name="court" render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Court</FormLabel>
                                            {/* <Input className="rounded-none py-6" placeholder="Enter category" {...field} /> */}
                                            <FormControl>
                                                <Select onValueChange={field.onChange}
                                                    defaultValue={field.value}>
                                                    <SelectTrigger className="w-full py-6 rounded-none">
                                                        <SelectValue placeholder="Select Court" className="placeholder:text-black" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {courtOptions.map((option) => (
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

                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field: { onChange, value, ...rest } }) => (
                                            <FormItem className="w-full">
                                                {/* FormLabel সরিয়ে দেওয়া হয়েছে অথবা 'sr-only' ক্লাস দিয়ে হাইড করা হয়েছে */}
                                                {/* <FormLabel htmlFor="image" className="">
                                                    <div className="cursor-pointer">
                                                        <img src={images.avatar} alt="avatar" className="w-40 h-40 rounded-xl aspect-square" />
                                                        <p className="text-center text-sm text-[#604B33]">Change Photo</p>
                                                        <p className="text-center text-xs text-black/50">Allowed *.jpeg, *.jpg, *.png, *.gif
                                                            <br /> Max size of 3.1 MB</p>
                                                    </div>
                                                </FormLabel> */}
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
                                </div>

                                <Button type="submit" className="flex gap-2 items-center">Add Associates <Plus /></Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section >
    )
}