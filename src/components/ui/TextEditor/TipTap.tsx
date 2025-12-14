import { EditorContent, mergeAttributes, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";

export default function TipTap({ description, onChange }: { description: string, onChange: (value: string) => void }) {

    const editor = useEditor({
        extensions: [
            // 1. Configure StarterKit to disable the default lists/headings 
            // so we can define our own custom ones below without conflict.
            StarterKit.configure({
                bulletList: false,
                orderedList: false,
                listItem: false,
                heading: false,
            }),

            // 2. Custom Ordered List: Needs 'list-decimal' AND padding ('pl-4')
            StarterKit.options.orderedList !== false &&
            OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal pl-8",
                },
            }),

            // 3. Custom Bullet List: Needs 'list-disc' AND padding ('pl-4')
            StarterKit.options.bulletList !== false &&
            BulletList.configure({
                HTMLAttributes: {
                    class: "list-disc pl-4",
                },
            }),

            // 4. Generic List Item: Don't add specific styles here!
            ListItem,

            Heading.extend({
                renderHTML({ node, HTMLAttributes }) {
                    const level = this.options.levels.includes(node.attrs.level)
                        ? node.attrs.level
                        : this.options.levels[0];

                    const classes: { [key: number]: string } = {
                        1: "text-4xl font-extrabold text-gray-900 mb-4", // Bigger H1
                        2: "text-2xl font-bold text-gray-800 mb-2",      // Smaller H2
                        3: "text-xl font-semibold text-gray-700",        // Small H3
                    };

                    return [
                        `h${level}`,
                        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                            class: classes[level],
                        }),
                        0,
                    ];
                },
            }).configure({ levels: [1, 2, 3] }),

            Link.configure({
                HTMLAttributes: {
                    class: "text-blue-500 underline cursor-pointer"
                }
            })
        ],
        content: description,
        editorProps: {
            attributes: {
                // 'prose' class is highly recommended here if you install @tailwindcss/typography
                class: "rounded-md border min-h-[150px] border-input bg-white p-6 outline-none"
            }
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        }
    })
    return (
        <div>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} className="h-[300px] overflow-y-auto" />

            {/* <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() }}></div> */}
        </div>
    )
}