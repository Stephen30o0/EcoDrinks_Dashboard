"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
  { name: "Plastic Bottles Saved", value: 45672, target: 50000, unit: "bottles" },
  { name: "CO2 Emissions Reduced", value: 2283, target: 3000, unit: "kg" },
  { name: "Water Saved", value: 91344, target: 100000, unit: "liters" },
  { name: "Energy Saved", value: 13701, target: 15000, unit: "kWh" },
]

export function SustainabilityMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {metrics.map((metric) => (
        <Card key={metric.name}>
          <CardHeader>
            <CardTitle>{metric.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">out of {metric.target.toLocaleString()} {metric.unit}</p>
            <Progress
              value={(metric.value / metric.target) * 100}
              className="mt-2"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

