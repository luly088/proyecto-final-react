import Footer from "./components/footer/footer";
import "./App.css";
import React from "react";
import NavigatorBar from "./components/NavigatorBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './tailwind.css'; 
function App() {
  return (
    <div className="App">
      <div className="col">
        <div className="row">
          <NavigatorBar />
        </div>
        <div className="row">
          <HomePage></HomePage>
        </div>
        <div className="row">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
