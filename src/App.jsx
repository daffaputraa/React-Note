import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Login from "./Pages/AtomicDesign/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/atomiclogin" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
