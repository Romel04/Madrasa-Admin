"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/providers/LanguageProvider";
import { useRouter } from "next/navigation";
import {
  Settings,
  Bell,
  Lock,
  FileText,
  Briefcase,
  Book,
  Bookmark,
  Users,
  DollarSign,
  Award,
  Grid,
  Printer,
  UserPlus,
  CreditCard,
  MessageCircle,
} from "lucide-react";

const settingsCards = [
  { name: "siteSettings", banglaName: "সাইট সেটিংস", icon: Settings, gradient: "bg-gradient-to-r from-purple-500 to-indigo-500", slug: "site-settings" },
  { name: "session", banglaName: "সেশন", icon: Bell, gradient: "bg-gradient-to-r from-blue-500 to-cyan-500", slug: "session" },
  { name: "section", banglaName: "সেকশন", icon: Lock, gradient: "bg-gradient-to-r from-green-500 to-emerald-500", slug: "section" },
  { name: "examination", banglaName: "পরীক্ষা", icon: FileText, gradient: "bg-gradient-to-r from-yellow-500 to-amber-500", slug: "examination" },
  { name: "class", banglaName: "ক্লাস", icon: Briefcase, gradient: "bg-gradient-to-r from-red-500 to-rose-500", slug: "class" },
  { name: "book", banglaName: "বই", icon: Book, gradient: "bg-gradient-to-r from-pink-500 to-fuchsia-500", slug: "book" },
  { name: "bookAssign", banglaName: "বই এসাইন", icon: Bookmark, gradient: "bg-gradient-to-r from-indigo-500 to-violet-500", slug: "book-assign" },
  { name: "responsibility", banglaName: "দায়িত্ব", icon: Users, gradient: "bg-gradient-to-r from-teal-500 to-cyan-500", slug: "responsibility" },
  { name: "donorType", banglaName: "দাতার ধরণ", icon: DollarSign, gradient: "bg-gradient-to-r from-orange-500 to-amber-500", slug: "donor-type" },
  { name: "donationType", banglaName: "দান ধরণ", icon: Award, gradient: "bg-gradient-to-r from-lime-500 to-emerald-500", slug: "donation-type" },
  { name: "gradeSystem", banglaName: "গ্রেড সিস্টেম", icon: Grid, gradient: "bg-gradient-to-r from-cyan-500 to-sky-500", slug: "grade-system" },
  { name: "shop", banglaName: "দোকান", icon: Printer, gradient: "bg-gradient-to-r from-fuchsia-500 to-rose-500", slug: "shop" },
  { name: "invoiceDesign", banglaName: "চালান ডিজাইন", icon: Printer, gradient: "bg-gradient-to-r from-emerald-500 to-green-500", slug: "invoice-design" },
  { name: "user", banglaName: "ব্যবহারকারী", icon: UserPlus, gradient: "bg-gradient-to-r from-rose-500 to-red-500", slug: "user" },
  { name: "admissionFee", banglaName: "ভর্তি ফি", icon: CreditCard, gradient: "bg-gradient-to-r from-sky-500 to-blue-500", slug: "admission-fee" },
  { name: "smsSettings", banglaName: "এসএমএস সেটিংস", icon: MessageCircle, gradient: "bg-gradient-to-r from-amber-500 to-yellow-500", slug: "sms-settings" },
];

export default function SettingsComponent() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleCardClick = (slug) => {
    router.push(`settings/${slug}`);
  };

  return (
    <div className="space-y-6 w-full">
      <Tabs defaultValue="site-settings">
        <TabsList className="flex flex-col sm:flex-row">
          <TabsTrigger value="site-settings">{t('siteSettings')}</TabsTrigger>
          <TabsTrigger value="security">{t('security')}</TabsTrigger>
          <TabsTrigger value="website">{t('websiteSettings')}</TabsTrigger>
        </TabsList>
        <TabsContent value="site-settings">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 sm:mt-0">
            {settingsCards.map((card, index) => (
              <Card
                key={index}
                className={`${card.gradient} backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
                onClick={() => handleCardClick(card.slug)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{t(card.name)}</CardTitle>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* <p className="text-white">{t(card.banglaName)}</p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="security">
          {/* Security settings content */}
        </TabsContent>
        <TabsContent value="website">
          {/* Other settings content */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
