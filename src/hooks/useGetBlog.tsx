import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { getSingleBlog } from "../RTK/features/blogs/blogsSlice"
import type { RootState } from "../RTK/app/store"

export const useGetBlog = (_id: string) => {
    const dispatch = useAppDispatch()
    // Redux থেকে বর্তমান ব্লগ এবং লোডিং স্টেট নেওয়া
    const { blog, loading, error } = useAppSelector((state: RootState) => state.blogs)

    useEffect(() => {
        // ১. যদি _id না থাকে, তবে কিছুই করার দরকার নেই
        if (!_id) return;

        // ২. অপটিমাইজেশন: যদি ইতিমধ্যে স্টোরে এই ব্লগের ডাটা থাকে, তবে নতুন করে ফেচ করার দরকার নেই
        if (blog && blog._id === _id) {
            return;
        }

        // ৩. সব ঠিক থাকলে ডাটা ফেচ করো
        dispatch(getSingleBlog(_id))

    }, [dispatch, _id, blog?._id]) // এখানে blog._id চেক করা হচ্ছে যাতে লুপ না হয়

    return { blog, loading, error }
}