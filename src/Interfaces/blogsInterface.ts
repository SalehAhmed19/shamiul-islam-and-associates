import type { JSONContent } from '@tiptap/core';

export interface Blog {
    _id: string;
    id: number;
    title: string;
    category: string;
    date: string;
    author: string;
    image: string;
    excerpt: string; // Keep this for preview cards
    content: JSONContent; // The actual rich text for Tiptap
    createdAt: string | undefined;
    updatedAt: string | undefined;
}