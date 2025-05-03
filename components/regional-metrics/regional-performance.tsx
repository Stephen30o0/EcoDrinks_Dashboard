"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { district: "Nyarugenge", revenue: 12500, users: 850 },
  { district: "Gasabo", revenue: 15000, users: 1200 },
  { district: "Kicukiro", revenue: 10800, users: 750 },
  { district: "Remera", revenue: 9500, users: 680 },
  { district: "Kimironko", revenue: 11200, users: 920 },
];

export function RegionalPerformance() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">District Performance</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="district" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="revenue" name="Revenue (RWF)" fill="hsl(var(--chart-1))" />
            <Bar yAxisId="right" dataKey="users" name="Active Users" fill="hsl(var(--chart-2))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}