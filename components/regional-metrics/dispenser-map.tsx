"use client";
import dynamic from "next/dynamic";

type Dispenser = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: string;
};

const dispensers: Dispenser[] = [
  // ...your data...
];

// Tell dynamic() about the props
const RealMap = dynamic<{ dispensers: Dispenser[] }>(
  () => import("./RealMap"),
  { ssr: false }
);

export function DispenserMap() {
  return <RealMap dispensers={dispensers} />;
}
