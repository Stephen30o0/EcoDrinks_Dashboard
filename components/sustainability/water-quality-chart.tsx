"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'pH', value: 7.2, ideal: 7.0 },
  { name: 'TDS', value: 150, ideal: 200 },
  { name: 'Chlorine', value: 0.5, ideal: 1.0 },
  { name: 'Hardness', value: 120, ideal: 100 },
  { name: 'Turbidity', value: 1, ideal: 5 },
]

export function WaterQualityChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" name="Current" />
        <Bar dataKey="ideal" fill="#82ca9d" name="Ideal" />
      </BarChart>
    </ResponsiveContainer>
  )
}

