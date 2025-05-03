// RealMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card } from "@/components/ui/card";

type Dispenser = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: string;
};

export default function RealMap({ dispensers }: { dispensers: Dispenser[] }) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Dispenser Locations</h2>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={[-1.9537, 30.0937]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dispensers.map((dispenser) => (
            <Marker key={dispenser.id} position={[dispenser.lat, dispenser.lng]}>
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{dispenser.name}</h3>
                  <p className="text-sm text-muted-foreground">Status: {dispenser.status}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
}
