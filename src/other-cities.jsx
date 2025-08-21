import { Cloud, Sun } from "lucide-react"

export function OtherCities() {
  const cities = [
    { name: "Sylhet", temp: "14°", status: "NEXT UP", icon: "cloudy" },
    { name: "Cumilla", temp: "27°", status: "MOST HOT", icon: "sunny" },
    { name: "Chittagong", temp: "16°", status: "NEXT UP", icon: "cloudy" },
    { name: "Dhaka", temp: "26°", status: "NEXT HOT", icon: "cloudy" },
  ]

  const WeatherIcon = ({ type }) => {
    switch (type) {
      case "sunny":
        return <Sun className="w-8 h-8 text-yellow-400" />
      case "cloudy":
        return <Cloud className="w-8 h-8 text-gray-400" />
      default:
        return <Cloud className="w-8 h-8 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "MOST HOT":
        return "text-red-400"
      case "NEXT HOT":
        return "text-orange-400"
      case "NEXT UP":
        return "text-blue-400"
      default:
        return "text-slate-400"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-200">Other Cities</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Show All</button>
      </div>

      {/* Cities grid */}
      <div className="grid grid-cols-2 gap-4">
        {cities.map((city, index) => (
          <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <div className="space-y-3">
              {/* Temperature and icon */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-slate-200">{city.temp}</span>
                <WeatherIcon type={city.icon} />
              </div>

              {/* City name and status */}
              <div className="space-y-1">
                <h3 className="font-medium text-slate-200">{city.name}</h3>
                <p className={`text-xs font-medium ${getStatusColor(city.status)}`}>{city.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
