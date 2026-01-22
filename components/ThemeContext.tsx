"use client"


import  { createContext, useContext, useEffect, useState } from "react";

type theme = "light" | "dark";

interface ThemeContextType {
    theme : theme;
    toggleTheme : ()=>void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider ({children}:{children:React.ReactNode}){
    const [theme,setTheme] = useState<theme>("light");

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") as theme | null;
        if(savedTheme){
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark",savedTheme === "dark");
        }
    },[])

    const toggleTheme = ()=>{
        const newTheme = theme ==="dark"?"light":"dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark",newTheme === "dark");
        localStorage.setItem("theme",newTheme);
    }

    return (
        <>
            <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
        </>
    )
}
export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("use Theme must be used inside theme provider");
    }
    return context;
}