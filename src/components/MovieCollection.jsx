import MovieRow from "./MovieRow"
import { requests } from "../utils/constants"

const MovieCollection = () => {
  return (
    < >
    <MovieRow url={requests.PopularMovies} title={"Popular movies"}/>
    <MovieRow url={requests.AdventuresMovies} title={"Adventures Movies"}/>
    <MovieRow url={requests.DocumentaryMovies} title={"Documentary Movies"}/>
    <MovieRow url={requests.TopRatedMovies} title={"Top Rated Movies"}/>
    <MovieRow url={requests.HorrorMovies} title={"Horror Movies"}/>
    <MovieRow url={requests.RomanceMovies} title={"Romance Movies"}/>
    
    </>
  )
}

export default MovieCollection
