"use client"
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

export const Signin =( ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

     async function handler() {
        await axios.post('http://localhost:3000/api/user', {
            email,
            password
        })
        router.push('/')

    }

    return (
        <div>
            <div className="bg-gray-50 dark:bg-red-100">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                   
                    <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-2xl dark:bg-stone-900 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                                <div>
                                    <LabelledInput label="email" placeholder="John@email.com" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div>
                                    <LabelledInput label="password" placeholder="12345678" onChange={(e) => {
                                       setPassword(e.target.value)
                                    }} />
                                </div>
                                <button onClick={handler} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export function LabelledInput({label, placeholder, type="text", onChange}: LabelledInputType) {
    return <div>

        <div>
            <label className="block mb-1 text-sm text-gray-900 font-semibold">{label}</label>
            <input type={type} onChange={onChange} className="mb-3 border dark:bg-gray-100 border-gray-300 text-slate-900 text-sm rounded-lg focus:border-slate-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}