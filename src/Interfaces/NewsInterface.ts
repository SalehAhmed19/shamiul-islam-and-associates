export interface News {
  _id?: string;
  id?: number;
  title: string;
  author: string;
  // category: string; // নিউজের জন্য ক্যাটাগরি বাদ দেওয়া হয়েছে
  slug?: string;
  date: string;
  // relatedVideoLink: string; // নিউজের জন্য ভিডিও লিংক বাদ দেওয়া হয়েছে
  content: string; // The HTML string from Tiptap
  image: { url: string; public_id: string } | null; // Can be a URL string or a File object
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
