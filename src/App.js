import React from "react";
import Navbar from "./Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
 
export default App;