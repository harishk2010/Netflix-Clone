import { IMAGE_URL } from "../utils/constants"

const Movie = ({movie}) => {
    console.log(movie)
  return (
    <>
    <img className="w-[200px] sm:w-[300px] rounded-2 p-1" src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}/>
    </>
  )
}

export default Movie
