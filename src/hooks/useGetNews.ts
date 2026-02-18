import type { RootState } from "../RTK/app/store";
import { useEffect } from "react";
import { getNews } from "../RTK/features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useGetNews = () => {
  const dispatch = useAppDispatch();

  // NewsSlice এ আমরা array এর নাম 'newsList' দিয়েছিলাম
  const news = useAppSelector((state: RootState) => state.news.newsList);
  const loading = useAppSelector((state: RootState) => state.news.loading);
  const error = useAppSelector((state: RootState) => state.news.error);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return { news, loading, error };
};
