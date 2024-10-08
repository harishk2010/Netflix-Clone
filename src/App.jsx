import "./App.css";
import Login from "./pages/Login";
import Video from "./pages/Video";
import Layout from "./Layout";
import Home from "./pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={
         
            <Home />
         
        } />
        <Route path="video/:id" element={<Video />} />
        {/* <Route/> */}
      </Route>
      <Route path="login" element={
      
        <Login />
      } />
    </>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer richcolors theme='dark'/>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
