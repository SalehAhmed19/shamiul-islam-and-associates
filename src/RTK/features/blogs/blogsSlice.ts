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

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
    const response = await axiosPublic.get("/blogs")
    return response.data
})

export const getSingleBlog = createAsyncThunk("blogs/getSingleBlog", async (id: string) => {
    const response = await axiosPublic.get(`/blogs/${id}`)
    return response.data
})

export const createBlog = createAsyncThunk("blogs/createBlog", async (blog: Blog, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.post("/blogs/create-blog", blog)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog: Blog, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.put(`/blogs/update-blog/${blog._id}`, blog)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id: string, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.delete(`/blogs/delete-blog/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const BlogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
            state.loading = false
        })
        builder.addCase(getBlogs.rejected, (state) => {
            state.loading = false
            state.error = "Failed to fetch blogs"
        })
        builder.addCase(getSingleBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getSingleBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            state.loading = false
        })
        builder.addCase(getSingleBlog.rejected, (state) => {
            state.loading = false
            state.error = "Failed to fetch blog"
        })
        builder.addCase(createBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            state.loading = false
        })
        builder.addCase(createBlog.rejected, (state) => {
            state.loading = false
            state.error = "Failed to create blog"
        })
        builder.addCase(updateBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            state.loading = false
        })
        builder.addCase(updateBlog.rejected, (state) => {
            state.loading = false
            state.error = "Failed to update blog"
        })
        builder.addCase(deleteBlog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            // state.blog = action.payload
            state.blogs = state.blogs.filter((blog) => blog._id !== action.meta.arg);
            state.loading = false
        })
        builder.addCase(deleteBlog.rejected, (state) => {
            state.loading = false
            state.error = "Failed to delete blog"
        })
    }
})

// export const { } = blogsSlice.actions

export default BlogsSlice.reducer