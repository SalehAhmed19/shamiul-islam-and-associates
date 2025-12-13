// import { useParams } from "react-router-dom"
// import { useGetBlog } from "../../hooks/useGetBlog"
// import { images } from "../../assets/assets"
// import BlogHeader from "../AboutPage/BlogHeader"
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';

// export default function Blog() {
//     const params = useParams()
//     const { blog, loading, error } = useGetBlog(params.id as string)
//     const date = blog?.createdAt?.split("T")[0] || ""
//     if (loading) return <div>Loading...</div>
//     if (!blog) return <div>Blog not found</div>

//     const editor = useEditor({
//         extensions: [StarterKit],
//         content: blog.content, // Load the JSON directly here
//         editable: false,       // 🔒 CRITICAL: This makes it a "viewer" not an editor
//         editorProps: {
//             attributes: {
//                 class: 'prose max-w-none focus:outline-none', // Tailwind Typography classes
//             },
//         },
//     });

//     return (
//         <section>
//             <BlogHeader image={images.blogs} title={blog.title} author={blog.author} category={blog.category} date={date} />

//             <article className="max-w-3xl mx-auto px-4 py-8">
//                 {/* --- HEADER SECTION --- */}
//                 <header className="mb-8 text-center">
//                     <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
//                         {blog.category}
//                     </span>
//                     <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
//                         {blog.title}
//                     </h1>
//                     <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
//                         <span>By {blog.author}</span>
//                         <span>•</span>
//                         <span>{blog.date}</span>
//                     </div>
//                 </header>

//                 {/* --- FEATURED IMAGE --- */}
//                 <div className="mb-10 w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
//                     <img
//                         src={blog.image}
//                         alt={blog.title}
//                         className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
//                     />
//                 </div>

//                 {/* --- CONTENT BODY (Tiptap) --- */}
//                 <div className="blog-content text-lg leading-relaxed text-gray-800">
//                     <EditorContent editor={editor} />
//                 </div>
//             </article>
//         </section>
//     )
// }

import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useGetBlog } from "../../hooks/useGetBlog"
import { images } from "../../assets/assets"
import BlogHeader from "../AboutPage/BlogHeader"
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function Blog() {
    const params = useParams()
    const { blog, loading, error } = useGetBlog(params.id as string)

    // 1. ✅ FIX: Call useEditor AT THE TOP (Before any return statements)
    const editor = useEditor({
        extensions: [StarterKit],
        // Provide a fallback because 'blog' might be null initially
        content: blog?.content || {},
        editable: false,
        editorProps: {
            attributes: {
                class: 'prose max-w-none focus:outline-none',
            },
        },
    });

    // 2. ✅ FIX: Update editor content when 'blog' data actually arrives
    useEffect(() => {
        if (editor && blog?.content) {
            editor.commands.setContent(blog.content);
        }
    }, [blog, editor]);

    // 3. NOW it is safe to return early
    if (loading) return <div className="p-10 text-center">Loading...</div>
    if (!blog) return <div className="p-10 text-center">Blog not found</div>

    const date = blog?.createdAt?.split("T")[0] || ""

    return (
        <section>
            <BlogHeader
                image={images.blogs}
            // title={blog.title}
            // author={blog.author}
            // category={blog.category}
            // date={date}
            />

            <article className="container mx-auto px-4 py-8">
                {/* --- HEADER SECTION --- */}
                <header className="mb-8 text-center">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                        {blog.category}
                    </span>
                    <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
                        <span>By {blog.author}</span>
                        <span>•</span>
                        <span>{date}</span>
                    </div>
                </header>

                {/* --- FEATURED IMAGE --- */}
                {blog.image && (
                    <div className="mb-10 w-full h-[400px] overflow-hidden">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                        />
                    </div>
                )}

                {/* --- CONTENT BODY --- */}
                <div className="blog-content text-lg leading-relaxed text-gray-800">
                    <EditorContent editor={editor} />
                </div>
            </article>
        </section>
    )
}