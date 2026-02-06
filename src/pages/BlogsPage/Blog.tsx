
// import DOMPurify from 'dompurify';
// import { useEffect } from 'react';
// import { useParams } from "react-router-dom"
// import { useGetBlog } from "../../hooks/useGetBlog"
// import { images } from "../../assets/assets"
// import { useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import ReactPlayer from 'react-player'
// import BlogsPageLoading from '@/components/ui/Loadings/BlogsPageLoading';
// import Header from '@/components/ui/Header/Header';
// import SEO from '@/components/SEO';

// export default function Blog() {
//     const params = useParams()
//     const { blog, loading } = useGetBlog(params.id as string)

//     const editor = useEditor({
//         extensions: [StarterKit],
//         content: blog?.content || {},
//         editable: false,
//         editorProps: {
//             attributes: {
//                 class: 'prose max-w-none focus:outline-none',
//             },
//         },
//     });

//     useEffect(() => {
//         if (editor && blog?.content) {
//             editor.commands.setContent(blog.content);
//         }
//     }, [blog, editor]);

//     if (loading) return <div className="p-10 text-center">Loading...</div>
//     if (!blog) return <div className="p-10 text-center">Blog not found</div>

//     const sanitizedContent = DOMPurify.sanitize(blog?.content);

//     if (loading) return <BlogsPageLoading />

//     return (
//         <section>
//             <SEO
//                 title={blog.title}
//                 description={blog.content}
//                 image={blog.image?.url ? blog.image.url : ""}
//                 url={window.location.href}
//             />
//             <Header
//                 title="Blog"
//                 image={images.blogs}
//             />

//             {/* Changed: Added max-w-4xl for better readability on large screens */}
//             <article className="container max-w-4xl mx-auto px-4 py-6 md:py-12">

//                 {/* --- HEADER SECTION --- */}
//                 <header className="mb-6 md:mb-10 text-center">
//                     <span className="text-blue-600 font-bold uppercase tracking-wider text-xs md:text-sm bangla">
//                         {blog.category}
//                     </span>

//                     {/* Changed: Responsive text size (text-2xl on mobile, 4xl on desktop) */}
//                     <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight bangla">
//                         {blog.title}
//                     </h1>

//                     <div className="flex items-center justify-center text-gray-500 text-xs md:text-sm space-x-3 md:space-x-4">
//                         <span>By <span className="bangla font-medium">{blog.author}</span></span>
//                         <span>•</span>
//                         <span className="bangla">{blog.date}</span>
//                     </div>
//                 </header>

//                 {/* --- FEATURED IMAGE --- */}
//                 {blog.image && (
//                     // Changed: Responsive height (h-56 on mobile, h-[400px] on desktop)
//                     <div className="mb-8 md:mb-12 w-full h-56 sm:h-72 md:h-[400px] overflow-hidden rounded-xl shadow-sm">
//                         <img
//                             src={blog?.image.url as string}
//                             alt={blog.title}
//                             className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
//                         />
//                     </div>
//                 )}

//                 {/* --- CONTENT BODY --- */}
//                 {/* Changed: Adjust text size and spacing for mobile vs desktop */}
//                 <div
//                     className="blog-content text-base md:text-lg leading-relaxed md:leading-8 text-gray-800 space-y-4 md:space-y-6 text-justify"
//                     dangerouslySetInnerHTML={{ __html: sanitizedContent }}
//                 >
//                 </div>

//                 {/* --- VIDEO SECTION --- */}
//                 {blog?.relatedVideoLink && (
//                     <div className='mt-10 md:mt-16 pt-6 border-t border-gray-100'>
//                         <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bangla">
//                             এই বিষয়ক বিস্তারিত ভিডিও দেখুন
//                         </h3>

//                         {/* Changed: Responsive Video Wrapper using aspect-video */}
//                         <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
//                             <ReactPlayer
//                                 src={blog?.relatedVideoLink}
//                                 width="100%"
//                                 height="100%"
//                                 controls={true}
//                                 className='absolute top-0 left-0'
//                             />
//                         </div>
//                     </div>
//                 )}
//             </article>
//         </section>
//     )
// }

import DOMPurify from 'dompurify';
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useGetBlog } from "../../hooks/useGetBlog"
import { images } from "../../assets/assets"
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ReactPlayer from 'react-player'
import BlogsPageLoading from '@/components/ui/Loadings/BlogsPageLoading';
import Header from '@/components/ui/Header/Header';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async'; // Schema-এর জন্য এটি লাগবে
import ShareButtons from '@/components/ShareButtons';

// HTML ট্যাগ রিমুভ করার ফাংশন (Description এর জন্য)
const stripHtml = (html: any) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
};

export default function Blog() {
    const params = useParams()
    const { blog, loading } = useGetBlog(params.id as string)

    const editor = useEditor({
        extensions: [StarterKit],
        content: blog?.content || {},
        editable: false,
        editorProps: {
            attributes: {
                class: 'prose max-w-none focus:outline-none',
            },
        },
    });

    useEffect(() => {
        if (editor && blog?.content) {
            editor.commands.setContent(blog.content);
        }
    }, [blog, editor]);

    if (loading) return <BlogsPageLoading />
    if (!blog) return <div className="p-10 text-center text-red-500">Blog not found</div>

    // ১. কন্টেন্ট স্যানিটাইজ করা (বডির জন্য)
    const sanitizedContent = DOMPurify.sanitize(blog?.content);

    // ২. SEO-এর জন্য প্লেইন টেক্সট তৈরি করা (HTML রিমুভ করে ১৬০ ক্যারেক্টার নেওয়া)
    const plainTextDescription = stripHtml(blog?.content).substring(0, 160) + "...";
    const currentUrl = window.location.href;

    // ৩. স্ট্রাকচার্ড ডেটা (JSON-LD) - গুগলকে আর্টিকেল চেনানোর জন্য
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "image": [blog.image?.url],
        "datePublished": blog.createdAt, // আপনার ডেটাবেসে থাকা তারিখ ফিল্ড
        "dateModified": blog.updatedAt,   // আপডেটেড তারিখ
        "author": [{
            "@type": "Person",
            "name": blog.author || "Advocate Shamiul Islam",
            "url": "https://advprince.com"
        }]
    };

    return (
        <section>
            {/* --- SEO Component Updated --- */}
            <SEO
                title={`${blog.title} | Adv Prince`} // ব্র্যান্ডিং যুক্ত করা হলো
                description={plainTextDescription}   // ক্লিন টেক্সট
                image={blog.image?.url || ""}
                url={currentUrl}
            />

            {/* --- JSON-LD Schema (গুগলের জন্য সিক্রেট ওয়েপন) --- */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <Header
                title="Blog Details"
                image={images.blogs}
            />

            <article className="container max-w-4xl mx-auto px-4 py-6 md:py-12">

                {/* --- HEADER SECTION --- */}
                <header className="mb-6 md:mb-10 text-center">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-xs md:text-sm bangla bg-blue-50 px-3 py-1 rounded-full">
                        {blog.category}
                    </span>

                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight bangla">
                        {blog.title}
                    </h1>

                    <div className="flex items-center justify-center text-gray-500 text-xs md:text-sm space-x-3 md:space-x-4 border-b pb-6 mx-auto max-w-lg">
                        <span className="flex items-center gap-1">
                            By <span className="bangla font-medium text-gray-800">{blog.author}</span>
                        </span>
                        <span>•</span>
                        <span className="bangla">{blog.date}</span>
                    </div>
                </header>

                {/* --- FEATURED IMAGE --- */}
                {blog.image && (
                    <div className="mb-8 md:mb-12 w-full aspect-video md:h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-100">
                        <img
                            src={blog?.image.url as string}
                            alt={blog.title} // Alt text-এ টাইটেল দেওয়া হলো SEO-এর জন্য
                            className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                        />
                    </div>
                )}

                {/* --- CONTENT BODY --- */}
                <div
                    className="blog-content text-base md:text-lg leading-relaxed md:leading-9 text-gray-800 space-y-4 md:space-y-6 text-justify font-light"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                >
                </div>

                {/* --- VIDEO SECTION --- */}
                {blog?.relatedVideoLink && (
                    <div className='mt-10 md:mt-16 pt-8 border-t border-gray-200'>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bangla flex items-center gap-2">
                            এই বিষয়ে বিস্তারিত ভিডিও দেখুন
                        </h3>

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                            <ReactPlayer
                                src={blog?.relatedVideoLink}
                                width="100%"
                                height="100%"
                                controls={true}
                                className='absolute top-0 left-0'
                            />
                        </div>
                    </div>
                )}
            </article>

            <div className="container max-w-4xl mx-auto px-4 py-6 md:py-12">
                <ShareButtons slug={blog?.slug || ""} title={blog?.title || ""} id={blog?._id || ""} />
            </div>
        </section>
    )
}