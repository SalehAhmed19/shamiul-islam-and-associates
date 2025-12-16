import { Skeleton } from "@/components/ui/skeleton"

export function BlogsSkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl mx-auto" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] mx-auto" />
                <Skeleton className="h-4 w-[200px] mx-auto" />
            </div>
        </div>
    )
}
