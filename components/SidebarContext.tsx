"use client"
import React, { createContext, useContext, useState } from "react";

interface sidebarContextType{
    collapsed : boolean;
    toggle : () => void;
}

const SidebarContext = createContext<sidebarContextType | undefined>(undefined);

export function SidebarProvider({children}:{children:React.ReactNode}){
    const[collapsed,setCollapsed] = useState(false);
    const toggle = ()=> setCollapsed((prev)=>(!prev));

    return(
        <>
            <SidebarContext.Provider value={{collapsed,toggle}}>{children}</SidebarContext.Provider>
        </>
    )
}
export function useSidebar(){
    const context = useContext(SidebarContext);
    if(!context){
        throw new Error("use Sidebar must be inside the provider")
    }
    return context; 
}