import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";
import { ThemeProvider } from "@/components/ThemeContext";
import React, { ReactNode } from "react";

export default function ClientDashboardLayout({children,role}:{children:ReactNode;role:string|null}){
    return(
        <ThemeProvider>
            <SidebarProvider>
                <div className="flex h-screen bg-gray-100 dark:bg-gary-900">
                    <Sidebar role={role}/>
                    <div className="flex flex-col flex-1">
                        <main className="p-6 flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gary-100"> 
                            {children}
                        </main>
                    </div>
                    
                </div>
            </SidebarProvider>
        </ThemeProvider>
    )
}