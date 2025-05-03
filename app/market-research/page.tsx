import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { PollMetrics } from "@/components/market-research/poll-metrics";
import { DemographicInsights } from "@/components/market-research/demographic-insights";
import { SentimentAnalysis } from "@/components/market-research/sentiment-analysis";

export default async function MarketResearch() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Market Research</h1>
      </div>

      <div className="grid gap-6">
        <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
          <PollMetrics />
        </Suspense>

        <div className="grid gap-6 lg:grid-cols-2">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <DemographicInsights />
          </Suspense>
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <SentimentAnalysis />
          </Suspense>
        </div>
      </div>
    </div>
  );
}