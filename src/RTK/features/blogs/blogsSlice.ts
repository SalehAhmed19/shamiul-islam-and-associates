// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { Blog } from "../../../Interfaces/blogsInterface";
// import { axiosPublic, axiosSecure } from "@/utils/axiosInstance";

// export interface BlogsState {
//     blogs: Blog[]
//     blog: Blog | null
//     loading: boolean
//     error: string | null
// }

// const initialState: BlogsState = {
//     blogs: [],
//     blog: null,
//     loading: false,
//     error: null
// }

// export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
//     const response = await axiosPublic.get("/blogs")
//     console.log("API Response Data:", response.data);
//     return response.data
// })

// export const getSingleBlog = createAsyncThunk("blogs/getSingleBlog", async (id: string) => {
//     const response = await axiosPublic.get(`/blogs/${id}`)
//     return response.data
// })

// export const createBlog = createAsyncThunk("blogs/createBlog", async (blog: Blog, { rejectWithValue }) => {
//     try {
//         const response = await axiosSecure.post("/blogs/create-blog", blog)
//         return response.data
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog: Blog, { rejectWithValue }) => {
//     try {
//         const response = await axiosSecure.put(`/blogs/update-blog/${blog._id}`, blog)
//         return response.data
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id: string, { rejectWithValue }) => {
//     try {
//         const response = await axiosSecure.delete(`/blogs/delete-blog/${id}`)
//         return response.data
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const BlogsSlice = createSlice({
//     name: "blogs",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder.addCase(getBlogs.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(getBlogs.fulfilled, (state, action) => {
//             // এখানে চেক করা হচ্ছে action.payload আসলেই Array কিনা
//             if (Array.isArray(action.payload)) {
//                 state.blogs = action.payload;
//             }
//             else if (action.payload && Array.isArray(action.payload.blogs)) {
//                 state.blogs = action.payload.blogs;
//             }
//             else {
//                 state.blogs = [];
//                 console.error("API Error: Payload is not an array", action.payload);
//             }
//             state.loading = false;
//         })
//         builder.addCase(getBlogs.rejected, (state) => {
//             state.loading = false
//             state.error = "Failed to fetch blogs"
//         })
//         builder.addCase(getSingleBlog.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(getSingleBlog.fulfilled, (state, action) => {
//             state.blog = action.payload
//             state.loading = false
//         })
//         builder.addCase(getSingleBlog.rejected, (state) => {
//             state.loading = false
//             state.error = "Failed to fetch blog"
//         })
//         builder.addCase(createBlog.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(createBlog.fulfilled, (state, action) => {
//             state.blog = action.payload
//             state.loading = false
//         })
//         builder.addCase(createBlog.rejected, (state) => {
//             state.loading = false
//             state.error = "Failed to create blog"
//         })
//         builder.addCase(updateBlog.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(updateBlog.fulfilled, (state, action) => {
//             state.blog = action.payload
//             state.loading = false
//         })
//         builder.addCase(updateBlog.rejected, (state) => {
//             state.loading = false
//             state.error = "Failed to update blog"
//         })
//         builder.addCase(deleteBlog.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(deleteBlog.fulfilled, (state, action) => {
//             // state.blog = action.payload
//             state.blogs = state.blogs.filter((blog) => blog._id !== action.meta.arg);
//             state.loading = false
//         })
//         builder.addCase(deleteBlog.rejected, (state) => {
//             state.loading = false
//             state.error = "Failed to delete blog"
//         })
//     }
// })

// // export const { } = blogsSlice.actions

// export default BlogsSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Blog } from "../../../Interfaces/blogsInterface";
import { axiosPublic, axiosSecure } from "@/utils/axiosInstance";

export interface BlogsState {
    blogs: Blog[]
    blog: Blog | null
    loading: boolean
    error: string | null
}

const initialState: BlogsState = {
    blogs: [],
    blog: null,
    loading: false,
    error: null
}

// ১. সব ব্লগ আনার জন্য
export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
    const response = await axiosPublic.get("/blogs")
    return response.data
})

// ✅ ২. নির্দিষ্ট ব্লগ আনার জন্য (ID অথবা Slug দিয়ে)
// প্যারামিটারের নাম 'id' থেকে 'idOrSlug' করা হলো বোঝার সুবিধার্থে
export const getSingleBlog = createAsyncThunk("blogs/getSingleBlog", async (idOrSlug: string) => {
    // বাংলা স্লাগ বা স্পেশাল ক্যারেক্টার হ্যান্ডেল করার জন্য encodeURIComponent ব্যবহার করা ভালো, 
    // তবে axios সাধারণত এটি অটোমেটিক হ্যান্ডেল করে। সেফটির জন্য আমরা সরাসরি পাঠাচ্ছি।
    const response = await axiosPublic.get(`/blogs/${idOrSlug}`)
    return response.data
})

// ৩. ব্লগ তৈরি
export const createBlog = createAsyncThunk("blogs/createBlog", async (blog: Blog, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.post("/blogs/create-blog", blog)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

// ৪. ব্লগ আপডেট (আপডেটের সময় আমরা সবসময় _id ব্যবহার করবো)
// export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog: Blog, { rejectWithValue }) => {
//     try {
//         // ব্যাকএন্ডে findByIdAndUpdate ব্যবহার হচ্ছে, তাই এখানে ID পাঠাতে হবে
//         const response = await axiosSecure.put(`/blogs/update-blog/${blog._id}`, blog)
//         return response.data
//     } catch (error: any) {
//         return rejectWithValue(error.response?.data || error.message)
//     }
// })
export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog: Blog, { rejectWithValue }) => {
    try {
        // ১. একটি কপি তৈরি করুন যাতে অরিজিনাল ডাটা ঠিক থাকে
        const { slug, ...blogData } = blog;

        // নোট: আমরা 'slug' কে আলাদা করে ফেললাম এবং বাকি ডাটা 'blogData' তে রাখলাম।
        // এখন সার্ভারে শুধু 'blogData' পাঠাবো। এতে slug: null যাওয়ার সমস্যা থাকবে না।

        const response = await axiosSecure.put(`/blogs/update-blog/${blog._id}`, blogData);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// ৫. ব্লগ ডিলিট
export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id: string, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.delete(`/blogs/delete-blog/${id}`)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const BlogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get All Blogs
        builder.addCase(getBlogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
                state.blogs = action.payload;
            }
            else if (action.payload && Array.isArray(action.payload.blogs)) {
                state.blogs = action.payload.blogs;
            }
            else {
                state.blogs = [];
            }
            state.loading = false;
        })
        builder.addCase(getBlogs.rejected, (state) => {
            state.loading = false
            state.error = "Failed to fetch blogs"
        })

        // Get Single Blog
        builder.addCase(getSingleBlog.pending, (state) => {
            state.loading = true
            state.error = null // লোডিং এর সময় এরর ক্লিয়ার করা ভালো
        })
        builder.addCase(getSingleBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            state.loading = false
        })
        builder.addCase(getSingleBlog.rejected, (state) => {
            state.loading = false
            state.error = "Failed to fetch blog"
        })

        // Create Blog
        builder.addCase(createBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            // নতুন ব্লগটি লিস্টেও যোগ করে দিতে পারেন (অপশনাল)
            state.blogs.unshift(action.payload)
            state.loading = false
        })
        builder.addCase(createBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string || "Failed to create blog"
        })

        // Update Blog
        builder.addCase(updateBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            // মেইন লিস্টেও আপডেট করে দিচ্ছি যাতে রিফ্রেশ না লাগে
            const index = state.blogs.findIndex(b => b._id === action.payload._id);
            if (index !== -1) {
                state.blogs[index] = action.payload;
            }
            state.loading = false
        })
        builder.addCase(updateBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string || "Failed to update blog"
        })

        // Delete Blog
        builder.addCase(deleteBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            // লিস্ট থেকে ফিল্টার করে বাদ দেওয়া হচ্ছে
            state.blogs = state.blogs.filter((blog) => blog._id !== action.meta.arg);
            state.loading = false
        })
        builder.addCase(deleteBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string || "Failed to delete blog"
        })
    }
})

export default BlogsSlice.reducer