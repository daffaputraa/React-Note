import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import { Local, Conditional } from "./components"


BrowserRouter
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/local" exact element={<Local/>}/>
        <Route path="/conditional" exact element={<Conditional/>}/>
      </Routes>
    </Router>
    </>
  )
}


const  Header = ({nama}) => {
 return <>Halo, {nama}</>
}

export default App
