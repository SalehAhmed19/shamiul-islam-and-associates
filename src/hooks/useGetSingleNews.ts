import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getSingleNews } from "../RTK/features/news/newsSlice";
import type { RootState } from "../RTK/app/store";

export const useGetSingleNews = (_id: string) => {
  const dispatch = useAppDispatch();

  // Redux থেকে বর্তমান নিউজ এবং লোডিং স্টেট নেওয়া
  // নোট: NewsSlice এ আমরা state এর নাম 'singleNews' দিয়েছিলাম
  const { singleNews, loading, error } = useAppSelector(
    (state: RootState) => state.news,
  );

  useEffect(() => {
    // ১. যদি _id না থাকে, তবে কিছুই করার দরকার নেই
    if (!_id) return;

    // ২. অপটিমাইজেশন: যদি ইতিমধ্যে স্টোরে এই নিউজের ডাটা থাকে এবং ID মিলে যায়, তবে নতুন করে ফেচ করার দরকার নেই
    if (singleNews && singleNews._id === _id) {
      return;
    }

    // ৩. সব ঠিক থাকলে ডাটা ফেচ করো
    dispatch(getSingleNews(_id));
  }, [dispatch, _id, singleNews?._id]); // লুপ আটকানোর জন্য singleNews._id ডিপেন্ডেন্সিতে রাখা হলো

  // কম্পোনেন্টে ব্যবহারের সুবিধার্থে 'singleNews' কে 'news' নামে রিটার্ন করছি
  return { news: singleNews, loading, error };
};
