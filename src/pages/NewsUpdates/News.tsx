// import DOMPurify from "dompurify";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useGetBlog } from "../../hooks/useGetBlog";
// import { images } from "../../assets/assets";
// import { useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import ReactPlayer from "react-player";
// import BlogsPageLoading from "@/components/ui/Loadings/BlogsPageLoading";
// import Header from "@/components/ui/Header/Header";
// import SEO from "@/components/SEO";
// import { Helmet } from "react-helmet-async"; // Schema-এর জন্য এটি লাগবে
// import ShareButtons from "@/components/ShareButtons";
// import { useGetSingleNews } from "@/hooks/useGetSingleNews";

// // HTML ট্যাগ রিমুভ করার ফাংশন (Description এর জন্য)
// const stripHtml = (html: any) => {
//   let doc = new DOMParser().parseFromString(html, "text/html");
//   return doc.body.textContent || "";
// };

// export default function News() {
//   const params = useParams();
//   const { news, loading } = useGetSingleNews(params.slug as string);

//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: news?.content || {},
//     editable: false,
//     editorProps: {
//       attributes: {
//         class: "prose max-w-none focus:outline-none",
//       },
//     },
//   });

//   useEffect(() => {
//     if (editor && news?.content) {
//       editor.commands.setContent(news.content);
//     }
//   }, [news, editor]);

//   if (loading) return <BlogsPageLoading />;
//   if (!news)
//     return <div className="p-10 text-center text-red-500">News not found</div>;

//   // ১. কন্টেন্ট স্যানিটাইজ করা (বডির জন্য)
//   const sanitizedContent = DOMPurify.sanitize(news?.content);

//   // ২. SEO-এর জন্য প্লেইন টেক্সট তৈরি করা (HTML রিমুভ করে ১৬০ ক্যারেক্টার নেওয়া)
//   const plainTextDescription =
//     stripHtml(news?.content).substring(0, 160) + "...";
//   const currentUrl = window.location.href;

//   // ৩. স্ট্রাকচার্ড ডেটা (JSON-LD) - গুগলকে আর্টিকেল চেনানোর জন্য
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     headline: news.title,
//     image: [news.image?.url as string],
//     datePublished: news.createdAt, // আপনার ডেটাবেসে থাকা তারিখ ফিল্ড
//     dateModified: news.updatedAt, // আপডেটেড তারিখ
//     author: [
//       {
//         "@type": "Person",
//         name: news.author || "Advocate Shamiul Islam",
//         url: "https://advprince.com",
//       },
//     ],
//   };

//   return (
//     <section>
//       {/* --- SEO Component Updated --- */}
//       <SEO
//         title={`${news.title} | Adv Prince`} // ব্র্যান্ডিং যুক্ত করা হলো
//         description={plainTextDescription} // ক্লিন টেক্সট
//         image={news.image?.url || ""}
//         url={currentUrl}
//       />

//       {/* --- JSON-LD Schema (গুগলের জন্য সিক্রেট ওয়েপন) --- */}
//       <Helmet>
//         <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
//       </Helmet>

//       <Header title="blog_details" image={images.blogs} />

//       <article className="container max-w-4xl px-4 py-6 mx-auto md:py-12">
//         {/* --- HEADER SECTION --- */}
//         <header className="mb-6 text-center md:mb-10">
//           {/* <span className="px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase rounded-full md:text-sm bangla bg-blue-50">
//             {news.category}
//           </span> */}

//           <h1 className="mt-4 mb-4 text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl bangla">
//             {news.title}
//           </h1>

//           <div className="flex items-center justify-center max-w-lg pb-6 mx-auto space-x-3 text-xs text-gray-500 border-b md:text-sm md:space-x-4">
//             <span className="flex items-center gap-1">
//               By{" "}
//               <span className="font-medium text-gray-800 bangla">
//                 {news.author}
//               </span>
//             </span>
//             <span>•</span>
//             <span className="bangla">{news.date}</span>
//           </div>
//         </header>

//         {/* --- FEATURED IMAGE --- */}
//         {news.image && (
//           <div className="mb-8 md:mb-12 w-full aspect-video md:h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-100">
//             <img
//               src={news.image.url as string}
//               alt={news.title} // Alt text-এ টাইটেল দেওয়া হলো SEO-এর জন্য
//               className="object-cover w-full h-full transition duration-700 transform hover:scale-105"
//             />
//           </div>
//         )}

//         {/* --- CONTENT BODY --- */}
//         <div
//           className="space-y-4 text-base font-light leading-relaxed text-justify text-gray-800 blog-content md:text-lg md:leading-9 md:space-y-6"
//           dangerouslySetInnerHTML={{ __html: sanitizedContent }}
//         ></div>

//         {/* --- VIDEO SECTION --- */}
//         {/* {news?.relatedVideoLink && (
//           <div className="pt-8 mt-10 border-t border-gray-200 md:mt-16">
//             <h3 className="flex items-center gap-2 mb-4 text-xl font-bold md:text-2xl md:mb-6 bangla">
//               এই বিষয়ে বিস্তারিত ভিডিও দেখুন
//             </h3>

//             <div className="relative w-full overflow-hidden bg-black shadow-lg aspect-video rounded-xl">
//               <ReactPlayer
//                 src={blog?.relatedVideoLink}
//                 width="100%"
//                 height="100%"
//                 controls={true}
//                 className="absolute top-0 left-0"
//               />
//             </div>
//           </div>
//         )} */}
//       </article>

//       <div className="container max-w-4xl px-4 py-6 mx-auto md:py-12">
//         <ShareButtons title={news?.title || ""} id={news?._id || ""} />
//       </div>
//     </section>
//   );
// }
import DOMPurify from "dompurify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { images } from "../../assets/assets";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BlogsPageLoading from "@/components/ui/Loadings/BlogsPageLoading";
import Header from "@/components/ui/Header/Header";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import ShareButtons from "@/components/ShareButtons";
import { useGetSingleNews } from "@/hooks/useGetSingleNews";

// HTML ট্যাগ রিমুভ করার উন্নত ফাংশন
const stripHtml = (html: any) => {
  if (!html || typeof html !== "string") return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
};

export default function News() {
  const params = useParams();
  // params.slug অথবা params.id আপনার রাউটিং অনুযায়ী চেক করুন
  const { news, loading } = useGetSingleNews(
    (params.slug || params.id) as string,
  );

  const editor = useEditor({
    extensions: [StarterKit],
    content: news?.content || "",
    editable: false,
    editorProps: {
      attributes: {
        class: "prose max-w-none focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (editor && news?.content) {
      editor.commands.setContent(news.content);
    }
  }, [news, editor]);

  if (loading) return <BlogsPageLoading />;
  if (!news)
    return (
      <div className="p-10 text-center text-red-500">
        News article not found
      </div>
    );

  const sanitizedContent = DOMPurify.sanitize(news?.content);

  // SEO Description তৈরি
  const plainTextDescription =
    stripHtml(news?.content).substring(0, 160) + "...";
  const currentUrl = window.location.href;

  // ৩. স্ট্রাকচার্ড ডেটা (NewsArticle টাইপ নিউজের জন্য বেস্ট)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle", // ব্লগের বদলে NewsArticle দিন
    headline: news.title,
    image: [news.image?.url],
    datePublished: news.createdAt,
    dateModified: news.updatedAt,
    author: [
      {
        "@type": "Person",
        name: news.author || "Advocate Shamiul Islam",
        url: "https://advprince.com",
      },
    ],
  };

  return (
    <section>
      {/* --- SEO Component --- */}
      <SEO
        title={`${news.title} | Adv Prince`}
        description={plainTextDescription}
        image={news.image?.url || ""}
        url={currentUrl}
      />

      {/* --- JSON-LD Schema --- */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Header title নিউজ অনুযায়ী পরিবর্তন করতে পারেন */}
      <Header title="news_details" image={images.blogs} />

      <article className="container max-w-4xl px-4 py-6 mx-auto md:py-12">
        <header className="mb-6 text-center md:mb-10">
          <h1 className="mt-4 mb-4 text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl bangla">
            {news.title}
          </h1>

          <div className="flex items-center justify-center max-w-lg pb-6 mx-auto space-x-3 text-xs text-gray-500 border-b md:text-sm md:space-x-4">
            <span className="flex items-center gap-1">
              By{" "}
              <span className="font-medium text-gray-800 bangla">
                {news.author}
              </span>
            </span>
            <span>•</span>
            <span className="bangla">{news.date}</span>
          </div>
        </header>

        {/* --- FEATURED IMAGE --- */}
        {news.image && (
          <div className="mb-8 md:mb-12 w-full aspect-video md:h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-100">
            <img
              src={news.image.url}
              alt={news.title}
              className="object-cover w-full h-full transition duration-700 transform hover:scale-105"
            />
          </div>
        )}

        {/* --- CONTENT BODY --- */}
        <div
          className="space-y-4 text-base font-light leading-relaxed text-justify text-gray-800 blog-content md:text-lg md:leading-9 md:space-y-6"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </article>

      <div className="container max-w-4xl px-4 py-6 mx-auto md:py-12">
        <ShareButtons title={news?.title || ""} id={news?._id || ""} />
      </div>
    </section>
  );
}
