import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Blog } from "../../../Interfaces/blogsInterface";
import axios from "axios";

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
    const response = await axios.get("http://localhost:4000/api/blogs")
    return response.data
})

export const getSingleBlog = createAsyncThunk("blogs/getSingleBlog", async (id: string) => {
    const response = await axios.get(`http://localhost:4000/api/blogs/${id}`)
    return response.data
})

export const createBlog = createAsyncThunk("blogs/createBlog", async (blog: Blog) => {
    const response = await axios.post("http://localhost:4000/api/blogs/create-blog", blog)
    return response.data
})

export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog: Blog) => {
    const response = await axios.put(`http://localhost:4000/api/blogs/update-blog/${blog._id}`, blog)
    return response.data
})

export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id: string) => {
    const response = await axios.delete(`http://localhost:4000/api/blogs/delete-blog/${id}`)
    return response.data
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
            state.blog = action.payload
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