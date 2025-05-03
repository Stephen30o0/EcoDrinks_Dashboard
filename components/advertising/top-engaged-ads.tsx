"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { campaign: "Eco-Friendly Living", engagement: 85, location: "Kigali Heights" },
  { campaign: "Zero Waste Challenge", engagement: 78, location: "Nyamirambo" },
  { campaign: "Sustainable Future", engagement: 72, location: "Kimironko" },
  { campaign: "Green Initiative", engagement: 68, location: "Remera" },
  { campaign: "Clean Kigali", engagement: 65, location: "Kacyiru" },
];

export function TopEngagedAds() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Top Engaged Campaigns</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="campaign" type="category" width={150} />
            <Tooltip />
            <Bar
              dataKey="engagement"
              name="Engagement Rate (%)"
              fill="hsl(var(--chart-2))"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}