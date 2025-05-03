"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { type: "Water", cold: 400, hot: 240, room: 200 },
  { type: "Green Tea", cold: 300, hot: 450, room: 100 },
  { type: "Black Tea", cold: 200, hot: 350, room: 150 },
  { type: "Fruit Infused", cold: 500, hot: 100, room: 250 },
  { type: "Herbal Tea", cold: 250, hot: 400, room: 180 },
];

export function DrinkPreferences() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Drink Preferences</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cold" name="Cold" fill="hsl(var(--chart-1))" />
            <Bar dataKey="hot" name="Hot" fill="hsl(var(--chart-2))" />
            <Bar dataKey="room" name="Room Temp" fill="hsl(var(--chart-3))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}