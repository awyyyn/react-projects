import { Card, Header } from "./components"
import { useState } from 'react';
import staysData from './data/stays.json' 
import { stay } from "./types"; 


function App() { 

  const [search, setSearch] = useState(false);
  const stays = staysData as stay[]
  const [guest, setGuest] = useState('');
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuest(e.target.value)
  }

  return ( 
    <> 
      <Header handleSearch={() => setSearch(!search)} isSearch={search} guest={guest} handleChange={handleChange} />
 
      <div className={`absolute z-10 w-screen h-screen bg-black bg-opacity-30 ${search ? 'block ' : 'hidden'} transition-all delay-500  `} /> 
      <div className="flex justify-between px-5 sm:px-16 my-5 ">
        <h1 className="text-4xl font-bold">Stays in Finland</h1>
        <span className="text-stone-600">{stays.length}+ stays</span>
      </div>
      <div className="flex flex-wrap gap-8 sm:px-16 ">
        {stays.map((stay, i) => (
          <Card key={i}  info={stay} />
        ))}
      </div>
    </>
  )
}

export default App
