import axios from "../axios";
import { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${
            movie?.title || movie?.name || movie?.original_name
          }&type=video&key=AIzaSyCt2MjbtxeMCvXNBcJt8AiZsduYJGyILcc`
        )
        .then((res) => setTrailerUrl(res.data.items[0].id.videoId));
    }
  };
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies?.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__poster_large"}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
