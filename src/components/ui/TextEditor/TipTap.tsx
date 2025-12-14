
import { useEffect } from "react";
import { useEditor, EditorContent, mergeAttributes } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import Heading, { type Level } from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import ToolBar from "@/components/ui/TextEditor/Toolbar";

interface TipTapProps {
    description: string;
    onChange: (value: string) => void;
}

export default function TipTap({ description, onChange }: TipTapProps) {
    const editor = useEditor({
        extensions: [
            // 1. Configure StarterKit to disable the nodes we want to customize
            StarterKit.configure({
                bulletList: false,
                orderedList: false,
                listItem: false,
                heading: false,
            }),

            // 2. Add OrderedList directly
            OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal pl-8",
                },
            }),

            // 3. Add BulletList directly
            BulletList.configure({
                HTMLAttributes: {
                    class: "list-disc pl-4",
                },
            }),

            // 4. Add ListItem
            ListItem,

            // 5. Custom Heading Extension
            Heading.extend({
                renderHTML({ node, HTMLAttributes }) {
                    // Cast level to Level type
                    const level = node.attrs.level as Level;

                    const classes: Record<number, string> = {
                        1: "text-4xl font-extrabold text-gray-900 mb-4",
                        2: "text-2xl font-bold text-gray-800 mb-2",
                        3: "text-xl font-semibold text-gray-700",
                    };

                    // Fallback class if needed
                    const className = classes[level] || "";

                    return [
                        `h${level}`,
                        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                            class: className,
                        }),
                        0,
                    ];
                },
            }).configure({ levels: [1, 2, 3] }),

            // 6. Link Extension
            Link.configure({
                HTMLAttributes: {
                    class: "text-blue-500 underline cursor-pointer",
                },
            }),
        ],
        content: description,
        editorProps: {
            attributes: {
                class:
                    "rounded-md border min-h-[150px] border-input bg-white p-6 outline-none prose max-w-none",
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    // EFFECT: Handle external content updates (e.g., loading data from API)
    useEffect(() => {
        if (editor && description !== editor.getHTML()) {
            editor.commands.setContent(description);
        }
    }, [description, editor]);

    // Prevent rendering until editor is initialized
    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-col gap-2">
            <ToolBar editor={editor} />
            <EditorContent editor={editor} className="h-[300px] overflow-y-auto" />
        </div>
    );
}