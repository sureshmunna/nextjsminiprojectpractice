"use client"

import { useState } from "react"
import { useSidebar } from "./SidebarContext";

export default function Navbar(){
    const[open,setOpen]=useState(false);
    const{toggle} =useSidebar();
    
}