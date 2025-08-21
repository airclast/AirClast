import { Cloud, Sun, Wind, Droplets } from "lucide-react"

export function TodayHighlights() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-200">Today Highlight</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Chance of Rain */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Chance of Rain</span>
              <Droplets className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-slate-200">24%</div>
          </div>
        </div>

        {/* UV Index */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">UV Index</span>
              <Sun className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-200">3</div>
              <div className="text-xs text-slate-400">Moderate</div>
            </div>
          </div>
        </div>

        {/* Wind Status */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Wind Status</span>
              <Wind className="w-4 h-4 text-blue-400" />
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-200">12</div>
              <div className="text-xs text-slate-400">km/h</div>
            </div>
          </div>
        </div>

        {/* Humidity */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Humidity</span>
              <Cloud className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-200">78%</div>
              <div className="text-xs text-slate-400">Normal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
