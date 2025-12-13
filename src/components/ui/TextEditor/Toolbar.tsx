import { Editor } from "@tiptap/react";
import { Bold, Heading1, Heading2, Italic, List, ListOrdered } from "lucide-react"
import { Toggle } from "../toggle";
import { LinkPopover } from "@/components/tiptap-ui/link-popover";
type Props = {
    editor: Editor | null
}

export default function ToolBar({ editor }: Props) {
    if (!editor) {
        return null
    }
    return (
        <div>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("heading1")} onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                <Heading1 />
            </Toggle>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("heading2")} onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                <Heading2 />
            </Toggle>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("bold")} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
                <Bold />
            </Toggle>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("italic")} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
                <Italic />
            </Toggle>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("bulletList")} onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
                <List />
            </Toggle>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("orderedList")} onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}>
                <ListOrdered />
            </Toggle>
            <Toggle className="cursor-pointer" size="sm" pressed={editor.isActive("link")}>
                <LinkPopover className="hover:bg-transparent!"
                    editor={editor}
                    hideWhenUnavailable={true}
                    autoOpenOnLinkActive={true}
                    onSetLink={() => console.log('Link set!')}
                    onOpenChange={(isOpen) => console.log('Popover opened:', isOpen)}
                />
            </Toggle>
        </div>
    )
}