import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home" 
import Exchanges from "./pages/Exchanges"
import CyptoCurrencies from "./pages/CyptoCurrencies"
import CryptoDetails from "./pages/CryptoDetails"
import News from "./pages/News"
import AppLayout from "./AppLayout"
import { Provider } from "react-redux"
import store from "./app/store"  
import Error from "./pages/Error"

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route 
      path="/" 
      element={
        <AppLayout>
          <Home />
        </AppLayout>
      }
      errorElement={<Error />}
    />,
    <Route
      path="/exchanges"  
      element={
        <AppLayout>
          <Exchanges />
        </AppLayout>
      }
      errorElement={<Error />}
    />,
    <Route
      path="/cryptocurrencies"  
      element={
        <AppLayout>
          <CyptoCurrencies />
        </AppLayout>
      }
      errorElement={<Error />}
    />,
    <Route
      path="/crypto/:coinId"  
      element={
        <AppLayout>
          <CryptoDetails />
        </AppLayout>
      }
      errorElement={<Error />}
    />,
    <Route
      path="/news"   
      element={
        <AppLayout>
          <News />
        </AppLayout>
      }
      errorElement={<Error />}
    />,
  ])
)

function App() { 
    
  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
