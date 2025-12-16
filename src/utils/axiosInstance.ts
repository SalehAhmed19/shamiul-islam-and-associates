// src/api/axiosInstance.ts
import axios from "axios";

// ১. বেস URL সেট করা
export const axiosSecure = axios.create({
    // baseURL: import.meta.env.VITE_baseURL_dev, // আপনার ব্যাকএন্ডের URL
    baseURL: import.meta.env.VITE_baseURL_prod, // আপনার ব্যাকএন্ডের URL
});

export const axiosPublic = axios.create({
    // baseURL: import.meta.env.VITE_baseURL_dev, // আপনার ব্যাকএন্ডের URL
    baseURL: import.meta.env.VITE_baseURL_prod, // আপনার ব্যাকএন্ডের URL
});

// ২. ইন্টারসেপ্টর সেটআপ
// এটি প্রতিটি রিকোয়েস্টের আগে কল হবে
axiosSecure.interceptors.request.use(
    async (config) => {
        try {
            // Clerk উইন্ডো অবজেক্টে গ্লোবালি থাকে। সেখান থেকে আমরা সেশন এবং টোকেন নিতে পারি।
            // React Hook এর বাইরে টোকেন পাওয়ার এটিই সেরা উপায়।
            const session = (window as any).Clerk?.session;

            if (session) {
                const token = await session.getToken();

                // টোকেন পেলে হেডারে সেট করে দাও
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
        } catch (error) {
            console.error("Error fetching token", error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

