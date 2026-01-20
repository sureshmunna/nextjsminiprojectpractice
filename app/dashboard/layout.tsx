import { getCurrectUserRole } from "@/lib/getCurrentUserRole";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import ClientDashboardLayout from "./clientDashboardLayout";

export default async function DashboardLayout({children}:{children:ReactNode}){
    const user = await getUser()
    // if(!user){
    //     redirect("/login");
    // }
    const role = await getCurrectUserRole();
    return <ClientDashboardLayout role={role}>{children}</ClientDashboardLayout>

}