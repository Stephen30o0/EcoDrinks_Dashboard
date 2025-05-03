"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity } from "lucide-react";

const activities = [
  {
    id: 1,
    action: "New dispenser installed",
    location: "Kigali Heights",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    action: "Maintenance completed",
    location: "Kigali Convention Centre",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    action: "Survey completed",
    location: "Kimironko Market",
    timestamp: "6 hours ago",
  },
  {
    id: 4,
    action: "Water quality check",
    location: "Nyabugogo Terminal",
    timestamp: "8 hours ago",
  },
];

export function RecentActivities() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Recent Activities</h3>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex justify-between items-start border-l-2 border-primary pl-4 pb-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.location}</p>
              </div>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}