import Header from "../../components/ui/Header/Header";
import { images } from "../../assets/assets";
import BlogsPageLoading from "@/components/ui/Loadings/BlogsPageLoading";
import { useGetNews } from "@/hooks/useGetNews";
import NewsCard from "@/components/ui/Cards/NewsCard";

export default function NewsUpdatePage() {
  const { news, loading } = useGetNews();

  if (loading)
    return (
      <section>
        <Header image={images.blogs} title="News" />
        <BlogsPageLoading />
      </section>
    );
  console.log(news);

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
          {news?.map((newsItem, index) => (
            <NewsCard
              key={index}
              image={newsItem.image?.url as string}
              title={newsItem.title}
              date={newsItem.date}
              slug={newsItem.slug || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
