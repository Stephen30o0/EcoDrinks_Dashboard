// LeafletMap.tsx
"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define the dispenser type
type Dispenser = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: string;
};

// Example data
const dispensers: Dispenser[] = [
  { id: 1, name: "Kigali Heights", lat: -1.9537, lng: 30.0937, status: "Active" },
  { id: 2, name: "Kigali Convention Centre", lat: -1.9557, lng: 30.0945, status: "Active" },
  { id: 3, name: "Kimironko Market", lat: -1.9433, lng: 30.1147, status: "Active" },
  { id: 4, name: "Nyabugogo Terminal", lat: -1.9444, lng: 30.0574, status: "Active" },
  { id: 5, name: "Remera Commercial Center", lat: -1.9577, lng: 30.1137, status: "Active" },
];

// This is the important part: tell dynamic() about the props
const Map = dynamic<{ dispensers: Dispenser[] }>(
  () => import("./RealMap"),
  { ssr: false }
);

export default function LeafletMap() {
  useEffect(() => {
    // Fix Leaflet icon issue in Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  return <Map dispensers={dispensers} />;
}
