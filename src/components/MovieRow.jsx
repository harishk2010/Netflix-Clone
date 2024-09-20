import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const MovieRow = ({ url, title }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(title);
  return (
    <>
    <h1 className="text-white ml-8 pb-4 text-2xl">{title}</h1>
    <div className="flex gap-2 ml-8 mb-5">
        
        {
            movies?.map((elem)=>(
                <Movie key={elem?.id} movie={elem}/>
            ))
        }
    </div>
    </>
  );
};

export default MovieRow;
