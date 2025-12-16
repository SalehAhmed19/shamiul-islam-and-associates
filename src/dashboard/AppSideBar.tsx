
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignOutButton, UserButton, useUser } from "@clerk/clerk-react";
import { ChevronUp, Edit, Edit2, Plus, User2, Users } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

export default function AppSideBar() {
    const { user } = useUser();
    console.log(user);
    if (!user) {
        return <Navigate to="/" />
    }
    const username = user?.firstName + " " + user?.lastName;

    const items = [
        { title: "Add Blogs", url: "/dashboard/secure/admin-panel", icon: Plus },
        { title: "Manage Blogs", url: "/dashboard/secure/admin-panel/manage-blogs", icon: Edit },
    ]
    return (

        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarMenu>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <SidebarMenuButton className="focus:outline-none w-full cursor-pointer">
                                                <Users /> Manage Associates
                                            </SidebarMenuButton>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="start">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem asChild className="cursor-pointer">
                                                    <Link to={"/dashboard/secure/admin-panel/add-associates"}>
                                                        Add Associates
                                                        <DropdownMenuShortcut><Plus /></DropdownMenuShortcut>
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild className="cursor-pointer">
                                                    <Link to={"/dashboard/secure/admin-panel/manage-associates"}>
                                                        Manage Associates
                                                        <DropdownMenuShortcut><Edit2 /></DropdownMenuShortcut>
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {username}
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <UserButton showName />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <SignOutButton />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

    )
}