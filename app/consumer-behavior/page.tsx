import { Suspense } from "react";
import { DrinkPreferences } from "@/components/consumer-behavior/drink-preferences";
import { CouponMetrics } from "@/components/consumer-behavior/coupon-metrics";
import { CustomerRetention } from "@/components/consumer-behavior/customer-retention";
import { AIRecommendations } from "@/components/consumer-behavior/ai-recommendations";

export default function ConsumerBehavior() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Consumer Behavior</h1>
      </div>

      <div className="grid gap-6">
        <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
          <DrinkPreferences />
        </Suspense>

        <div className="grid gap-6 lg:grid-cols-2">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <CouponMetrics />
          </Suspense>
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <CustomerRetention />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-[200px] animate-pulse bg-muted rounded-lg" />}>
          <AIRecommendations />
        </Suspense>
      </div>
    </div>
  );
}