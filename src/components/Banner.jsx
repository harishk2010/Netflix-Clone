import { FaPlay } from "react-icons/fa";
import banner from "../assets/banner.webp";
import { IMAGE_URL ,requests} from "../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Banner = () => {

    const [banner,setBanner]=useState({})

    useEffect(()=>{
        axios
        .get(requests.PopularMovies)
        .then((response)=>{
            const index=Math.floor(
                Math.random()*response?.data?.results.length
            )
            setBanner(response?.data?.results[index])
        })
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>
      <div
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 9)),
             url(${IMAGE_URL}${banner?.backdrop_path})`,
          }}
        className="md:max-h-screen px-4 md:px-14 bg-no-repeat text-white  bg-cover"
      >
        <h1 className="sm:text-7xl  md:w-[600px] pt-36 ml-3 md:pt-72 text-4xl">{banner.original_title}</h1>
        <p className="md:w-[600px] w-[500px] py-2 ml-3 md:py-11">{banner?.overview}</p>
        <div className="flex items-center gap-4 mt-4 mb-4">

          <button className=" flex gap-4 items-center text-black bg-white ml-3 py-2 px-4 rounded-xl sm:py-4 sm:px-6  ">
            <FaPlay />
            Play
          </button>
          <button className="flex items-center gap-4 bg-gray-700 py-2 px-4 rounded-xl sm:py-4 sm:px-7 ">
            <IoIosInformationCircleOutline/> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
