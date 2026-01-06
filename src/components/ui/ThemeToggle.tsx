import { Sun, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button className="p-2 border rounded-lg dark:border-gray-600" onClick={toggleTheme}>
      {dark ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
