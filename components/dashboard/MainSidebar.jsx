"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Bell,
  Calendar,
  DollarSign,
  Award,
  LogOut,
  Book,
  Bookmark,
  Briefcase,
  Home,
  HelpCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Menu items for sidebar
const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Students",
    href: "/students",
    icon: FileText,
  },
  {
    name: "Teachers",
    href: "/teachers",
    icon: Users,
  },
  {
    name: "Educational department",
    href: "/educational-department",
    icon: Calendar,
  },
  {
    name: "Administration department",
    href: "/administration-department",
    icon: Briefcase,
  },
  {
    name: "Accounting department",
    href: "/accounting-department",
    icon: DollarSign,
  },
  {
    name: "Boarding department",
    href: "/boarding-department",
    icon: Home,
  },
  {
    name: "Library",
    href: "/library",
    icon: Book,
  },
  {
    name: "Mosque",
    href: "/mosque",
    icon: Award,
  },
  {
    name: "Helpline",
    href: "/helpline",
    icon: HelpCircle,
  },
];

export default function MainSidebar({ isCollapsed, toggleSidebar }) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 h-full bg-primary shadow-md transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
        "hidden lg:block" // Hide on mobile, will use drawer instead
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo and Collapse Toggle */}
        <div className={cn(
          "flex h-[70px] items-center border-b border-primary-600 transition-all",
          isCollapsed ? "justify-center" : "justify-between px-4"
        )}>
          {!isCollapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image
                src="/assets/logos/logo.png"
                alt="Logo"
                width={32}
                height={32}
                priority
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold text-white">
                Admin Portal
              </span>
            </Link>
          )}
          
          {isCollapsed && (
            <Link href="/dashboard" className="flex items-center justify-center">
              <Image
                src="/assets/logos/logo.png"
                alt="Logo"
                width={32}
                height={32}
                priority
                className="h-8 w-8"
              />
            </Link>
          )}
          
          <button
            onClick={toggleSidebar}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-primary-600",
              isCollapsed ? "ml-0" : "ml-2"
            )}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.name}>
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-md py-2 transition-colors",
                          isActive
                            ? "bg-primary-700 text-white"
                            : "text-primary-100 hover:bg-primary-600 hover:text-white",
                          isCollapsed ? "justify-center px-2" : "px-3"
                        )}
                      >
                        <item.icon className={cn(
                          "h-5 w-5 flex-shrink-0",
                          isCollapsed ? "mx-0" : "mr-2"
                        )} />

                        {!isCollapsed && (
                          <span className="truncate">{item.name}</span>
                        )}
                      </Link>
                    </TooltipTrigger>

                    {isCollapsed && (
                      <TooltipContent side="right">
                        {item.name}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </nav>

        {/* Logout Button */}
        <div className="mt-auto border-t border-primary-600 px-2 py-4">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={logout}
                  className={cn(
                    "flex w-full items-center rounded-md py-2 text-primary-100 transition-colors hover:bg-primary-600 hover:text-white",
                    isCollapsed ? "justify-center px-2" : "px-3"
                  )}
                >
                  <LogOut className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isCollapsed ? "mx-0" : "mr-2"
                  )} />
                  
                  {!isCollapsed && (
                    <span>Logout</span>
                  )}
                </button>
              </TooltipTrigger>
              
              {isCollapsed && (
                <TooltipContent side="right">
                  Logout
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </aside>
  );
}