
import type { RootState } from "../RTK/app/store"
import { useEffect } from "react"
import { getBlogs } from "../RTK/features/blogs/blogsSlice"
import { useAppDispatch, useAppSelector } from "./hooks"

export const useGetBlogs = () => {
    const dispatch = useAppDispatch()
    const blogs = useAppSelector((state: RootState) => state.blogs.blogs)
    const loading = useAppSelector((state: RootState) => state.blogs.loading)
    const error = useAppSelector((state: RootState) => state.blogs.error)
    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])
    return { blogs, loading, error }
}