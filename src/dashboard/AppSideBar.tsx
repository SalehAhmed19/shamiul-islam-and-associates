
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignOutButton, UserButton, useUser } from "@clerk/clerk-react";
import { ChevronUp, Edit, Edit2, LayoutDashboard, LogOut, Plus, User2, Users } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";

export default function AppSideBar() {
    const { user } = useUser();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/" />
    }

    const username = `${user?.firstName} ${user?.lastName}`;

    const items = [
        { title: "Add Blogs", url: "/dashboard/secure/admin-panel", icon: Plus },
        { title: "Manage Blogs", url: "/dashboard/secure/admin-panel/manage-blogs", icon: Edit },
    ]

    return (
        <Sidebar className="border-r border-black/5 bg-slate-50/50">
            <SidebarHeader className="h-16 flex items-center px-6 border-b border-black/5">
                <Link to="/" className="flex items-center gap-2 font-bold text-[#604B33] hover:opacity-80 transition-opacity">
                    <LayoutDashboard size={22} />
                    <span className="tracking-tight text-lg">Admin Panel</span>
                </Link>
            </SidebarHeader>

            <SidebarContent className="p-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-2 text-[11px] font-bold uppercase tracking-widest text-black/40 mb-2">
                        Content Management
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {items.map((item) => {
                                const isActive = location.pathname === item.url;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`transition-all duration-200 h-10 px-3 ${isActive
                                                ? "bg-[#604B33]/10 text-[#604B33] font-semibold shadow-sm"
                                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                                }`}
                                        >
                                            <Link to={item.url} className="flex items-center gap-3">
                                                <item.icon size={18} className={isActive ? "text-[#604B33]" : "text-slate-400"} />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}

                            {/* Collapsible-style Trigger for Associates */}
                            <SidebarMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuButton className="h-10 px-3 text-slate-600 hover:bg-slate-100 transition-all cursor-pointer">
                                            <Users size={18} className="text-slate-400" />
                                            <span className="flex-1 text-left">Associates</span>
                                            <ChevronUp className="ml-auto opacity-50 rotate-90" size={14} />
                                        </SidebarMenuButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-52 ml-2 shadow-xl border-slate-200" align="start" side="right">
                                        <DropdownMenuGroup className="p-1">
                                            <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]">
                                                <Link to={"/dashboard/secure/admin-panel/add-associates"} className="flex justify-between w-full items-center p-2">
                                                    <span>Add New</span>
                                                    <Plus size={14} />
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]">
                                                <Link to={"/dashboard/secure/admin-panel/manage-associates"} className="flex justify-between w-full items-center p-2">
                                                    <span>Directory</span>
                                                    <Edit2 size={14} />
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-black/5 bg-white">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="h-12 px-3 hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 rounded-lg">
                                    <div className="bg-[#604B33]/10 p-1.5 rounded-md text-[#604B33]">
                                        <User2 size={18} />
                                    </div>
                                    <span className="font-medium text-slate-700 truncate ml-1">{username}</span>
                                    <ChevronUp className="ml-auto opacity-40" size={16} />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                align="center"
                                className="w-56 p-2 shadow-2xl border-slate-200 mb-2"
                            >
                                <div className="px-2 py-3 mb-1 border-b border-slate-50">
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                userButtonBox: "flex-row-reverse w-full justify-between"
                                            }
                                        }}
                                        showName
                                    />
                                </div>
                                <DropdownMenuItem className="p-0">
                                    <SignOutButton>
                                        <button className="flex w-full items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors rounded-md">
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </SignOutButton>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}