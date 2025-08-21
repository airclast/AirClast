
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='max-w-6xl mx-auto mt-4'>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
