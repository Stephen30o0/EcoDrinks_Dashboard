import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SustainabilityMetrics } from "@/components/sustainability/sustainability-metrics"
import { WaterQualityChart } from "@/components/sustainability/water-quality-chart"

export default function Sustainability() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Sustainability Metrics</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Sustainability Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <SustainabilityMetrics />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Water Quality in Kigali</CardTitle>
          </CardHeader>
          <CardContent>
            <WaterQualityChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
