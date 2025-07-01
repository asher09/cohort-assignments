import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from './../config';


export const Auth =({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState({
        name: "",
        username: "",
        password: ""
    })
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("jwt", jwt);
            navigate("/blog")
        } catch(e) {
            alert("Something went wrong, please try again later.");
        }

    }

    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center" >
                <div>
                    <div className="px-10" >
                        <div className="text-3xl font-extrabold" >
                            Create an account
                        </div>
                        <div className="text-slate-400" >
                            {type === "signin" ? "Dont have an account?" : "Already have an account?"}
                            <Link className="underline pl-1" to={type === "signin" ? "/signup" : "/signin"} >
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>

                        </div>
                    </div>
                    <div className="mt-8" >
                        
                        {type === "signup" ?  <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} /> : null}
                        <LabelledInput label="Username" placeholder="John@email.com" onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} />
                        <LabelledInput label="Password" type={"password"} placeholder="Password" onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                        <button type="button" onClick={sendRequest} className="w-full rounded mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> {type=== "signup"? "Sign Up": "Sign In" }</button>

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

export function LabelledInput({label, placeholder, type, onChange}: LabelledInputType) {
    return <div>

        <div>
            <label className="block mb-1 text-sm text-gray-900 font-semibold">{label}</label>
            <input type={type || "text"} onChange={onChange} className="mb-3 border dark:bg-gray-100 border-gray-300 text-slate-900 text-sm rounded-lg focus:border-slate-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}