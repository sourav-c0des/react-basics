import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Counter from "./components/Counter";
import RefDemo from "./components/RefDemo";
import PerformanceDemo from "./components/performance/PerformanceDemo";
import FormDemo from "./components/forms/FormDemo";
import ContextDemo from "./context/ContextDemo";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";


function App() {
  const [count, setCount] = useState(0);
  const username = "Sourav"; // just a normal JS variable for now
  const appTitle = "React Practice App";

    return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: "16px" }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 12 }}>About</Link>
        <Link to="/user/101">User</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <>
            <Header title="React Practice App" />
            <Counter initial={0} />
            <RefDemo />
            <PerformanceDemo />
            <FormDemo />
            <ContextDemo />
          </>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
  
}

export default App
