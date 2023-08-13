'use client';

import { useEffect } from "react";
import Link  from "next/link"

interface errorProps {
    error: Error & { digest?: string }
    reset: () => void
}

const Error = ({error, reset} : errorProps) => {
 

    return (
        <div className="min-h-[600px] grid place-content-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{error.message}</h1>
            <div className="mt-4 flex gap-x-5 justify-center">
                <button className="bg-red rounded-lg px-5 min-w-[120px] hover:shadow-lg hover:scale-105 transition-all py-2 text-white" onClick={() => reset()}>
                    Retry
                </button>
                <Link href={'/'}>
                    <button className="text-red border min-w-[120px] hover:shadow-lg hover:scale-105 transition-all border-red rounded-lg px-5 py-2">
                        Go back
                    </button>    
                </Link>
            </div> 
        </div>
    )
}

export default Error
