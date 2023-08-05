import { SearchNotFoundProps } from "../utils/type"



const SearchNotFound = ({children, isLoading}: SearchNotFoundProps) => {
    
    return (
        <div className='min-h-full w-full flex items-center relative justify-center not-found-search' >
            <div className='absolute h-full w-full bg-white bg-opacity-40 z-[2] blur-md' />
            {isLoading ? 
                <div
                    className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                        Loading...
                    </span>
                </div>
            :
                <h1 className='text-4xl max-w-[450px] text-center z-[3]'>
                    {children}
                </h1>
            }
        </div>
    )
}

export default SearchNotFound