import { Suspense } from "react";
import { DispenserMap } from "@/components/regional-metrics/dispenser-map";
import { RegionalPerformance } from "@/components/regional-metrics/regional-performance";
import { PartnershipMetrics } from "@/components/regional-metrics/partnership-metrics";
import { AIRecommendations } from "@/components/regional-metrics/ai-recommendations";

export default function RegionalMetrics() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Regional Metrics</h1>
      </div>

      <div className="grid gap-6">
        <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
          <DispenserMap />
        </Suspense>

        <div className="grid gap-6 lg:grid-cols-2">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <RegionalPerformance />
          </Suspense>
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <PartnershipMetrics />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-[200px] animate-pulse bg-muted rounded-lg" />}>
          <AIRecommendations />
        </Suspense>
      </div>
    </div>
  );
}