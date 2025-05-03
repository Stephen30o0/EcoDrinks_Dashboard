"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", redemptionRate: 45, totalCoupons: 1000 },
  { month: "Feb", redemptionRate: 52, totalCoupons: 1200 },
  { month: "Mar", redemptionRate: 48, totalCoupons: 1100 },
  { month: "Apr", redemptionRate: 55, totalCoupons: 1300 },
  { month: "May", redemptionRate: 58, totalCoupons: 1400 },
  { month: "Jun", redemptionRate: 62, totalCoupons: 1500 },
];

export function CouponMetrics() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Coupon Performance</h2>
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
              dataKey="redemptionRate"
              name="Redemption Rate (%)"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="totalCoupons"
              name="Total Coupons"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}