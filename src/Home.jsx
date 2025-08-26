
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { WeatherDashboard } from './weather-dashboard'
import { HourlyForecast } from './hourly-forecast'
import SatelliteMap from './satellite-map'
import WeatherMetrics from './weather-metrics'

function Home() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <WeatherDashboard></WeatherDashboard>
    <HourlyForecast></HourlyForecast>
    <SatelliteMap></SatelliteMap>
    <WeatherMetrics></WeatherMetrics>
    </div>
  )
}

export default Home
