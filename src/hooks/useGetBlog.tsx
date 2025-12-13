import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { getSingleBlog } from "../RTK/features/blogs/blogsSlice"
import type { RootState } from "../RTK/app/store"

export const useGetBlog = (_id: string) => {
    const dispatch = useAppDispatch()
    const blog = useAppSelector((state: RootState) => state.blogs.blog)
    const loading = useAppSelector((state: RootState) => state.blogs.loading)
    const error = useAppSelector((state: RootState) => state.blogs.error)
    useEffect(() => {
        dispatch(getSingleBlog(_id))
    }, [dispatch])
    return { blog, loading, error }
}