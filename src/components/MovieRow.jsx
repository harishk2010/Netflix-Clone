import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const MovieRow = ({ row, url, title }) => {
  const handleLeftScroll = () => {
    let slider = document.getElementById("slider" + row);
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  const handleRightScroll = () => {
    let slider = document.getElementById("slider" + row);
    slider.scrollLeft = slider.scrollLeft - 600;
  };

  const [movies, setMovies] = useState([]);
  // console.log(movies);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(title);
  return (
    <>
      <h1 className="text-white ml-8 pb-4 text-2xl">{title}</h1>
      <div className="flex items-center">
        <MdNavigateBefore
          onClick={handleRightScroll}
          className="      relative h-full left-20  
         text-black w-40 
         rounded-full opacity-55
         lg:w-28
          bg-white hover hover:opacity-100"
        />

        <div
          id={"slider" + row}
          className="flex gap-2 ml-8 mb-5  overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {movies?.map((elem) => (
            <Movie key={elem?.id} movie={elem} />
          ))}
        </div>
        <MdNavigateNext
          onClick={handleLeftScroll}
          className="relative h-full right-6  lg:w-28  text-black w-40 rounded-full opacity-55 bg-white hover hover:opacity-100"
        />
      </div>
    </>
  );
};

export default MovieRow;
