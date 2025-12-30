
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

    if (loading) return <div className="p-10 text-center">Loading...</div>
    if (!blog) return <div className="p-10 text-center">Blog not found</div>

    const sanitizedContent = DOMPurify.sanitize(blog?.content);

    if (loading) return <BlogsPageLoading />

    return (
        <section>
            <Header
                title="Blog"
                image={images.blogs}
            />

            {/* Changed: Added max-w-4xl for better readability on large screens */}
            <article className="container max-w-4xl mx-auto px-4 py-6 md:py-12">

                {/* --- HEADER SECTION --- */}
                <header className="mb-6 md:mb-10 text-center">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-xs md:text-sm bangla">
                        {blog.category}
                    </span>

                    {/* Changed: Responsive text size (text-2xl on mobile, 4xl on desktop) */}
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight bangla">
                        {blog.title}
                    </h1>

                    <div className="flex items-center justify-center text-gray-500 text-xs md:text-sm space-x-3 md:space-x-4">
                        <span>By <span className="bangla font-medium">{blog.author}</span></span>
                        <span>•</span>
                        <span className="bangla">{blog.date}</span>
                    </div>
                </header>

                {/* --- FEATURED IMAGE --- */}
                {blog.image && (
                    // Changed: Responsive height (h-56 on mobile, h-[400px] on desktop)
                    <div className="mb-8 md:mb-12 w-full h-56 sm:h-72 md:h-[400px] overflow-hidden rounded-xl shadow-sm">
                        <img
                            src={blog?.image.url as string}
                            alt={blog.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                        />
                    </div>
                )}

                {/* --- CONTENT BODY --- */}
                {/* Changed: Adjust text size and spacing for mobile vs desktop */}
                <div
                    className="blog-content text-base md:text-lg leading-relaxed md:leading-8 text-gray-800 space-y-4 md:space-y-6 text-justify"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                >
                </div>

                {/* --- VIDEO SECTION --- */}
                {blog?.relatedVideoLink && (
                    <div className='mt-10 md:mt-16 pt-6 border-t border-gray-100'>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bangla">
                            এই বিষয়ক বিস্তারিত ভিডিও দেখুন
                        </h3>

                        {/* Changed: Responsive Video Wrapper using aspect-video */}
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
        </section>
    )
}