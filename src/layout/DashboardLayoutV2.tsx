// import { images } from "@/assets/assets";
// import { BookOpen, LayoutDashboard, Newspaper, Users } from "lucide-react";
// import { Link, Outlet } from "react-router-dom";

// export default function DashboardLayoutV2() {
//   const menuItems = [
//     {
//       name: "Dashboard Overview",
//       icon: <LayoutDashboard size={16} />,
//       path: "/dashboard-v2",
//     },
//     {
//       name: "Blogs Management",
//       icon: <BookOpen size={16} />,
//       path: "/dashboard-v2/blogs",
//     },
//     {
//       name: "Associates Members",
//       icon: <Users size={16} />,
//       path: "/dashboard-v2/members",
//     },
//     {
//       name: "News Management",
//       icon: <Newspaper size={16} />,
//       path: "/dashboard-v2/news",
//     },
//   ];
//   return (
//     <div className="flex">
//       <div className="flex flex-col w-2/12 h-screen gap-5 p-3 border-r border-black/10">
//         <div className="flex items-center">
//           <img src={images.logoV2} alt="Dashboard Layout V2" className="w-14" />
//           <h4 className="text-xl font-bold">Admin Panel</h4>
//         </div>

//         <div>
//           <ul>
//             {menuItems.map((item) => (
//               <li
//                 key={item.name}
//                 className="p-3 rounded-md hover:bg-gray-100 text-[#604B33]"
//               >
//                 <Link to={item.path} className="flex items-center gap-2">
//                   {item.icon}
//                   <span>{item.name}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="w-10/12 p-5">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { images } from "@/assets/assets";
import {
  BookOpen,
  LayoutDashboard,
  Newspaper,
  Users,
  Menu,
  X,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function DashboardLayoutV2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard Overview",
      icon: <LayoutDashboard size={18} />,
      path: "/dashboard-v2",
    },
    {
      name: "Blogs Management",
      icon: <BookOpen size={18} />,
      path: "/dashboard-v2/blogs",
    },
    {
      name: "Associates Members",
      icon: <Users size={18} />,
      path: "/dashboard-v2/members",
    },
    {
      name: "News Management",
      icon: <Newspaper size={18} />,
      path: "/dashboard-v2/news",
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* --- Sidebar for Desktop --- */}
      <aside className="sticky top-0 flex-col hidden w-64 h-screen gap-6 p-5 bg-white border-r lg:flex border-black/10">
        <div className="flex items-center gap-3">
          <img src={images.logoV2} alt="Logo" className="w-10" />
          <h4 className="text-xl font-bold text-gray-800">Admin Panel</h4>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-[#604B33] text-white"
                      : "text-[#604B33] hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* --- Mobile Header --- */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-white border-b lg:hidden border-black/10">
        <div className="flex items-center gap-2">
          <img src={images.logoV2} alt="Logo" className="w-8" />
          <span className="font-bold">Admin</span>
        </div>
        <button onClick={toggleSidebar} className="p-2 text-gray-600">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Drawer Overlay --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/50"
          onClick={toggleSidebar}
        />
      )}

      {/* --- Mobile Sidebar Drawer --- */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full gap-6 p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Menu</h4>
            <button onClick={toggleSidebar}>
              <X size={20} />
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name} onClick={toggleSidebar}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 p-3 text-[#604B33] hover:bg-gray-100 rounded-lg"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 w-full p-4 mt-16 lg:w-auto lg:mt-0 md:p-8">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
