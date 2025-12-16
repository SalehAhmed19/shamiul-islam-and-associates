import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import type { RootState } from "../RTK/app/store"
import { getSingleAssociate } from "@/RTK/features/associates/associatesSlice"

export const useGetAssociate = (_id: string) => {
    const dispatch = useAppDispatch()
    // Redux থেকে বর্তমান ব্লগ এবং লোডিং স্টেট নেওয়া
    const { associate, loading, error } = useAppSelector((state: RootState) => state.associates)

    useEffect(() => {
        // ১. যদি _id না থাকে, তবে কিছুই করার দরকার নেই
        if (!_id) return;

        // ২. অপটিমাইজেশন: যদি ইতিমধ্যে স্টোরে এই ব্লগের ডাটা থাকে, তবে নতুন করে ফেচ করার দরকার নেই
        if (associate && associate._id === _id) {
            return;
        }

        // ৩. সব ঠিক থাকলে ডাটা ফেচ করো
        dispatch(getSingleAssociate(_id))

    }, [dispatch, _id, associate?._id]) // এখানে blog._id চেক করা হচ্ছে যাতে লুপ না হয়

    return { associate, loading, error }
}