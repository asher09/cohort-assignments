
import { Heading } from './sub-components/Heading.jsx';
import { SubHeading } from './sub-components/SubHeading.jsx';
import { InputBox } from './sub-components/InputBox.jsx';
import { BottomWarning } from './sub-components/BottomWarning.jsx';
import {Button} from './sub-components/Button.jsx';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './../../../../../week-7/7-2/src/components/Dashboard';

export const Signup =() => {

    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const navigate = useNavigate();

return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80  text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox onChange={(e) => {
                setFirstName(e.target.value)
            }} label={"First Name"} placeholder="Alice" />
            <InputBox onChange={(e) => {
                setLastName(e.target.value)
            }} label={"Last Name"} placeholder="Johnson" />
            <InputBox onChange={(e) => {
                setUsername(e.target.value)
            }} label={"Email"} placeholder="alice@gmail.com" />
            <InputBox onChange={(e) => {
                setPassword(e.target.value)
            }} label={"Password"} placeholder="12345678" />
            <div>
                <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        console.log("sign up response", response)
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                }} label={"Sign UP"} />
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={("/signin") } />
        </div>
    </div>  
</div>
}