
import { AppBar } from './AppBar';
import type { Blog } from '../hooks/index';
import {Avatar} from './BlogCard'

export const FullBlog = ({blog} : {blog: Blog}) => {
    
    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-11 px-10 w-full pt-20 max-w-screen-xl ">
                <div className="col-span-8 ">
                    <div className="text-4xl font-extrabold break-words">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2 break-words">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4 break-words ">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-3 " >
                    <div className="text-slate-600 text-lg" >
                        Author    
                    </div>
                    <div className="flex w-full" >
                        <div className="pr-4 flex flex-col justify-center" >
                        <Avatar name={blog.author.name || "Anonymous"} size={"big"} />
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="text-lg font-bold" >
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="text-slate-400 pt-1 text-sm" > 
                                Random catch phrase about the author's abilty to grab the user's attention
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}