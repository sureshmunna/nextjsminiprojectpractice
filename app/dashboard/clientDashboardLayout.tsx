import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";
import { ThemeProvider } from "@/components/ThemeContext";
import React, { ReactNode } from "react";

type Profile ={
    id:string;
    email:string|null;
    full_name:string|null;
    role : string;
    created_at :string;
}

export default function ClientDashboardLayout({children,data}:{children:ReactNode;data:Profile}){
    return(
        <ThemeProvider>
            <SidebarProvider>
                <div className="flex h-screen bg-gray-100 dark:bg-gary-900">
                    <Sidebar role={data.role}/>
                    <div className="flex flex-col flex-1">
                        <div>
                            <Navbar full_name={data.full_name}/>
                        </div>
                        <main className="p-6 flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gary-100"> 
                            {children}
                        </main>
                    </div>
                    
                </div>
            </SidebarProvider>
        </ThemeProvider>
    )
}