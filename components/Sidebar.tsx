"use client"

import { Home, Menu, User } from "lucide-react";
import { useSidebar } from "./SidebarContext"
import React from "react";
import Link from "next/link";

export default function Sidebar({role}:{role:string|null}){
    const {collapsed} = useSidebar();

    return(
        <aside className={`h-full transition-all duration-300
            ${collapsed ?"w-16":"w-64"}
            bg-gray-900 dark:bg-blact text-white
        `}>
            <div className="p-4">
                <div className="flex items-center gap-3 mb-6">
                    <Menu/>
                    {!collapsed && <h2 className="text-xl font-bold">Dashboard</h2>}
                </div>
                <nav className="flex flex-col gap-2">
                    <SidebarItem href="/dashboard" icon={<Home/>} label="Home" collapsed={collapsed}/>
                    <SidebarItem href="" icon={<User/>} label="Users" collapsed={collapsed}/>                   
                </nav>
            </div>
        </aside>
    )
}

function SidebarItem({
    href,
    icon,
    label,
    collapsed,
}:{
    href:string;
    icon:React.ReactNode;
    label:string;
    collapsed : boolean;
}){
    return(
        <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800">
        {icon}
        {!collapsed && <span>{label}</span>}
    </Link>
    )
    
}