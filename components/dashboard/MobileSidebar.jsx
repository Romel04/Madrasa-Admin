"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileText, 
  Bell, 
  Calendar, 
  DollarSign, 
  Award, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { SheetClose } from "@/components/ui/sheet";

// Sidebar items (same as in MainSidebar)
const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "User Management",
    href: "/user-management",
    icon: Users,
  },
  {
    name: "Content Management",
    href: "/cms",
    icon: FileText,
  },
  {
    name: "Notifications",
    href: "/news-and-notice",
    icon: Bell,
  },
  {
    name: "Events",
    href: "/event-management",
    icon: Calendar,
  },
  {
    name: "Transactions",
    href: "/transaction",
    icon: DollarSign,
  },
  {
    name: "Scholarships",
    href: "/scholarship",
    icon: Award,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function MobileSidebar() {
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
    <div className="flex h-full flex-col bg-primary">
      {/* Logo */}
      <div className="flex h-[70px] items-center justify-center border-b border-primary-600">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo-icon.png"
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
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <li key={item.name}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 transition-colors",
                      isActive
                        ? "bg-primary-700 text-white"
                        : "text-primary-100 hover:bg-primary-600 hover:text-white"
                    )}
                  >
                    <item.icon className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </SheetClose>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto border-t border-primary-600 px-2 py-4">
        <SheetClose asChild>
          <button
            onClick={logout}
            className="flex w-full items-center rounded-md px-3 py-2 text-primary-100 transition-colors hover:bg-primary-600 hover:text-white"
          >
            <LogOut className="mr-2 h-5 w-5 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </SheetClose>
      </div>
    </div>
  );
}