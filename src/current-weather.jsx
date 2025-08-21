import { Cloud, Sun } from "lucide-react"

export function CurrentWeather() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-start justify-between">
        {/* Left section - Weather info */}
        <div >
          {/* Location badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
            Bangladesh
          </div>

          {/* Date and day */}
          <div>
            <h2 className="text-2xl font-bold text-slate-200">Monday</h2>
            <p className="text-slate-400">24 Dec, 2023</p>
          </div>

          {/* Temperature */}
          <div>
            <div className="text-6xl font-bold text-slate-200">26°C</div>
            <p className="text-slate-400">High: 27° Low: 10°</p>
          </div>
        </div>

        {/* Right section - Weather icon */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {/* Weather icon representation */}
            <div className="w-24 h-24 relative">
              <Sun className="w-12 h-12 text-yellow-400 absolute top-2 right-2" />
              <Cloud className="w-16 h-16 text-gray-400 absolute bottom-0 left-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Weather condition */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Cloudy</h3>
            <p className="text-slate-400">Feels Like 26</p>
          </div>
          <Cloud className="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </div>
  )
}
