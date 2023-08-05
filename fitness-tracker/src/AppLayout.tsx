 
import { Navbar } from './components'

function App({children}: { children: React.ReactNode }) { 

  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default App
