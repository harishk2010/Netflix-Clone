import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL ,API_KEY } from "../utils/constants"


const Video = () => {

    const [videoId,setVideoId]=useState("")

    const {id}=useParams()

    useEffect(()=>{
        axios
        .get(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`)
        .then((response)=>{
            // console.log(response.data.results[0].key)
            setVideoId(response.data.results[0].key)
        })
    },[])


  return (
    <div className="">
     
       <iframe src={`https://www.youtube.com/embed/${videoId}`} 
        
       frameborder="0"
       allowFullScreen
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin"
       className="w-full md:min-h-screen min-h-[300px]"
       ></iframe>
       {/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" */}
      
    </div>
  )
}

export default Video
