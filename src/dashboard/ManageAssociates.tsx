import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Heading from "@/components/ui/Headings/Heading";
import { BlogsSkeleton } from "@/components/ui/Skeletons/BlogsSkeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/hooks/hooks";
import { useGetAssociates } from "@/hooks/useGetAssociates";
import { deleteAssociate } from "@/RTK/features/associates/associatesSlice";
import { Edit, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ManageAssociates() {
    const { associates, loading } = useGetAssociates()


    const dispatch = useAppDispatch();

    const handleDeleteAssociate = (id: string) => {
        dispatch(deleteAssociate(id));
        toast.success("Associate deleted successfully");
    }

    if (loading) return <BlogsSkeleton />

    return (
        <section className="py-6 space-y-6">
            <Heading>Manage Associates</Heading>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Designation</TableHead>
                            <TableHead>Court</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            associates?.map((associate, idx) => (
                                <TableRow key={idx} className="cursor-pointer">
                                    <TableCell className="font-medium flex items-center gap-2 mr-2">{idx + 1}
                                        <img src={associate.image} alt="" className="rounded" />
                                    </TableCell>
                                    <TableCell className="bangla">{associate.name}</TableCell>
                                    <TableCell className="bangla">{associate.position}</TableCell>
                                    <TableCell className="bangla">{associate.court}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button variant="outline" asChild className="cursor-pointer"><Link to={`/dashboard/secure/admin-panel/manage-associates/edit-associates/${associate._id}`}>Edit <Edit /></Link></Button>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="destructive" className="cursor-pointer">
                                                    Delete <Trash />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                    <DialogDescription>
                                                        This action cannot be undone. This will permanently delete your blog and remove data from your website.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline" className="cursor-pointer">Cancel</Button>
                                                    </DialogClose>
                                                    <Button onClick={() => handleDeleteAssociate(associate._id ? associate._id : "")} variant="destructive" className="cursor-pointer">Delete</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}