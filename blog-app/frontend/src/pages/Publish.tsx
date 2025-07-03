import axios from 'axios';
import { AppBar } from './../components/AppBar';
import { BACKEND_URL } from './../config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="max-w-screen-lg pt-10 w-full" >

                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" id="helper-text" aria-describedby="helper-text-explanation" 
                className=" text-gray-900 focus:outline-none text-md rounded-lg 
                 block w-full p-2.5" placeholder="Title.."/>
            <TextEditor onChange={(e) => {
                setContent(e.target.value)
            }} />
            <button onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.blogId}`)
                }} type="submit" className="inline-flex items-center hover:bg-green-700 cursor-pointer py-2.5 
                       bg-green-600 rounded px-4 text-xs font-medium text-center text-white "> Publish Post
            </button>            
            </div>
        </div>
    </div>

}

export function TextEditor({onChange}: {onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
    <form>
        <div className="w-full mb-4 mt-3  ">
            <div className="">
                <textarea onChange={onChange} id="comment" rows={8} className="w-full block focus:outline-none p-3 text-sm" placeholder="Write.." required ></textarea>

            </div>

            <div className="flex items-center justify-between px-3 py-2">
                  
            </div>
        </div>
    </form>
    )
}