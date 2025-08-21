import { Cloud, Sun, CloudRain, Sunrise, Sunset, Clock } from "lucide-react"

export function WeeklyForecast() {
  const hourlyForecast = [
    { time: "1PM", temp: "20°", icon: "sunny" },
    { time: "2PM", temp: "21°", icon: "sunny" },
    { time: "3PM", temp: "20°", icon: "sunny" },
    { time: "4PM", temp: "19°", icon: "cloudy" },
    { time: "5PM", temp: "18°", icon: "cloudy" },
    { time: "6PM", temp: "18°", icon: "cloudy" },
    { time: "7PM", temp: "15°", icon: "cloudy" },
  ]

  const WeatherIcon = ({ type }) => {
    switch (type) {
      case "sunny":
        return <Sun className="w-6 h-6 text-yellow-400" />
      case "cloudy":
        return <Cloud className="w-6 h-6 text-gray-400" />
      case "rainy":
        return <CloudRain className="w-6 h-6 text-blue-400" />
      default:
        return <Sun className="w-6 h-6 text-yellow-400" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Today / Week Forecast */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-200">Today / Week</h3>

          {/* Hourly forecast */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {hourlyForecast.map((hour, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 min-w-[60px]">
                <span className="text-sm text-slate-400">{hour.time}</span>
                <WeatherIcon type={hour.icon} />
                <span className="text-sm font-medium text-slate-200">{hour.temp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tomorrow and Sun Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tomorrow */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="space-y-3">
            <h4 className="text-sm text-slate-400">Tomorrow</h4>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-200">14°</span>
              <CloudRain className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xs text-slate-400">Rainy day</p>
          </div>
        </div>

        {/* Sun Info */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sunrise className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-slate-400">Sunrise</span>
              </div>
              <span className="text-sm font-medium text-slate-200">6:45 AM</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sunset className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-slate-400">Sunset</span>
              </div>
              <span className="text-sm font-medium text-slate-200">5:30 PM</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">Length of day</span>
              </div>
              <span className="text-sm font-medium text-slate-200">10h 23m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
