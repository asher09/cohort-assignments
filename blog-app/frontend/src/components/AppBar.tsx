import {Avatar} from './BlogCard.tsx'
import {Link} from "react-router-dom";

export const AppBar =() => {

    return (
        <div className="border-b flex justify-between px-10 py-5" >
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer" >
                    Medium
            </Link>
            <div>
                <Link to={'/publish'} >
                <button type="button" className="mr-8 focus:outline-none text-white bg-green-700
                 hover:bg-green-800 cursor-pointer font-medium rounded-lg 
                 text-sm px-5 py-2.5 me-2 mb-2">New</button>
                </Link>

                <Avatar size={"big"} name="Asher" />
            </div>

        </div>
    )

}