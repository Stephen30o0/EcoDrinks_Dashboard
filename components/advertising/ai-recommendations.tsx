"use client";

import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp } from "lucide-react";

export function AIRecommendations() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Advertising Insights</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Campaign Optimization</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Eco-Friendly Living campaign shows highest engagement in urban areas.
            Consider expanding similar messaging to other districts with matching demographics.
          </p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h4 className="font-medium">QR Code Strategy</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Product information QR codes drive highest engagement.
            Recommend integrating sustainability facts with product info to boost awareness.
          </p>
        </div>
      </div>
    </Card>
  );
}