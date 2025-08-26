export default function WeatherMetrics() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Temperature Card */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-4">Temperature</h3>
            <div className="flex items-end space-x-1 mb-4">
              {[12, 15, 18, 22, 25, 28, 30, 28, 25, 22, 18, 15].map((height, index) => (
                <div
                  key={index}
                  className="bg-slate-400 rounded-sm"
                  style={{ height: `${height * 2}px`, width: "12px" }}
                />
              ))}
            </div>
            <p className="text-slate-400 text-sm">Steady</p>
            <p className="text-xs text-slate-500 mt-1">
              Stable air pressure during the day. Temperature remains consistent throughout the day.
            </p>
          </div>

          {/* Humidity Card */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-4">Humidity</h3>
            <div className="flex items-end space-x-1 mb-4">
              {[20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25].map((height, index) => (
                <div key={index} className="bg-blue-400 rounded-sm" style={{ height: `${height}px`, width: "12px" }} />
              ))}
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-bold">91%</span>
              <span className="text-slate-400">25°</span>
            </div>
            <p className="text-slate-400 text-sm">Extremely humid ⚠️</p>
            <p className="text-xs text-slate-500 mt-1">Humidity at 91%</p>
          </div>

          {/* Pressure Card */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-4">Pressure</h3>
            <div className="mb-4">
              <div className="relative bg-slate-700 rounded-full h-2">
                <div className="absolute top-0 left-0 bg-blue-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                <div
                  className="absolute top-0 bg-white w-4 h-4 rounded-full -mt-1"
                  style={{ left: "65%", transform: "translateX(-50%)" }}
                ></div>
              </div>
            </div>
            <div className="text-3xl font-bold mb-2">
              1005 <span className="text-sm text-slate-400">mb</span>
            </div>
            <p className="text-xs text-slate-500 mb-1">2:18 AM (Now)</p>
            <p className="text-slate-400 text-sm">Falling slowly ⚠️</p>
            <p className="text-xs text-slate-500 mt-1">
              Falling slowly in the last 3 hours. Expected to fall slowly in the next 3 hours.
            </p>
          </div>

          {/* Feels Like Card */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-4">Feels Like</h3>
            <div className="mb-4">
              <svg className="w-full h-16" viewBox="0 0 200 60">
                <path d="M 10 40 Q 50 20 100 35 Q 150 50 190 25" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="10" cy="40" r="3" fill="white" />
                <circle cx="100" cy="35" r="3" fill="white" />
                <circle cx="190" cy="25" r="3" fill="white" />
              </svg>
            </div>
            <p className="text-slate-400 text-sm mb-1">Decreased human humidity</p>
            <p className="text-slate-400 text-sm mb-1">Feels like: 26°</p>
            <p className="text-white font-semibold">Slightly Warm</p>
            <p className="text-xs text-slate-500 mt-1">
              Humidity may not feel hot but feels comfortable throughout the day.
            </p>
          </div>

          {/* AQI Card */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-4">AQI</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-slate-600 flex items-center justify-center">
                  <span className="text-3xl font-bold">67</span>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-slate-400 text-sm text-center">Moderate 🟡</p>
            <p className="text-xs text-slate-500 mt-1 text-center">Deteriorating air quality with primary pollutant.</p>
          </div>

          {/* UV Index Card */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-slate-400 text-sm mb-4">UV Index</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <svg className="w-20 h-20" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="12" fill="#FCD34D" />
                  <g stroke="#FCD34D" strokeWidth="2">
                    <line x1="40" y1="8" x2="40" y2="16" />
                    <line x1="40" y1="64" x2="40" y2="72" />
                    <line x1="8" y1="40" x2="16" y2="40" />
                    <line x1="64" y1="40" x2="72" y2="40" />
                    <line x1="17.6" y1="17.6" x2="23.2" y2="23.2" />
                    <line x1="56.8" y1="56.8" x2="62.4" y2="62.4" />
                    <line x1="17.6" y1="62.4" x2="23.2" y2="56.8" />
                    <line x1="56.8" y1="23.2" x2="62.4" y2="17.6" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">
                4 <span className="text-sm text-slate-400">UV</span>
              </p>
              <p className="text-slate-400 text-sm">Moderate UV</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white font-semibold">Weather Wise</span>
            </div>

            <nav className="flex space-x-8">
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Home
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                About
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Contact Us
              </a>
            </nav>

            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">yt</span>
              </div>
            </div>

            <p className="text-slate-500 text-xs">Copyright Weather Wise Studio</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
