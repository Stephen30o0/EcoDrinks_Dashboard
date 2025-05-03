import { Suspense } from "react";
import { AdPerformance } from "@/components/advertising/ad-performance";
import { TopEngagedAds } from "@/components/advertising/top-engaged-ads";
import { QRMetrics } from "@/components/advertising/qr-metrics";
import { AIRecommendations } from "@/components/advertising/ai-recommendations";

export default function Advertising() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Advertising</h1>
      </div>

      <div className="grid gap-6">
        <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
          <AdPerformance />
        </Suspense>

        <div className="grid gap-6 lg:grid-cols-2">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <TopEngagedAds />
          </Suspense>
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <QRMetrics />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-[200px] animate-pulse bg-muted rounded-lg" />}>
          <AIRecommendations />
        </Suspense>
      </div>
    </div>
  );
}