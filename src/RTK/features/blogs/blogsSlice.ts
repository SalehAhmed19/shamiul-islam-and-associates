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
    }
})

// export const { } = blogsSlice.actions

export default BlogsSlice.reducer