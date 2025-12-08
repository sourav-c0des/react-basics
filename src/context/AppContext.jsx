// src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context object
const AppContext = createContext(null);

// 2️⃣ Provider component – wraps the app and holds global state
export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("Sourav");

  const value = {
    theme,
    setTheme,
    userName,
    setUserName,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// 3️⃣ Custom hook for consuming context
export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return ctx;
}
