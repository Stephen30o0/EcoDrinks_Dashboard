"use client";

import { Card } from "@/components/ui/card";
import { Brain, MapPin, TrendingUp } from "lucide-react";

export function AIRecommendations() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Regional Insights</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Location Strategy</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Gasabo district shows highest user engagement. Consider increasing dispenser density
            in high-traffic areas like Remera and Kimironko to meet growing demand.
          </p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Partnership Growth</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Coffee shops show highest partnership success. Target expansion in office buildings
            and educational institutions to diversify location types.
          </p>
        </div>
      </div>
    </Card>
  );
}