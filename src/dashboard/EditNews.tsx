import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import TipTap from "@/components/ui/TextEditor/TipTap";
import type { News } from "@/Interfaces/NewsInterface"; // News Interface
import { updateNews } from "@/RTK/features/news/newsSlice"; // Correct Slice Action
import { useAppDispatch } from "@/hooks/hooks";
import toast from "react-hot-toast";
import {
  Edit,
  UploadCloud,
  Type,
  Calendar,
  User,
  ImageIcon,
  Loader2,
  FileText,
  Save,
  X,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
// Correct Hook
import imageCompression from "browser-image-compression";
import CloudinaryImageUploader from "txb-cloudinary-image-uploader";
import { useGetSingleNews } from "@/hooks/useGetSingleNews";

export default function EditNews() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Fetching News Data instead of Blog
  const { news, loading } = useGetSingleNews(id || "");

  // 2. Schema without Category & Video Link
  const formSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    date: z.string().min(1, "Date is required"),
    author: z.string().min(1, "Author is required"),
    image: z.any().optional(),
    content: z.string().min(10, "Content needs to be more descriptive"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: "",
      author: "",
      content: "",
    },
  });

  // 3. Populate form with existing NEWS data
  useEffect(() => {
    if (news) {
      form.reset({
        title: news.title,
        date: news.date,
        author: news.author || "অ্যাড. সামিউল ইসলাম প্রিন্স",
        content: news.content,
      });

      // Set existing image preview
      if (news.image && news.image.url) {
        setPreview(news.image.url);
      }
    }
  }, [news, form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const compressedOption = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      let imagePayload = null;

      // Only upload if a NEW file is selected
      if (data.image instanceof File) {
        const compressedImage = await imageCompression(
          data.image,
          compressedOption,
        );
        imagePayload = await CloudinaryImageUploader(
          compressedImage,
          import.meta.env.VITE_CLOUDINARY_PRESET,
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        );
      }

      // 4. Prepare News Payload
      const formData: News = {
        _id: news?._id || "",
        title: data.title,
        date: data.date,
        author: data.author,
        // Logic: New Image ? New Payload : Existing News Image
        image: imagePayload ? imagePayload : news?.image || null,
        content: data.content,
      };

      // 5. Dispatch updateNews
      await dispatch(updateNews(formData)).unwrap();
      toast.success("News updated successfully");
      // 6. Navigate to Manage News
      navigate("/dashboard/secure/admin-panel/manage-news");
    } catch (error) {
      toast.error("Failed to update news.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <AddBlogsLoading title="Loading News Data..." />;
  if (isSubmitting) return <AddBlogsLoading title="Updating News..." />;

  return (
    <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
      <section className="max-w-5xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
        {/* Header Section */}
        <div className="bg-[#604B33]/5 px-6 py-8 border-b border-[#604B33]/10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
              <Edit className="w-8 h-8 opacity-80" />
              Update News
            </h1>
            <p className="ml-1 text-sm text-gray-500 md:text-base">
              Modify the details below to update this news article.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Row 1: Title (Full Width) */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                        <Type size={16} /> Headline
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-6 px-4 text-lg font-medium border-gray-200 focus:border-[#604B33] focus:ring-[#604B33]/20 transition-all rounded-lg"
                          placeholder="Enter news headline"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 2: Date & Author */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                        <Calendar size={16} /> Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-5 border-gray-200 bg-gray-50/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                        <User size={16} /> Author
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-5 border-gray-200 bg-gray-50/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 3: Image Upload Section */}
              <FormField
                control={form.control}
                name="image"
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                      <ImageIcon size={16} /> Featured Image
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <label
                          htmlFor="image-upload"
                          className={`
                            relative flex flex-col items-center justify-center w-full h-56 md:h-64 
                            border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300
                            ${
                              preview
                                ? "border-transparent shadow-md"
                                : "border-gray-300 bg-gray-50 hover:bg-[#604B33]/5 hover:border-[#604B33]/40"
                            }
                          `}
                        >
                          {preview ? (
                            <div className="relative w-full h-full overflow-hidden transition-shadow rounded-xl group-hover:shadow-lg">
                              <img
                                src={preview}
                                alt="Preview"
                                className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="flex items-center gap-2 px-4 py-2 text-white border rounded-full bg-white/20 border-white/30 backdrop-blur-md">
                                  <UploadCloud size={18} /> Change Image
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-6 space-y-3 text-center">
                              <div className="w-16 h-16 bg-[#604B33]/10 text-[#604B33] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                <UploadCloud size={28} />
                              </div>
                              <p className="text-sm font-semibold text-gray-700">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">
                                Leave blank to keep existing image
                              </p>
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
                                const objectUrl = URL.createObjectURL(file);
                                setPreview(objectUrl);
                              }
                            }}
                            {...rest}
                          />
                        </label>

                        {/* New file selected indicator */}
                        {!preview && form.watch("image") instanceof File && (
                          <p className="text-xs text-[#604B33] mt-2 italic text-center">
                            New file selected: {form.watch("image").name}
                          </p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Row 4: Editor Section */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                      <FileText size={16} /> Content
                    </FormLabel>
                    <FormControl>
                      <div className="min-h-[350px] border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white focus-within:border-[#604B33] focus-within:ring-1 focus-within:ring-[#604B33] transition-all">
                        <TipTap
                          description={field.value || ""}
                          onChange={field.onChange}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Action Buttons */}
              <div className="flex flex-col justify-end gap-4 pt-4 md:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    navigate("/dashboard/secure/admin-panel/manage-news")
                  }
                  className="px-6 py-3.5 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <X size={18} /> Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium text-lg shadow-lg
                    transform active:scale-95 transition-all duration-200
                    ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#604B33] hover:bg-[#4a3a28] hover:shadow-xl"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Updating...
                    </>
                  ) : (
                    <>
                      Save Changes <Save size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
