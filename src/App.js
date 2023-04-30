import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import "./App.css"
import Redirect from "./Components/Redirect";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Redirect />} />
        <Route path="/pages/:page" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
