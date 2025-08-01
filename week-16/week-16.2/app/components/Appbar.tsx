"use client";
import { signIn, signOut } from 'next-auth/react';

export const Appbar = () => {

    return <div>
        <button onClick={() => {
            signIn();
        }} >SIGNIN</button>
        <button onClick={() => {
            signOut();
        }} >SIGNIN</button>

    </div>
}