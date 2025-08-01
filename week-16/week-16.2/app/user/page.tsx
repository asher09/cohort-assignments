"use client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from '@/app/lib/auth';
import { Appbar } from '@/app/components/Appbar';



export default async function() {

    const session =await  getServerSession(NEXT_AUTH);
    return 
    <div>
        <Appbar />
        User component
        {JSON.stringify(session)}
    </div>
}