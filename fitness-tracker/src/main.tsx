import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import App from './AppLayout.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Home from './pages/Home.tsx'
import ExerciseDetail from './pages/ExerciseDetail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App children={<Home />} />
  }, 
  {
    path: '/exercise/:exerciseId',
    element: <App children={<ExerciseDetail />} />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
