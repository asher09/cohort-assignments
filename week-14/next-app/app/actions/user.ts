"use server"

import client from "@/db";
import {  NextResponse } from "next/server";

export async function signup(email: string, password: string) {
    const user = await client.user.create({
        data: {
            email: email,
            password: password
        }
    })
    return true;
}