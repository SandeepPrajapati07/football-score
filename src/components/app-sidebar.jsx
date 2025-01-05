"use client";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarSeparator,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  Home,
  Speaker,
  MessageCircle,
  Bell,
  Users,
  User,
  Settings,
  Download,
  Shield,
  LogOut,
  Search,
} from "lucide-react";
import { NavUser } from "./nav-user";

const sidebarSections = [
  {
    items: [
      { title: "Home", url: "#", icon: Home },
      { title: "Leader Board", url: "#", icon: Users },
      { title: "Ground", url: "#", icon: Speaker },
      { title: "Chat", url: "#", icon: MessageCircle },
      { title: "Notification", url: "#", icon: Bell },
    ],
  },
  {
    label: "Followed",
    items: [
      {
        title: "Followed Team",
        icon: Shield,
        children: [
          { title: "Team A", url: "#" },
          { title: "Team B", url: "#" },
        ],
      },
      {
        title: "Followed Player",
        icon: User,
        children: [
          { title: "Player 1", url: "#" },
          { title: "Player 2", url: "#" },
        ],
      },
      {
        title: "Followed Ground",
        icon: Speaker,
        children: [
          { title: "Ground X", url: "#" },
          { title: "Ground Y", url: "#" },
        ],
      },
    ],
  },
  {
    label: "Options",
    items: [
      { title: "Settings", url: "#", icon: Settings },
      { title: "Download this App", url: "#", icon: Download },
    ],
  },
];

const userData = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <Sidebar>
      <SidebarContent>
        {/* Title and Search Bar */}
        <div className="p-4 sticky top-0 bg-[#222222] z-10 shadow shadow-white">
          <h1 className="text-2xl font-semibold text-[#FFFFFF] text-center italic">FOOTBALL<span className="text-[#C3CC5A]">SHURU</span></h1>
          <div className="mt-4">
            <div className="flex items-center px-3 py-2 bg-[#2F2F2F] rounded-[10px]">
              <Search className="w-5 h-5 text-[#FFFFFF] mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent flex-1 text-[#FFFFFF] outline-none border-none ]]"
              />
            </div>
          </div>
        </div>

        {sidebarSections.map((section, sectionIdx) => (
          <SidebarGroup key={sectionIdx}>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url || "#"}
                          className={`flex items-center px-4 py-2 rounded-lg transition-colors text-[20px] relative ${
                            activeItem === item.title
                              ? "text-[#C3CC5A]"
                              : ""
                          }`}
                          onClick={() => {
                            setActiveItem(item.title);
                            setExpandedItem(
                              expandedItem === item.title ? null : item.title
                            );
                          }}
                        >
                          {activeItem === item.title && <span className="w-[4px] h-full bg-[#C3CC5A] rounded-full absolute left-0"></span>}
                          <div className={`flex items-center ${
                            activeItem === item.title
                              ? "text-[#C3CC5A]"
                              : ""
                          }`}>
                            {item.icon && (
                              <item.icon className={`w-5 h-5 mr-3 ${
                                activeItem === item.title
                                  ? "stroke-[#C3CC5A]"
                                  : ""
                              }`}/>
                            )}
                            <span className={`${
                              activeItem === item.title
                                ? "text-[#C3CC5A]"
                                : ""
                            }`} style={{letterSpacing:"0.75px"}}>{item.title}</span>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {/* Render children if expanded */}
                    {expandedItem === item.title && item.children && (
                      <div className="ml-6 mt-2">
                        {item.children.map((child) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                              <a
                                href={child.url}
                                className="flex items-center px-4 py-2 rounded-lg transition-colors hover:bg-[#C3CC5A] text-[#FFFFFF]"
                              >
                                <span>{child.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </SidebarMenu>
              <SidebarSeparator />
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      <SidebarFooter className="mb-0 sticky bottom-0 bg-[#222222] shadow shadow-white">
        <NavUser user={userData} />
      </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
