"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/providers/AuthProvider";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, DollarSign, Award, Calendar } from "lucide-react";

// Sample data for charts
const userActivityData = [
  { name: "Jan", active: 400, new: 240 },
  { name: "Feb", active: 300, new: 139 },
  { name: "Mar", active: 200, new: 980 },
  { name: "Apr", active: 278, new: 390 },
  { name: "May", active: 189, new: 480 },
  { name: "Jun", active: 239, new: 380 },
  { name: "Jul", active: 349, new: 430 },
];

const transactionData = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 2390 },
  { name: "Jul", amount: 3490 },
];

const scholarshipData = [
  { name: "Applied", value: 400 },
  { name: "Approved", value: 300 },
  { name: "Rejected", value: 300 },
  { name: "Pending", value: 200 },
];

const COLORS = ["#3b82f6", "#10b981", "#ef4444", "#f59e0b"];

// Stats Card Component
const StatsCard = ({ title, value, description, icon, trend }) => {
  const Icon = icon;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-text-muted">{title}</p>
            <h3 className="mt-2 text-3xl font-bold">{value}</h3>
            {description && (
              <p className="mt-1 text-sm text-text-muted">{description}</p>
            )}
            {trend && (
              <p className={`mt-2 flex items-center text-sm font-medium ${
                trend.startsWith("+") ? "text-secondary-600" : "text-destructive"
              }`}>
                {trend}
              </p>
            )}
          </div>
          <div className="rounded-lg bg-primary-50 p-3 pt-0">
            <Icon className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function DashboardPage() {
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
    <div className="space-y-6">
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total students" 
          value="2,345" 
          icon={Users}
        />
        <StatsCard 
          title="Total collection" 
          value="$34,590" 
          icon={DollarSign}
        />
        <StatsCard 
          title="Total Eependiture " 
          value="125" 
          icon={Award}
        />
        <StatsCard 
          title="Total teachers" 
          value="24" 
          icon={Calendar}
        />
      </div>
    </div>
  );
}