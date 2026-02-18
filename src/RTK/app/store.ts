import { configureStore } from "@reduxjs/toolkit";
import { BlogsSlice } from "../features/blogs/blogsSlice";
import { AssociatesSlice } from "../features/associates/associatesSlice";
import { NewsSlice } from "../features/news/newsSlice"; // ১. NewsSlice ইমপোর্ট করা হলো

export const store = configureStore({
  reducer: {
    blogs: BlogsSlice.reducer,
    associates: AssociatesSlice.reducer,
    news: NewsSlice.reducer, // ২. news রিডিউসার স্টোরে যুক্ত করা হলো
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
