import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./index.css"
import CreateData from "./pages/CreateData"
import AllData from "./pages/AllData"
import EditData from "./pages/EditData"

function App() {

  return (
    <div className=" h-[100vh] mx-auto">
      <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createData" element={<CreateData/>}/>
          <Route path="/getAllData" element={<AllData/>}/>
          <Route path="/editData/:id" element={<EditData/>}/>
       </Routes>
    </div>
  )
}

export default App
