// CONCEPT: Custom Hook
// A reusable hook that syncs state with localStorage.

import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Load initial value from localStorage
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });

  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
