import { useGetAssociates } from "@/hooks/useGetAssociates";
import { useGetBlogs } from "@/hooks/useGetBlogs";
import { axiosPublic } from "@/utils/axiosInstance";
// import { useAuth } from "@clerk/clerk-react";
import {
  BookOpen,
  Clock,
  ExternalLink,
  Eye,
  Facebook,
  // Link,
  // Link2Icon,
  Newspaper,
  ScanSearch,
  // Share,
  Users,
  YoutubeIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  // const { user } = useAuth();
  const { blogs } = useGetBlogs();
  const { associates } = useGetAssociates();

  const [visitors, setVisitors] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false); // এনিমেশনের জন্য

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const hasVisited = localStorage.getItem("hasVisitedSite");
        let increment = false;

        if (!hasVisited) {
          increment = true;
          localStorage.setItem("hasVisitedSite", "true");
        }

        const response = await axiosPublic.get(
          `/stats/visitors?increment=${increment}`,
        );
        setVisitors(response.data.totalVisitors);
        setIsVisible(true); // ডাটা লোড হলে দেখাবে
      } catch (error) {
        console.error("Failed to fetch visitors", error);
      }
    };

    fetchVisitors();
  }, []);

  if (!isVisible) return null;

  const overviewData = [
    {
      title: "Total Blogs",
      value: blogs.length,
      icon: <BookOpen size={24} />,
    },
    {
      title: "Total Associates",
      value: associates.length,
      icon: <Users size={24} />,
    },
    {
      title: "Total News",
      value: associates.length,
      icon: <Newspaper size={24} />,
    },
    {
      title: "Total Visitors",
      value: visitors,
      icon: <Eye size={24} />,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold">
        {/* Welcome Back,  {user?.firstName || "User"}! */}
      </h2>
      <p className="text-black/50">Here's what happening on your CMS today.</p>

      {/* Overview card */}
      <div className="grid grid-cols-4 gap-5 mt-10">
        {overviewData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 p-5 bg-white border rounded-2xl"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 text-white ${item.title === "Total Blogs" ? "bg-blue-600" : item.title === "Total Associates" ? "bg-purple-600" : item.title === "Total News" ? "bg-orange-600" : "bg-green-700"} rounded-md`}
            >
              {item.icon}
            </div>
            <h5 className="font-semibold">{item.title}</h5>
            <h3 className="text-3xl font-bold">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* recent activity */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="col-span-2 p-5 bg-white border rounded-2xl">
          <div>
            <div className="flex items-center gap-2 pb-5 border-b">
              <Clock size={16} className="text-black/30" />
              <h3 className="text-xl font-bold">Recent Activity</h3>
            </div>

            <div>
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/10"></div>
                    <div>
                      <p className="font-bold">
                        New blog published{" "}
                        <span className="text-blue-600">
                          "বাংলাদেশে পরকীয়ার শাস্তি ও আইন: ৫ বছরের জেল ..."
                        </span>
                      </p>
                      <p className="text-sm font-bold text-black/50">
                        By Shamiul Islam Prince • 2 hours ago
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    className="mt-3 cursor-pointer text-black/50 hover:underline"
                    href="/blogs"
                  />
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/10"></div>
                    <div>
                      <p className="font-bold">
                        New blog published{" "}
                        <span className="text-blue-600">
                          "বাংলাদেশে পরকীয়ার শাস্তি ও আইন: ৫ বছরের জেল ..."
                        </span>
                      </p>
                      <p className="text-sm font-bold text-black/50">
                        By Shamiul Islam Prince • 2 hours ago
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    className="mt-3 cursor-pointer text-black/50 hover:underline"
                    href="/blogs"
                  />
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/10"></div>
                    <div>
                      <p className="font-bold">
                        New blog published{" "}
                        <span className="text-blue-600">
                          "বাংলাদেশে পরকীয়ার শাস্তি ও আইন: ৫ বছরের জেল ..."
                        </span>
                      </p>
                      <p className="text-sm font-bold text-black/50">
                        By Shamiul Islam Prince • 2 hours ago
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    className="mt-3 cursor-pointer text-black/50 hover:underline"
                    href="/blogs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-5 space-y-5 bg-blue-600 rounded-2xl">
            <div className="flex items-center gap-2">
              <ScanSearch size={24} className="text-white" />
              <h3 className="text-xl font-bold text-white">Your platform</h3>
            </div>

            <div className="p-4 space-y-4 font-bold bg-white rounded-2xl">
              <a
                href="https://www.youtube.com/@AdvPrinceIslam"
                target="_blank"
                className="flex items-center gap-2 duration-200 rounded-lg hover:bg-gray-100 tansition-colors"
              >
                <div className="p-2 bg-red-500 rounded-full">
                  <YoutubeIcon className="text-white" />
                </div>
                YouTube
              </a>
              <a
                href="https://www.facebook.com/adv.prince.islam"
                target="_blank"
                className="flex items-center gap-2 duration-200 rounded-lg rounded- hover:bg-gray-100 tansition-colors"
              >
                <div className="p-2 bg-blue-500 rounded-full">
                  <Facebook className="text-white" />
                </div>{" "}
                Facebook Page
              </a>
              <a
                href="https://www.facebook.com/shamiul.associates"
                target="_blank"
                className="flex items-center gap-2 duration-200 rounded-lg rounded- hover:bg-gray-100 tansition-colors"
              >
                <div className="p-2 bg-blue-500 rounded-full">
                  <Facebook className="text-white" />
                </div>{" "}
                Facebook Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
