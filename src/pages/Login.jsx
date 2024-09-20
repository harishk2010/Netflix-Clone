import { useState } from "react";
import background from "../assets/netflixbg.jpg";
import logo from '../assets/logo/netflix.png'

const Login = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [signIn,setSignIn]=useState(false)
    const handleSignIn=()=>{
        console.log(signIn)
        setSignIn(()=> !signIn)

    }
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${background})`,
      }}
    >
        <>
        <img src={logo} alt="" className="absolute mt-4 ml-9 w-[9rem]" />
        </>
      <div className="flex w-full h-full justify-center items-center">
        <form
          action=""
          className="bg-black w-[25rem] py-20 px-16 opacity-80 rounded-sm"
        >
            {
                signIn?(
                    <h1 className="text-3xl pb-5 text-center text-white">Sign Up</h1>

                ):(
                    <h1 className="text-3xl pb-5 text-center text-white">Sign In</h1>
                )
            }
          
          <div className="py-2">
            <input
              type="text"
              className="text-center py-3 border text-white bg-black rounded-md w-full outline-offset-1 outline-white"
              placeholder="Username"
              style={{ color: "white" }}
            />
          </div>
          {
            signIn ? (<div className="py-2">
            <input
              type="email"
              className="text-center py-3 border text-white bg-black rounded-md w-full outline-offset-1 outline-white"
              placeholder="email"
              style={{ color: "white" }}
            />
          </div>):""
          }
          
          <div className="py-2">
            <input
              type="password"
              placeholder="Password"
              className="text-center py-3 border bg-black rounded-md w-full outline-offset-1 outline-white"
              style={{ color: "white" }}
            />
          </div>
          <button className="bg-red-700 hover:bg-red-600 font-bold w-full rounded-md py-2 my-2 text-white">
            Sign In
          </button>
          <p className="text-white text-center cursor-pointer" onClick={handleSignIn}>Register Now!</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
