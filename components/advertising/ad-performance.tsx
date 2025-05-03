"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", impressions: 12000, interactions: 3600 },
  { month: "Feb", impressions: 14000, interactions: 4200 },
  { month: "Mar", impressions: 16000, interactions: 5100 },
  { month: "Apr", impressions: 18000, interactions: 5800 },
  { month: "May", impressions: 20000, interactions: 6500 },
  { month: "Jun", impressions: 22000, interactions: 7200 },
];

export function AdPerformance() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Ad Performance Overview</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="impressions"
              name="Impressions"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="interactions"
              name="Interactions"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}