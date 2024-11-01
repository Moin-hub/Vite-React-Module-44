
import './App.css'
import BarCharts from './assets/components/BarChart/BarChart'
import LineChart from './assets/components/LineChart/LineChart'
// import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import NavBar from './assets/components/NavBar/NavBar'
import Phones from './assets/components/Phones/Phones'
import PriceOptions from './assets/components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-700 text-white py-4 rounded-2xl'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarCharts></BarCharts>
      <Phones></Phones>
      
    </>
  )
}

export default App
