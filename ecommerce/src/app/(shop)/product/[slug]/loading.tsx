import React from 'react'

const Loading = () => {

    return (
        <>
          <div className="flex flex-col px-5 sm:px-16 md:px-28 md:justify-evenly  md:flex-row items-center md:items-start gap-y-3 w-[98%] mx-auto">
                <div className="py-5  space-y-5">
                    <div className="relative h-[300px] md:h-[500px] md:w-[500px] w-[300px] mx-auto bg-slate-100 animate-pulse  rounded-lg shadow-2xl "> 
                    </div>
                    <div className="flex gap-x-3 flex-wrap justify-center">
                        {['1', '2', '3'].map(i =>  (
                            <div  className="relative w-[60px] h-[60px] bg-slate-100 shadow-lg hover:bg-slate-200 cursor-pointer animate-pulse rounded-lg overflow-hidden p-3 " key={i} />
                        ))}
                    </div>
                </div>

                <div className=" h-auto md:w-[500px] md:px-10 md:py-16 space-y-5">
                    <div className="h-10 w-full bg-slate-200 animate-pulse rounded-lg" />
                    <div className="h-8 w-full bg-slate-200 animate-pulse rounded-lg" />
                    <div className='bg-slate-200 animate-pulse min-h-8 h-8 rounded-lg w-full' /> 
                    <div className="h-8 w-full bg-slate-200 animate-pulse rounded-lg"  />
                    <div className="h-8 w-full bg-slate-200 animate-pulse rounded-lg"  />
                    <div className='flex gap-4 flex-wrap'>
                        <div className='w-[180px] bg-slate-200 rounded-lg h-10' />
                        <div className='w-[180px] bg-slate-200 rounded-lg h-10' />
                    </div>
                </div>
            </div>
            <div className="px-5 sm:px-10 md:px-28  pb-5 overflow-hidden"> 
                <div className="flex gap-x-8  py-10 justify-center px-16">
                    {['1', '2', '3', '4', '5', '6']?.map((i) => (
                        <div key={i} className="h-[200px] min-w-[150px] w-[180px] bg-slate-200 animate-pulse rounded-lg"  />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Loading
