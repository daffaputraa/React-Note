import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Login from "./Pages/AtomicDesign/Login";
import Error from "./Pages/404";
import Conditional from "./Pages/conditionalRendering/Conditional";
import Card from "./Pages/nestedComponent/Card";
import Products from "./Pages/nestedComponent/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/atomiclogin" exact element={<Login />} />
        <Route path="/conditional" exact element={<Conditional />} />
        <Route path="/card" exact element={<Products />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
