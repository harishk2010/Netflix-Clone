
import './App.css'
import Login from './pages/Login'
import Layout from './Layout'
import Home from './pages/Home'
import { Route  ,RouterProvider ,createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
        <Route path=""  element={<Home/>}/>
        {/* <Route/> */}
    </Route>
    <Route path="login" element={<Login/>}/>
    </>
    
  )
)

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
