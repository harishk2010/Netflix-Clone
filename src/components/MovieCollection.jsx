import MovieRow from "./MovieRow"
import { requests } from "../utils/constants"

const MovieCollection = () => {
  return (
    < >
    <MovieRow row={1} url={requests.PopularMovies} title={"Popular movies"}/>
    <MovieRow row={2} url={requests.AdventuresMovies} title={"Adventures Movies"}/>
    <MovieRow row={3} url={requests.DocumentaryMovies} title={"Documentary Movies"}/>
    <MovieRow row={4} url={requests.TopRatedMovies} title={"Top Rated Movies"}/>
    <MovieRow row={5} url={requests.HorrorMovies} title={"Horror Movies"}/>
    <MovieRow row={6} url={requests.RomanceMovies} title={"Romance Movies"}/>
    
    </>
  )
}

export default MovieCollection
