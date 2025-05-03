"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { category: "Product Quality", positive: 75, neutral: 15, negative: 10 },
  { category: "User Experience", positive: 65, neutral: 25, negative: 10 },
  { category: "Sustainability", positive: 85, neutral: 10, negative: 5 },
  { category: "Price", positive: 55, neutral: 30, negative: 15 },
];

export function SentimentAnalysis() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Sentiment Analysis</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="positive" name="Positive" fill="hsl(var(--chart-2))" stackId="stack" />
            <Bar dataKey="neutral" name="Neutral" fill="hsl(var(--chart-3))" stackId="stack" />
            <Bar dataKey="negative" name="Negative" fill="hsl(var(--chart-4))" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}