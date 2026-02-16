import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignOutButton, UserButton, useUser } from "@clerk/clerk-react";
import {
  ChevronUp,
  Edit2,
  LayoutDashboard,
  LogOut,
  Plus,
  User2,
  Users,
} from "lucide-react";
import { Link, Navigate } from "react-router-dom";

export default function AppSideBar() {
  const { user } = useUser();
  //   const location = useLocation();

  if (!user) {
    return <Navigate to="/" />;
  }

  const username = `${user?.firstName} ${user?.lastName}`;

  //   const items = [
  //     { title: "Create Blogs", url: "/dashboard/secure/admin-panel", icon: Plus },
  //     {
  //       title: "Manage Blogs",
  //       url: "/dashboard/secure/admin-panel/manage-blogs",
  //       icon: Edit,
  //     },
  //     {
  //       title: "Create News",
  //       url: "/dashboard/secure/admin-panel/manage-blogs",
  //       icon: Plus,
  //     },
  //     {
  //       title: "Manage News",
  //       url: "/dashboard/secure/admin-panel/manage-news",
  //       icon: Edit2,
  //     },
  //   ];

  return (
    <Sidebar className="border-r border-black/5 bg-slate-50/50">
      <SidebarHeader className="flex items-center h-16 px-6 border-b border-black/5">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-[#604B33] hover:opacity-80 transition-opacity"
        >
          <LayoutDashboard size={22} />
          <span className="text-lg tracking-tight">Admin Panel</span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 text-[11px] font-bold uppercase tracking-widest text-black/40 mb-2">
            Content Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {/* {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`transition-all duration-200 h-10 px-3 ${
                        isActive
                          ? "bg-[#604B33]/10 text-[#604B33] font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon
                          size={18}
                          className={
                            isActive ? "text-[#604B33]" : "text-slate-400"
                          }
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })} */}

              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="h-10 px-3 transition-all cursor-pointer text-slate-600 hover:bg-slate-100">
                      <Users size={18} className="text-slate-400" />
                      <span className="flex-1 text-left">Blogs</span>
                      <ChevronUp
                        className="ml-auto rotate-90 opacity-50"
                        size={14}
                      />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="ml-2 shadow-xl w-52 border-slate-200"
                    align="start"
                    side="right"
                  >
                    <DropdownMenuGroup className="p-1">
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]"
                      >
                        <Link
                          to={"/dashboard/secure/admin-panel"}
                          className="flex items-center justify-between w-full p-2"
                        >
                          <span>Add New</span>
                          <Plus size={14} />
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]"
                      >
                        <Link
                          to={"/dashboard/secure/admin-panel/manage-blogs"}
                          className="flex items-center justify-between w-full p-2"
                        >
                          <span>Manage Blogs</span>
                          <Edit2 size={14} />
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>

              {/* Collapsible-style Trigger for Associates */}
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="h-10 px-3 transition-all cursor-pointer text-slate-600 hover:bg-slate-100">
                      <Users size={18} className="text-slate-400" />
                      <span className="flex-1 text-left">Associates</span>
                      <ChevronUp
                        className="ml-auto rotate-90 opacity-50"
                        size={14}
                      />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="ml-2 shadow-xl w-52 border-slate-200"
                    align="start"
                    side="right"
                  >
                    <DropdownMenuGroup className="p-1">
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]"
                      >
                        <Link
                          to={"/dashboard/secure/admin-panel/add-associates"}
                          className="flex items-center justify-between w-full p-2"
                        >
                          <span>Add New</span>
                          <Plus size={14} />
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]"
                      >
                        <Link
                          to={"/dashboard/secure/admin-panel/manage-associates"}
                          className="flex items-center justify-between w-full p-2"
                        >
                          <span>Directory</span>
                          <Edit2 size={14} />
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="h-10 px-3 transition-all cursor-pointer text-slate-600 hover:bg-slate-100">
                      <Users size={18} className="text-slate-400" />
                      <span className="flex-1 text-left">News & Updates</span>
                      <ChevronUp
                        className="ml-auto rotate-90 opacity-50"
                        size={14}
                      />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="ml-2 shadow-xl w-52 border-slate-200"
                    align="start"
                    side="right"
                  >
                    <DropdownMenuGroup className="p-1">
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]"
                      >
                        <Link
                          to={"/dashboard/secure/admin-panel/create-news"}
                          className="flex items-center justify-between w-full p-2"
                        >
                          <span>Create News</span>
                          <Plus size={14} />
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-[#604B33]/5 focus:text-[#604B33]"
                      >
                        <Link
                          to={"/dashboard/secure/admin-panel/manage-news"}
                          className="flex items-center justify-between w-full p-2"
                        >
                          <span>Manage News</span>
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

      <SidebarFooter className="p-4 bg-white border-t border-black/5">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-12 px-3 transition-colors border border-transparent rounded-lg cursor-pointer hover:bg-slate-50 hover:border-slate-200">
                  <div className="bg-[#604B33]/10 p-1.5 rounded-md text-[#604B33]">
                    <User2 size={18} />
                  </div>
                  <span className="ml-1 font-medium truncate text-slate-700">
                    {username}
                  </span>
                  <ChevronUp className="ml-auto opacity-40" size={16} />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="center"
                className="w-56 p-2 mb-2 shadow-2xl border-slate-200"
              >
                <div className="px-2 py-3 mb-1 border-b border-slate-50">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonBox:
                          "flex-row-reverse w-full justify-between",
                      },
                    }}
                    showName
                  />
                </div>
                <DropdownMenuItem className="p-0">
                  <SignOutButton>
                    <button className="flex items-center w-full gap-3 px-3 py-2 text-sm text-red-600 transition-colors rounded-md hover:bg-red-50">
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
