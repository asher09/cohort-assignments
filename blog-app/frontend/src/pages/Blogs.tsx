
import { BlogCard } from './../components/BlogCard';
import { AppBar } from './../components/AppBar';
import { useBlogs } from './../hooks/index';
import { BlogSkeleton } from '../components/BlogSkeleton';

export const Blogs = () => {

    const {loading, blogs} = useBlogs();


    if(loading ) {
        return <div>
                <AppBar/>
                <div className="justify-center flex" >
                    <div className="max-w-screen-md w-full"  > 
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />           
                    </div>
                </div>    
        </div>
    }

    return ( <div>
            <AppBar  />
            <div className="flex justify-center">
                <div >
                    {blogs.map(blog => <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"} 
                        title={blog.title} 
                        content={blog.content}
                        publishedDate={"22ndMarch26"}            
                    />)}
                </div>
            </div>
        </div>
    )
}