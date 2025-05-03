"use client";

import { Card } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", dispensers: 100, users: 1200 },
  { name: "Feb", dispensers: 120, users: 2100 },
  { name: "Mar", dispensers: 140, users: 2400 },
  { name: "Apr", dispensers: 160, users: 2800 },
  { name: "May", dispensers: 180, users: 3200 },
  { name: "Jun", dispensers: 200, users: 3800 },
];

export function Overview() {
  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-semibold">Growth Overview</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                name="Active Users"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="dispensers"
                name="Dispensers"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}