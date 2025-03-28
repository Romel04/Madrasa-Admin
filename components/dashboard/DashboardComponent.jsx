"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/providers/AuthProvider";
import { Users, DollarSign, Award, Calendar, School, Wallet, User } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const statsCards = [
  {
    name: "totalStudents",
    value: "2,345",
    icon: School,
    color: "bg-purple-500/80",
  },
  {
    name: "totalCollection",
    value: "৳ 34,590",
    icon: DollarSign,
    color: "bg-blue-500/80",
  },
  {
    name: "totalExpenditure",
    value: "৳ 125",
    icon: Wallet,
    color: "bg-green-500/80",
  },
  {
    name: "totalTeachers",
    value: "24",
    icon: User,
    color: "bg-yellow-500/80",
  },
];

export default function DashboardComponent() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [currentTimeStr, setCurrentTimeStr] = useState("");
  const [greeting, setGreeting] = useState("Good day");

  useEffect(() => {
    // Set current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }));

      // Set greeting based on time of day
      const hours = now.getHours();
      if (hours < 12) {
        setGreeting("Good morning");
      } else if (hours < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            {greeting}, {user?.name || "Admin"}
          </h2>
          <p className="text-text-muted">
            It&apos;s {new Date().toLocaleDateString(undefined, {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })} | {currentTimeStr}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((card, index) => (
            <StatsCard
              key={index}
              title={t(card.name)}
              value={card.value}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const StatsCard = ({ title, value, icon, color, banglaTitle }) => {
  const Icon = icon;

  return (
    <Card className={`${color} backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-white">{title}</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{value}</h3>
          </div>
          <div className="rounded-lg bg-white/20 p-3">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
