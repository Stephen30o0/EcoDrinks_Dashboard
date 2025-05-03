import { Suspense } from "react";
import { Overview } from "@/components/overview";
import { AIRecommendations } from "@/components/ai-recommendations";
import { RecentActivities } from "@/components/recent-activities";
import { MetricCard } from "@/components/metrics/metric-card";

export default async function Home() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<div className="h-[140px] animate-pulse bg-muted rounded-lg" />}>
          <MetricCard
            title="Total Dispensers"
            value={127} 
            description="Active across Kigali"
          />
        </Suspense>
        <Suspense fallback={<div className="h-[140px] animate-pulse bg-muted rounded-lg" />}>
          <MetricCard
            title="Active Users"
            value={2350}  
            description="+12% from last month"
          />
        </Suspense>
        <Suspense fallback={<div className="h-[140px] animate-pulse bg-muted rounded-lg" />}>
          <MetricCard
            title="Plastic Saved (kg)"
            value={1245}  
            description="Environmental impact"
          />
        </Suspense>
        <Suspense fallback={<div className="h-[140px] animate-pulse bg-muted rounded-lg" />}>
          <MetricCard
            title="Partner Locations"
            value={48}   
            description="Local businesses"
          />
        </Suspense>
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        <div className="rounded-lg lg:col-span-4">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <Overview />
          </Suspense>
        </div>
        <div className="rounded-lg lg:col-span-3">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <RecentActivities />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div className="h-[200px] animate-pulse bg-muted rounded-lg" />}>
        <AIRecommendations />
      </Suspense>
    </div>
  );
}