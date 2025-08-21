
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { WeatherDashboard } from './weather-dashboard'

function Home() {
  //const [count, setCount] = useState(0)

  return (
    <WeatherDashboard></WeatherDashboard>
  )
}

export default Home
