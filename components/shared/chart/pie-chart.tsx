"use client"

import React from "react"
import ReactECharts from "echarts-for-react"

import { cn } from "@/lib/utils"

type BarChartProps = {
  type: "pie" | "donut"
  size?: "small" | "medium" | "large"
}

const PieChart = ({ type = "pie", size = "large" }: BarChartProps) => {
  const DEFAULT_OPTION = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",

        radius:
          type === "pie"
            ? size === "small"
              ? "50%"
              : size === "medium"
              ? "60%"
              : "80%"
            : ["50%", "70%"],
        color: ["#7C8B8C", "#253E3F"],
        data: [
          {
            value: 1048,
            name: "Offset",
            color: "#7C8B8C",
          },
          {
            value: 735,
            name: "Total Emissions",
            color: "#253E3F",
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }
  return (
    <div className="h-full w-full">
      <ReactECharts
        option={DEFAULT_OPTION}
        style={{
          height: "calc(100% - 3.5rem)",
          width: "100%",
        }}
      />
      {DEFAULT_OPTION.series[0].data.map((item, index) => (
        <div
          className={cn("flex justify-between", index === 0 ? "" : "mt-2")}
          key={index}
        >
          <div className="flex items-center">
            <div
              className={cn("mr-2 h-4 w-4 rounded-full", `bg-[${item.color}]`)}
            />
            <p className="text-xs font-bold">{item.name}</p>
          </div>
          <p className="text-xs font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export default PieChart
