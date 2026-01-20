import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function DashboardLayout(){
    const user = await getUser()
    if(!user){
        redirect("/login");
    }
    
}