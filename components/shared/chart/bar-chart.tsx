"use client"

import React from "react"
import ReactECharts from "echarts-for-react"

const BarChart = () => {
  const DEFAULT_OPTION = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Forest", "Steppe", "Desert", "Wetland"],
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      bottom: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar", "stack"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: ["2012", "2013", "2014", "2015", "2016"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Forest",
        type: "bar",
        barGap: 0,
        label: "labelOption",
        color: "#253E3F",
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: "Steppe",
        type: "bar",
        label: "labelOption",
        color: "#7C8B8C",
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: "Desert",
        type: "bar",
        label: "labelOption",
        color: "#F7BA1E",
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190],
      },
    ],
  }

  return (
    <div className="h-full w-full">
      <ReactECharts
        option={DEFAULT_OPTION}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  )
}

export default BarChart
