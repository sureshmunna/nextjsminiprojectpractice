"use client"

import { useState } from "react";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "./ThemeContext";
import { supabase } from "@/lib/supabaseClient";
import { ChevronDown, LogOut, Moon, PanelLeft, Settings, Sun, User } from "lucide-react";
import Avatar from "./Avatar";

export default function Navbar({full_name}:{full_name :string|null}){
    const[open,setOpen]=useState(false);
    const{toggle} =useSidebar();
    const {theme,toggleTheme} = useTheme();

    const user = {
        name : "Suresh",
        avatarUrl :"./globe.svg",
    }
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/login";
    };
    const handleProfile = async () =>{
        window.location.href ="/dashboard/profile";
    }

    return (
        <header className="flex w-full h-14 shadow items-center justify-between 
        px-4 bg-white text-gray-900
        dark:bg-gray-800 dark:text-gray-100">
            <div className="flex items-center gap-3">
                <button onClick={toggle}
                className="p-2 rounded hover:bg-gray-100 hover:dark:text-gary-900">
                    <PanelLeft size={20}/>
                </button>
                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="relative">
                <div className="flex items-center gap-3">
                    <button onClick={toggleTheme}
                    className="p-2 rounded hover:bg-gray-100 dark:bg-gray-800">
                        {theme==="dark"?<Sun size={18}/> : <Moon size={18}/>}
                    </button>
                    <button onClick={()=>setOpen((prev)=>(!prev))}
                        className="flex items-center gap-2">
                        <Avatar src={user.avatarUrl} />
                        <span className="text-sm font-medium">{full_name}</span>
                        <ChevronDown size={16}/>
                    </button>
                </div>
                {open&&(
                    <div 
                    className="absolute right-0 mt-2 w-44 ronded shadow-md z-50
                    bg-white text-gray-900 border
                    dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                        <button className="dropdown-item hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleProfile}>
                            <User size={16}/> Profile
                        </button>
                        <button className="dropdown-item hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Settings size={16}/> Settings
                        </button>
                        <hr />
                        <button className="dropdown-item text-red-600" onClick={handleLogout}>
                            <LogOut size={16}/> Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
    
}