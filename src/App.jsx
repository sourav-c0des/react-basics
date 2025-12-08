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
import "./App.css";
import { useAppContext } from "./context/AppContext";


function App() {
  const [count, setCount] = useState(0);
  const username = "Sourav"; // just a normal JS variable for now
  const appTitle = "React Practice App";
  const { theme } = useAppContext();

    return (
    <div className={`app app--${theme}`}>
      {/* Top nav */}
      <nav className="nav">
        <div className="nav-left">React Practice App</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/user/101">User 101</Link>
        </div>
      </nav>

      {/* Page container */}
      <main className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="React Practice App" />

                <section className="card">
                  <Counter initial={0} />
                </section>

                <section className="card">
                  <RefDemo />
                </section>

                <section className="card">
                  <PerformanceDemo />
                </section>

                <section className="card">
                  <FormDemo />
                </section>

                <section className="card">
                  <ContextDemo />
                </section>
              </>
            }
          />

          <Route
            path="/about"
            element={
              <section className="card">
                <Home />
                <About />
              </section>
            }
          />

          <Route
            path="/user/:id"
            element={
              <section className="card">
                <User />
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );  
}

export default App
