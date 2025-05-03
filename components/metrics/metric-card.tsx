'use client';

import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";


interface MetricCardProps {
  title: string;
  value: number;

  description?: string;
}

export function MetricCard({ title, value, description }: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-primary/10 rounded-lg">
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{formatNumber(value)}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
}