"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", completionRate: 75, responses: 1200 },
  { month: "Feb", completionRate: 82, responses: 1400 },
  { month: "Mar", completionRate: 78, responses: 1100 },
  { month: "Apr", completionRate: 85, responses: 1600 },
  { month: "May", completionRate: 88, responses: 1800 },
  { month: "Jun", completionRate: 92, responses: 2000 },
];

export function PollMetrics() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Poll Completion Metrics</h2>
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
              dataKey="completionRate"
              name="Completion Rate (%)"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="responses"
              name="Total Responses"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}