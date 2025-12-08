import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Counter from "./components/Counter";
import RefDemo from "./components/RefDemo";



function App() {
  const [count, setCount] = useState(0);
  const username = "Sourav"; // just a normal JS variable for now
  const appTitle = "React Practice App";

   return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      {/* Passing data down from parent to child as props */}
      <Header title={appTitle} username={username} />

      {/* Parent gives initial value, child manages its own state */}
      <Counter initial={0} />
      <RefDemo />
    </div>
  );
  
}

export default App
