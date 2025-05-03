"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Kigali dispenser locations (example data)
const dispensers = [
  { id: 1, name: "Kigali Heights", lat: -1.9537, lng: 30.0937, status: "Active" },
  { id: 2, name: "Kigali Convention Centre", lat: -1.9557, lng: 30.0945, status: "Active" },
  { id: 3, name: "Kimironko Market", lat: -1.9433, lng: 30.1147, status: "Active" },
  { id: 4, name: "Nyabugogo Terminal", lat: -1.9444, lng: 30.0574, status: "Active" },
  { id: 5, name: "Remera Commercial Center", lat: -1.9577, lng: 30.1137, status: "Active" },
];

export function DispenserMap() {
  useEffect(() => {
    // Fix Leaflet icon issue in Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

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