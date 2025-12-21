

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Heading from "@/components/ui/Headings/Heading";
import { BlogsSkeleton } from "@/components/ui/Skeletons/BlogsSkeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/hooks/hooks";
import { useGetAssociates } from "@/hooks/useGetAssociates";
import { deleteAssociate } from "@/RTK/features/associates/associatesSlice";
import { Edit, Trash, User } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ManageAssociates() {
    const { associates, loading } = useGetAssociates();
    const dispatch = useAppDispatch();

    const handleDeleteAssociate = (id: string) => {
        dispatch(deleteAssociate(id));
        toast.success("Associate deleted successfully");
    }

    if (loading) return <BlogsSkeleton />

    return (
        <section className="py-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 h-screen">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Heading>Manage Associates</Heading>
                <div className="text-sm font-medium text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                    Total: {associates?.length || 0}
                </div>
            </div>

            {/* Table Container with Horizontal Scroll for Mobile */}
            <div className="rounded-lg border bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-50">
                            <TableRow>
                                <TableHead className="w-[80px] text-center">Profile</TableHead>
                                <TableHead className="min-w-[150px]">Name</TableHead>
                                <TableHead className="hidden md:table-cell">Designation</TableHead>
                                <TableHead className="hidden lg:table-cell min-w-[200px]">Court</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {associates?.map((associate, idx) => (
                                <TableRow key={associate._id || idx} className="hover:bg-gray-50/50 transition-colors">
                                    <TableCell className="text-center">
                                        <div className="flex justify-center">
                                            {associate.image ? (
                                                <img
                                                    src={associate.image.url as string}
                                                    alt={associate.name}
                                                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                    <User size={20} />
                                                </div>
                                            )}
                                        </div>
                                    </TableCell>

                                    <TableCell className="bangla font-semibold">
                                        <div className="flex flex-col">
                                            <span>{associate.name}</span>
                                            {/* Sub-details visible only on mobile */}
                                            <span className="md:hidden text-xs font-normal text-muted-foreground mt-0.5">
                                                {associate.position}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="bangla hidden md:table-cell text-sm text-gray-600">
                                        {associate.position}
                                    </TableCell>

                                    <TableCell className="bangla hidden lg:table-cell text-sm text-gray-500 italic">
                                        {associate.court}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="sm" asChild className="h-8 md:h-9">
                                                <Link to={`/dashboard/secure/admin-panel/manage-associates/edit-associates/${associate._id}`}>
                                                    <Edit className="h-4 w-4 md:mr-2" />
                                                    <span className="hidden md:inline">Edit</span>
                                                </Link>
                                            </Button>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="destructive" size="sm" className="h-8 md:h-9">
                                                        <Trash className="h-4 w-4 md:mr-2" />
                                                        <span className="hidden md:inline">Delete</span>
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-xl">Confirm Deletion</DialogTitle>
                                                        <DialogDescription className="py-3">
                                                            Are you sure you want to delete <span className="font-bold text-red-600 underline">{associate.name}</span>? This will remove them from the associate directory.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter className="flex-col sm:flex-row gap-2">
                                                        <DialogClose asChild>
                                                            <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
                                                        </DialogClose>
                                                        <Button
                                                            onClick={() => handleDeleteAssociate(associate._id || "")}
                                                            variant="destructive"
                                                            className="w-full sm:w-auto"
                                                        >
                                                            Yes, Delete
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}