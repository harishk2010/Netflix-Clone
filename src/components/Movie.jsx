import {  useNavigate } from "react-router-dom"
import { IMAGE_URL } from "../utils/constants"
import { useContext } from "react"
import AuthContext from "../context/Authcontext"

const Movie = ({movie}) => {
    // console.log(movie.id)
    const {user}=useContext(AuthContext)

    const navigate=useNavigate()

    const playVideo=(id)=>{
      if(user){
        navigate('video/'+id)
      }else{
        navigate('login')
      }

      

    }
  return (
    <>
    <img onClick={()=>playVideo(movie?.id)} className="w-[200px] cursor-pointer sm:w-[300px] rounded-2 p-1" src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}/>
    </>
  )
}

export default Movie
