export default function SatelliteMap() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700">
        <h1 className="text-xl font-semibold">Real Time Satellite</h1>
      </div>

      {/* Map Container */}
      <div className="relative h-screen">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lBWtFd8sVXF3ej0pKnZyXZ1g0eexAo.png"
          alt="Real-time satellite view of Earth showing weather patterns"
          className="w-full h-full object-cover"
        />

        {/* Map Controls */}
        <div className="absolute top-4 right-4 bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 text-sm bg-blue-600 text-white rounded">Satellite</button>
            <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded">
              Radar
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded">
              Temperature
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded">
              Precipitation
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded">
              Wind
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-slate-800 rounded-lg p-4 border border-slate-700">
          <h3 className="text-sm font-semibold mb-2">Weather Patterns</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Cloud Cover</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Storm Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Clear Skies</span>
            </div>
          </div>
        </div>

        {/* Time Controls */}
        <div className="absolute bottom-4 right-4 bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-slate-700 text-white rounded text-sm">⏮</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">⏸</button>
            <button className="px-3 py-1 bg-slate-700 text-white rounded text-sm">⏭</button>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center">Live View</p>
        </div>
      </div>
    </div>
  )
}
