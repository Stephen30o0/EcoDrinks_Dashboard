"use client";

import { Card } from "@/components/ui/card";
import { Brain, Target, Users } from "lucide-react";

export function AIRecommendations() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Consumer Behavior Insights</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Targeting Opportunities</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Data suggests introducing seasonal flavors could increase engagement by 30%. 
            Consider launching limited-time offers during peak hours (10 AM - 2 PM).
          </p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg border">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-primary" />
            <h4 className="font-medium">Retention Strategy</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Regular users show strong preference for cold drinks. 
            Implement a loyalty program focusing on personalized temperature preferences.
          </p>
        </div>
      </div>
    </Card>
  );
}