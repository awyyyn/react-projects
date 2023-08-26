import logo from '../assets/logo.png'  

interface props {
    isSearch: boolean
    handleSearch: () => void
    guest: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Header = ({handleSearch, isSearch, handleChange, guest}: props) => { 

    return (
        <header className='py-5 z-50 px-3 flex flex-wrap flex-col sm:flex-row gap-y-3 items-center sm:py-7 sm:px-16 sm:justify-between relative'>
            <img src={logo} loading='eager' alt='windbnb logo' className='object-contain self-start sm:h-6'  /> 
            <div className='shadow-lg flex py-2 px-4 justify-between rounded-xl md:min-w-[400px] '>
                <p className='text-slate-500'>Helsinki, Finland</p>
                <div className='flex w-[50%]'>
                    <input type="text" className='px-4 w-[80%] outline-none border-l' value={guest} placeholder='Add Guests' onClick={handleSearch} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="rgba(235, 87, 87, 0.9)" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg> 
                </div>
            </div>  
            <div className={`fixed min-h-[600px] md:min-h-min md:pb-5  md:px-28 sm:px-12 space-y-5 top-0 left-0 w-full bg-white shadow-lg p-4 ${isSearch ? 'translate-y-0 opacity-1' : '-translate-y-full opacity-0'} transition-all duration-1000`}>
                <div className='flex justify-between md:hidden'>
                    <p>Edit your search</p>
                    <button className='hover:text-bnb' onClick={handleSearch}>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> 
                    </button>
                </div>
                <div className='shadow-md rounded-xl flex flex-col md:flex-row flex-1 overflow-hidden'>
                    <div className='px-5 py-3 md:py-2 md:w-[40%] md:border-[1px] border-stone-800 rounded-xl'>
                        <label className='text-xs uppercase font-bold'>Location</label>
                        <p className='font-normal text-slate-500'>Helsinki, Finland</p>
                    </div>
                    <hr className='block md:hidden' />
                    <div className='px-5 py-3 md:py-2  md:w-[40%]'>
                        <label className='text-xs uppercase font-bold' htmlFor='#search'>Guests</label>
                        <input type="text" className='outline-none w-full' placeholder='Add guests' id='search' value={guest} onChange={(e) => handleChange(e)}  />
                    </div> 
                    <button onClick={handleSearch} className='bg-bnb mx-auto hidden md:flex text-white items-center py-2 px-5 rounded-xl max-h-[35px] self-center shadow-lg gap-x-3 justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#FFFFFF" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>  
                        <span className='self-center'>
                            Search
                        </span>
                    </button>
                </div>

                <div className='space-y-3 px-5'>

                    <div className='flex gap-x-3  py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-stone-600">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg> 
                        <p className='text-stone-800'>Helsinki, Finland</p>
                    </div>

                    <div className='flex gap-x-3  py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-stone-600">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg> 
                        <p className='text-stone-800'>Turku, Finland</p>
                    </div>

                    <div className='flex gap-x-3  py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-stone-600">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg> 
                        <p className='text-stone-800'>Oulo, Finland</p>
                    </div>
                    
                    <div className='flex gap-x-3  py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-stone-600">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg> 
                        <p className='text-stone-800'>Vaasa, Finland</p>
                    </div>
                </div>
                <button onClick={handleSearch} className='bg-bnb md:hidden text-white flex items-center py-2 px-5 rounded-xl absolute bottom-10 left-[50%] -translate-x-[50%] shadow-lg gap-x-3 justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#FFFFFF" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>  
                    <span className='self-center'>
                        Search
                    </span>
                </button>
            </div> 
        </header>
    )
}

export default Header
