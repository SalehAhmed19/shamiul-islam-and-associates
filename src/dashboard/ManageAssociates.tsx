import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BlogsSkeleton } from "@/components/ui/Skeletons/BlogsSkeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch } from "@/hooks/hooks";
import { useGetAssociates } from "@/hooks/useGetAssociates";
import { deleteAssociate } from "@/RTK/features/associates/associatesSlice";
import {
  Edit,
  Trash2,
  User,
  Users,
  Briefcase,
  Gavel,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ManageAssociates() {
  const { associates, loading } = useGetAssociates();
  const dispatch = useAppDispatch();

  const handleDeleteAssociate = (id: string) => {
    dispatch(deleteAssociate(id));
    toast.success("Associate deleted successfully");
  };

  if (loading) return <BlogsSkeleton />;

  return (
    <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
      <section className="mx-auto space-y-6 max-w-7xl">
        {/* Header Section (No Add Button) */}
        <div className="flex flex-col items-center justify-between gap-4 p-6 bg-white border border-gray-200 shadow-sm rounded-xl md:p-8 md:flex-row">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
              <Users className="w-8 h-8 opacity-80" />
              Manage Associates
            </h1>
            <p className="text-sm text-gray-500">
              List of all current legal associates and consultants.
            </p>
          </div>

          {/* Total Count Chip */}
          <div className="bg-[#604B33]/10 text-[#604B33] px-4 py-2 rounded-full font-semibold text-sm border border-[#604B33]/20">
            Total Members: {associates?.length || 0}
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          {associates?.length && associates.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-[#604B33]/5">
                  <TableRow className="hover:bg-transparent border-[#604B33]/10">
                    <TableHead className="w-[60px] text-center font-bold text-[#604B33]">
                      SL
                    </TableHead>
                    <TableHead className="w-[80px] text-center font-bold text-[#604B33]">
                      Profile
                    </TableHead>
                    <TableHead className="min-w-[200px] font-bold text-[#604B33]">
                      Name
                    </TableHead>
                    <TableHead className="hidden md:table-cell font-bold text-[#604B33]">
                      Designation
                    </TableHead>
                    <TableHead className="hidden lg:table-cell min-w-[200px] font-bold text-[#604B33]">
                      Court
                    </TableHead>
                    <TableHead className="text-right font-bold text-[#604B33] pr-6">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {associates.map((associate, idx) => (
                    <TableRow
                      key={associate._id || idx}
                      className="transition-all border-gray-100 hover:bg-gray-50/80 group"
                    >
                      {/* SL */}
                      <TableCell className="font-medium text-center text-gray-500">
                        {idx + 1}
                      </TableCell>

                      {/* Profile Image */}
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200 ring-2 ring-transparent group-hover:ring-[#604B33]/20 transition-all">
                            {associate.image ? (
                              <img
                                src={associate.image.url as string}
                                alt={associate.name}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100">
                                <User size={20} />
                              </div>
                            )}
                          </div>
                        </div>
                      </TableCell>

                      {/* Name & Mobile Info */}
                      <TableCell className="font-semibold text-gray-800">
                        <div className="flex flex-col">
                          <span className="text-base">{associate.name}</span>
                          {/* Mobile-only details */}
                          <div className="flex flex-col gap-1 mt-1 text-xs text-gray-500 md:hidden">
                            <span className="flex items-center gap-1">
                              <Briefcase size={10} /> {associate.position}
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      {/* Designation (Desktop) */}
                      <TableCell className="hidden text-gray-600 md:table-cell">
                        <div className="flex items-center gap-2 text-sm bg-gray-50 px-2.5 py-1 rounded-md w-fit border border-gray-100">
                          <Briefcase size={14} className="text-[#604B33]" />
                          {associate.position}
                        </div>
                      </TableCell>

                      {/* Court (Desktop) */}
                      <TableCell className="hidden text-gray-600 lg:table-cell">
                        <div className="flex items-center gap-2 text-sm">
                          <Gavel size={14} className="text-gray-400" />
                          {associate.court}
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="pr-6 text-right">
                        <div className="flex justify-end gap-2 transition-opacity opacity-80 group-hover:opacity-100">
                          {/* Edit Button */}
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="w-8 h-8 text-blue-600 border-blue-200 hover:text-blue-700 hover:bg-blue-50"
                          >
                            <Link
                              to={`/dashboard/secure/admin-panel/manage-associates/edit-associates/${associate._id}`}
                            >
                              <Edit size={14} />
                            </Link>
                          </Button>

                          {/* Delete Dialog */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8 text-red-600 border-red-200 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] border-l-4 border-l-red-500">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-red-600">
                                  <AlertCircle size={20} /> Delete Associate?
                                </DialogTitle>
                                <DialogDescription className="pt-2 text-gray-600">
                                  Are you sure you want to remove{" "}
                                  <span className="font-bold text-gray-900">
                                    "{associate.name}"
                                  </span>
                                  ? <br />
                                  This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter className="gap-2 mt-4 sm:gap-0">
                                <DialogClose asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full sm:w-auto hover:bg-gray-100"
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button
                                  onClick={() =>
                                    handleDeleteAssociate(associate._id || "")
                                  }
                                  variant="destructive"
                                  className="w-full bg-red-600 sm:w-auto hover:bg-red-700"
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
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
              <div className="flex items-center justify-center w-20 h-20 mb-4 border border-gray-100 rounded-full bg-gray-50">
                <Users className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                No associates found
              </h3>
              <p className="max-w-sm mt-1 text-gray-500">
                Your associate list is currently empty.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
