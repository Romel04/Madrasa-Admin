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

const studentsCards = [
  { name: "studentsList", banglaName: "ব্যবহারকারী", icon: UserPlus, gradient: "bg-gradient-to-r from-rose-500 to-red-500", slug: "students-list" },
];

export default function StudentsComponent() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleCardClick = (slug) => {
    router.push(`students/${slug}`);
  };

  return (
    <div className="space-y-6 w-full">
      <Tabs>
        <TabsContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 sm:mt-0">
            {studentsCards.map((card, index) => (
              <Card
                key={index}
                className={`${card.gradient} backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
                onClick={() => handleCardClick(card.slug)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-[15px]">{t(card.name)}</CardTitle>
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
      </Tabs>
    </div>
  );
}
