"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  { name: "Site Settings", icon: Settings },
  { name: "Notification", icon: Bell },
  { name: "Security", icon: Lock },
  { name: "Examination", icon: FileText },
  { name: "Class", icon: Briefcase },
  { name: "Book", icon: Book },
  { name: "Book assign", icon: Bookmark },
  { name: "Responsibily", icon: Users },
  { name: "Donor type", icon: DollarSign },
  { name: "Donation type", icon: Award },
  { name: "Grade system", icon: Grid },
  { name: "Shop", icon: Printer },
  { name: "Invoice design", icon: Printer },
  { name: "User", icon: UserPlus },
  { name: "Admission fee", icon: CreditCard },
  { name: "SMS setting", icon: MessageCircle },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="site-settings">
        <TabsList>
          <TabsTrigger value="site-settings">General Settings</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="website">Website Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="site-settings">
          <div className="grid grid-cols-4 gap-4">
            {settingsCards.map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{card.name}</CardTitle>
                    <card.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Add any additional content or functionality for the settings card */}
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
