export interface Blog {
    _id?: string;
    id?: number;
    title: string;
    author: string;
    category: string;
    date: string;
    relatedVideoLink: string;
    content: string; // The HTML string from Tiptap
    image: string | FileList | File; // Can be a URL string or a File objectch text for Tiptap
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}