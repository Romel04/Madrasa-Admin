"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { useLanguage } from "@/providers/LanguageProvider";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  Award,
  LogOut,
  Book,
  Briefcase,
  Home,
  HelpCircle,
} from "lucide-react";

// You will need to adapt this to match your actual MobileSidebar implementation
export default function MobileSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { t } = useLanguage();

  // Menu items for sidebar with translation keys
  const sidebarItems = [
    {
      nameKey: "dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      nameKey: "settings",
      href: "/settings",
      icon: Settings,
    },
    // Add other sidebar items as in MainSidebar
    // ...
  ];

  return (
    <div className="flex h-full flex-col bg-primary">
      <div className="flex h-[70px] items-center border-b border-primary-600 px-4">
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
            {t('adminPortal')}
          </span>
        </Link>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.nameKey}>
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
                  <span>{t(item.nameKey)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="mt-auto border-t border-primary-600 px-2 py-4">
        <button
          onClick={logout}
          className="flex w-full items-center rounded-md px-3 py-2 text-primary-100 transition-colors hover:bg-primary-600 hover:text-white"
        >
          <LogOut className="mr-2 h-5 w-5 flex-shrink-0" />
          <span>{t('logout')}</span>
        </button>
      </div>
    </div>
  );
}