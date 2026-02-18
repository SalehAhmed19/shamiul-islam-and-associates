import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// আপনার ইন্টারফেস পাথ অনুযায়ী ঠিক করে নেবেন
import { axiosPublic, axiosSecure } from "@/utils/axiosInstance";
import type { News } from "@/Interfaces/NewsInterface";

export interface NewsState {
  newsList: News[]; // array এর নাম newsList দিলাম যাতে confusion না হয়
  singleNews: News | null;
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  newsList: [],
  singleNews: null,
  loading: false,
  error: null,
};

// ১. সব নিউজ আনার জন্য
export const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await axiosPublic.get("/news");
  return response.data;
});

// ২. নির্দিষ্ট নিউজ আনার জন্য (ID অথবা Slug দিয়ে)
export const getSingleNews = createAsyncThunk(
  "news/getSingleNews",
  async (idOrSlug: string) => {
    const response = await axiosPublic.get(`/news/${idOrSlug}`);
    return response.data;
  },
);

// ৩. নিউজ তৈরি
export const createNews = createAsyncThunk(
  "news/createNews",
  async (news: News, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.post("/news/create-news", news);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// ৪. নিউজ আপডেট
export const updateNews = createAsyncThunk(
  "news/updateNews",
  async (news: News, { rejectWithValue }) => {
    try {
      // স্লাগ আলাদা করে রাখা হলো, যাতে আপডেটের সময় কনফ্লিক্ট না হয়
      const { slug, ...newsData } = news;

      const response = await axiosSecure.put(
        `/news/update-news/${news._id}`,
        newsData,
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// ৫. নিউজ ডিলিট
export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.delete(`/news/delete-news/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All News
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.newsList = action.payload;
      } else if (action.payload && Array.isArray(action.payload.news)) {
        // যদি রেসপন্স অবজেক্টের ভেতরে news অ্যারে থাকে
        state.newsList = action.payload.news;
      } else {
        state.newsList = [];
      }
      state.loading = false;
    });
    builder.addCase(getNews.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch news";
    });

    // Get Single News
    builder.addCase(getSingleNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSingleNews.fulfilled, (state, action) => {
      state.singleNews = action.payload;
      state.loading = false;
    });
    builder.addCase(getSingleNews.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch single news";
    });

    // Create News
    builder.addCase(createNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createNews.fulfilled, (state, action) => {
      state.singleNews = action.payload;
      // নতুন নিউজটি লিস্টের শুরুতে যোগ করা হলো
      state.newsList.unshift(action.payload);
      state.loading = false;
    });
    builder.addCase(createNews.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to create news";
    });

    // Update News
    builder.addCase(updateNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateNews.fulfilled, (state, action) => {
      state.singleNews = action.payload;
      // মেইন লিস্টেও আপডেট করে দিচ্ছি
      const index = state.newsList.findIndex(
        (n) => n._id === action.payload._id,
      );
      if (index !== -1) {
        state.newsList[index] = action.payload;
      }
      state.loading = false;
    });
    builder.addCase(updateNews.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to update news";
    });

    // Delete News
    builder.addCase(deleteNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      // লিস্ট থেকে ফিল্টার করে বাদ দেওয়া হচ্ছে
      state.newsList = state.newsList.filter(
        (news) => news._id !== action.meta.arg,
      );
      state.loading = false;
    });
    builder.addCase(deleteNews.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to delete news";
    });
  },
});

export default NewsSlice.reducer;
