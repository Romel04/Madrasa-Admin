"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  Bell,
  User,
  ChevronDown,
  Search,
  X,
  Settings,
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  Briefcase,
  DollarSign,
  Book,
  Award,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import MobileSidebar from "./MobileSidebar";

// Helper function to get page name from pathname
const getPageName = (pathname) => {
  const path = pathname.substring(1).split("/");
  const mainSection = path[0] || "dashboard";

  const pageNameMap = {
    dashboard: { name: "Dashboard", icon: LayoutDashboard },
    settings: { name: "Settings", icon: Settings },
    students: { name: "Students", icon: FileText },
    teachers: { name: "Teachers", icon: Users },
    "educational-department": { name: "Educational Department", icon: Calendar },
    "administration-department": { name: "Administration Department", icon: Briefcase },
    "accounting-department": { name: "Accounting Department", icon: DollarSign },
    "boarding-department": { name: "Boarding Department", icon: Book },
    library: { name: "Library", icon: Book },
    mosque: { name: "Mosque", icon: Award },
    helpline: { name: "Helpline", icon: HelpCircle },
  };

  const pageInfo = pageNameMap[mainSection] || { name: mainSection.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "), icon: null };
  return { ...pageInfo };
};

export default function MainHeader({ isCollapsed, toggleSidebar }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);

  const { name: pageName, icon: PageIcon } = getPageName(pathname);
  return (
    <header className="fixed top-0 z-20 w-[94%]  bg-background shadow-lg">
      <div className="flex h-[70px] items-center justify-between px-4">
        {/* Left section: Menu toggle for mobile, page title */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5 text-text" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <MobileSidebar />
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Page title */}
          <div className="flex items-center gap-2">
            {PageIcon && (
              <PageIcon className="h-5 w-5 text-text" />
            )}
            <h1 className="text-lg font-medium text-text">
              {pageName}
            </h1>
          </div>
        </div>

        {/* Right section: Search, notifications, user menu */}
        <div className={`flex items-center gap-2 ${
          isCollapsed ? "w-auto" : "w-[calc(100%-70%)]"
        }`}>
          {/* Search (responsive) */}
          {/* <div className={cn(
            "relative",
            showSearch ? "w-full md:w-64" : "w-auto"
          )}>
            {showSearch ? (
              <div className="flex items-center">
                <Input
                  placeholder="Search..."
                  className="w-full pl-9"
                  autoFocus
                />
                <Search className="absolute left-3 h-4 w-4 text-text-muted" />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4 text-text" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowSearch(true)}
                className="mr-1"
              >
                <Search className="h-5 w-5 text-text" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div> */}
          
          {/* Notifications */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-text" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white">
                  3
                </span>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {[1, 2, 3].map((item) => (
                  <DropdownMenuItem key={item} className="cursor-pointer py-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-text">{`New user registered`}</p>
                        <p className="text-sm text-text-muted">
                          User account was created successfully
                        </p>
                        <p className="mt-1 text-xs text-text-muted">
                          {new Date().toLocaleTimeString()} - {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center">
                <p className="text-center text-sm font-medium text-primary">
                  View all notifications
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          
          {/* User menu */}
          <div className={`flex items-center gap-2 ${
            isCollapsed ? "justify-end" : "justify-end"
          }`}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/assets/images/avatar.png" />
              <AvatarFallback>
                <User className="h-4 w-4 text-text" />
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:inline-block text-text">
              {user?.name || "Admin User"}
            </span>
            <Button variant="ghost" onClick={logout}>
              <LogOut className="h-4 w-4 text-text" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}