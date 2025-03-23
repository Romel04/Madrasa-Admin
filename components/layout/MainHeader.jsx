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
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/providers/AuthProvider";
import { useLanguage } from "@/providers/LanguageProvider";
import MobileSidebar from "./MobileSidebar";
import LanguageSwitch from "@/components/LanguageSwitch";

// Helper function to get page name from pathname
const getPageName = (pathname) => {
  const path = pathname.substring(1).split("/");
  const mainSection = path[0] || "dashboard";

  const pageNameMap = {
    dashboard: { name: "dashboard", icon: LayoutDashboard },
    settings: { name: "settings", icon: Settings },
    students: { name: "students", icon: FileText },
    teachers: { name: "teachers", icon: Users },
    "educational-department": { name: "educationalDepartment", icon: Calendar },
    "administration-department": { name: "administrationDepartment", icon: Briefcase },
    "accounting-department": { name: "accountingDepartment", icon: DollarSign },
    "boarding-department": { name: "boardingDepartment", icon: Book },
    library: { name: "library", icon: Book },
    mosque: { name: "mosque", icon: Award },
    helpline: { name: "helpline", icon: HelpCircle },
  };

  const pageInfo = pageNameMap[mainSection] || { 
    name: mainSection.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "), 
    icon: null 
  };
  
  return { ...pageInfo };
};

export default function MainHeader({ isCollapsed, toggleSidebar }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const { name: pageNameKey, icon: PageIcon } = getPageName(pathname);
  const pageName = t(pageNameKey);
  
  return (
    <header className="fixed top-0 z-20 w-[94%] bg-background shadow-lg">
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

        {/* Right section: Search, language switch, notifications, user menu */}
        <div className={`flex items-center gap-2 ${
          isCollapsed ? "w-auto" : "w-[calc(100%-68%)]"
        }`}>
          {/* Language Switch */}
          <LanguageSwitch />
          
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
              <span className="sr-only">{t('logout')}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}