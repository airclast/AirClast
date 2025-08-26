"use client"

import { useState } from "react"

export function HourlyForecast() {
  const [activeTab, setActiveTab] = useState("Hourly")
  const [showMetricsMenu, setShowMetricsMenu] = useState(false)

  const tabs = ["Overview", "Yesterday", "Air Quality", "Cloud Cover", "Precipitation", "Wind"]

  const hourlyData = [
    { time: "12AM", value: 85, condition: "Rainy" },
    { time: "1AM", value: 75, condition: "Sunny" },
    { time: "2AM", value: 95, condition: "Heavy" },
    { time: "3AM", value: 65, condition: "Sunny" },
    { time: "4AM", value: 90, condition: "Rainy" },
    { time: "5AM", value: 55, condition: "Sunny" },
  ]

  const maxValue = Math.max(...hourlyData.map((d) => d.value))

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 relative">
      {/* Header with tabs */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-4">
            <button className="text-white font-medium border-b-2 border-blue-500 pb-2">Hourly</button>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="text-slate-400 hover:text-white transition-colors pb-2"
              >
                {tab}
              </button>
            ))}
            <div className="ml-auto">
              <button
                onClick={() => setShowMetricsMenu(!showMetricsMenu)}
                className="flex space-x-1 p-2 hover:bg-slate-800 rounded transition-colors"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showMetricsMenu && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowMetricsMenu(false)}></div>

          {/* Metrics Menu Sidebar */}
          <div className="fixed top-0 right-0 h-full w-48 bg-slate-800 border-l border-slate-700 z-50 transform transition-transform duration-300">
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                <button className="text-left text-slate-200 hover:text-white py-2 px-3 rounded hover:bg-slate-700 transition-colors">
                  UV
                </button>
                <button className="text-left text-slate-200 hover:text-white py-2 px-3 rounded hover:bg-slate-700 transition-colors">
                  Visibility
                </button>
                <button className="text-left text-slate-200 hover:text-white py-2 px-3 rounded hover:bg-slate-700 transition-colors">
                  Pressure
                </button>
                <button className="text-left text-slate-200 hover:text-white py-2 px-3 rounded hover:bg-slate-700 transition-colors">
                  Feels like
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Chart area */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-slate-800 rounded-lg p-8">
          {/* Y-axis labels */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col space-y-16 text-sm text-slate-400">
              <span>Heavy</span>
              <span>Sunny</span>
              <span>Rainy</span>
            </div>

            {/* Chart container */}
            <div className="flex-1 ml-8">
              <div className="relative h-80">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="border-t border-slate-700 opacity-30"></div>
                  ))}
                </div>

                {/* Bars and line chart */}
                <div className="relative h-full flex items-end justify-between px-4">
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
                    {/* Curved line connecting data points */}
                    <path
                      d={`M ${(1 / 6) * 100}% ${100 - (hourlyData[0].value / maxValue) * 80}% 
                          Q ${(2 / 6) * 100}% ${100 - (hourlyData[1].value / maxValue) * 80}% 
                            ${(2 / 6) * 100}% ${100 - (hourlyData[1].value / maxValue) * 80}%
                          Q ${(3 / 6) * 100}% ${100 - (hourlyData[2].value / maxValue) * 80}% 
                            ${(3 / 6) * 100}% ${100 - (hourlyData[2].value / maxValue) * 80}%
                          Q ${(4 / 6) * 100}% ${100 - (hourlyData[3].value / maxValue) * 80}% 
                            ${(4 / 6) * 100}% ${100 - (hourlyData[3].value / maxValue) * 80}%
                          Q ${(5 / 6) * 100}% ${100 - (hourlyData[4].value / maxValue) * 80}% 
                            ${(5 / 6) * 100}% ${100 - (hourlyData[4].value / maxValue) * 80}%
                          Q ${(6 / 6) * 100}% ${100 - (hourlyData[5].value / maxValue) * 80}% 
                            ${(6 / 6) * 100}% ${100 - (hourlyData[5].value / maxValue) * 80}%`}
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Data points */}
                    {hourlyData.map((data, index) => (
                      <circle
                        key={index}
                        cx={`${((index + 1) / 6) * 100}%`}
                        cy={`${100 - (data.value / maxValue) * 80}%`}
                        r="4"
                        fill="#3b82f6"
                      />
                    ))}
                  </svg>

                  {/* Bars */}
                  {hourlyData.map((data, index) => (
                    <div
                      key={index}
                      className="bg-slate-300 rounded-t-sm relative"
                      style={{
                        height: `${(data.value / maxValue) * 80}%`,
                        width: "40px",
                      }}
                    >
                      {/* Data point circle */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-800"></div>
                    </div>
                  ))}
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between mt-4 px-4">
                  {hourlyData.map((data, index) => (
                    <span key={index} className="text-sm text-slate-400 text-center" style={{ width: "40px" }}>
                      {data.time}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
