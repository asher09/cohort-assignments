
export const BlogSkeleton = () => {

    return ( 
        <div>
                <div role="status" className="max-w-screen-lg animate-pulse"></div>
                    <div className="border-b border-slate-200 p-5 m-6 max-w-screen-md break-words cursor-pointer" >
                        <div className="flex " >
                                <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                            <div className="font-extralight pl-1 flex justify-center flex-col " >
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            </div>
                            <div className="flex justify-center flex-col pl-2" >
                                {/* <Circle/>  */}
                            </div>
                            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            </div>
                        </div>
                        <div className="text-xl font-semibold pt-2 pb-1" >
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="text-md font-thin">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="text-sm text-slate-500 font-thin pt-4">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
            
        </div>
    )

}