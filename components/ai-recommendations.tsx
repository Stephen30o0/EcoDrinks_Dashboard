"use client";

import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Droplet } from "lucide-react";

export function AIRecommendations() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-5 w-5" />
        <h3 className="text-xl font-semibold">AI Insights & Recommendations</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Usage Optimization</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Based on current usage patterns, consider installing additional dispensers in the Kimironko area. 
            Peak usage times suggest high demand during morning hours (6-9 AM).
          </p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <Droplet className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Sustainability Impact</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Current reduction in plastic waste is trending positively. 
            Implementing a rewards program could further increase user adoption by 25%.
          </p>
        </div>
      </div>
    </Card>
  );
}