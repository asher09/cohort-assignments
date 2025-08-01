
"use client";
import { signIn } from 'next-auth/react';
import {useRouter} from 'next/navigation'


export default function () {
    const router = useRouter();

    return (
        <div>
            <div>
                <button onClick={async () => {
                    await signIn("google");
                }} >Login with Google</button>
            </div>
            <br />
            <div>
                <button onClick={async () => {
                    await signIn("Github");
                }} >Login with Github</button>
            </div>
            <br />
            <div>
                <button onClick={async () => {
                    const res = await signIn("credentials", {
                        username: "",
                        password: "",
                        redirect: false,
                    });
                    console.log(res);
                    router.push("/")
                }} >Login with Email</button>
            </div>
        </div>
    );
}