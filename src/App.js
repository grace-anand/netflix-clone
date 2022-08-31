import Row from "./Components/Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror movie"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
