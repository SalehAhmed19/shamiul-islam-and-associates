import Header from "../../components/ui/Header/Header";
import { images } from "../../assets/assets";
import BlogCard from "../../components/ui/Cards/BlogCard";
import { useGetBlogs } from "../../hooks/useGetBlogs";
import BlogsPageLoading from "@/components/ui/Loadings/BlogsPageLoading";

export default function NewsUpdatePage() {
  const { blogs, loading } = useGetBlogs();

  if (loading)
    return (
      <section>
        <Header image={images.blogs} title="News" />
        <BlogsPageLoading />
      </section>
    );
  console.log(blogs);

  return (
    <section>
      <Header image={images.blogs} title="page_title_news" />

      {/* Changes made:
                1. Added 'px-4': Prevents cards from touching screen edges on mobile.
                2. Changed 'py-16' to 'py-10 md:py-16': Reduces vertical space on mobile.
            */}
      <div className="container px-4 py-10 mx-auto md:py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {blogs?.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image?.url as string}
              title={blog.title}
              date={blog.date}
              slug={blog.slug || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
