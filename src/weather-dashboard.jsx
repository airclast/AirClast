import { NavigationHeader } from "./navigation-header"
import { CurrentWeather } from "./current-weather"
import { TodayHighlights } from "./today-highlights"
import { WeeklyForecast } from "./weekly-forecast"
import { OtherCities } from "./other-cities"

export function WeatherDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <NavigationHeader />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Current weather and forecast */}
          <div className="lg:col-span-2 space-y-6">
            <CurrentWeather />
            <WeeklyForecast />
          </div>

          {/* Right column - Highlights and other cities */}
          <div className="space-y-12">
            <TodayHighlights />
            <OtherCities />
          </div>
        </div>
      </main>
    </div>
  )
}
