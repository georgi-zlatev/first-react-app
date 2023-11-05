import MovieList from "./components/MovieList";
import movies from "./assets/movies"; // gives me ready the list with movies from the asset
import "./App.css";
import Timer from "./components/Timer";


function App() {
  return (
    <div>
      <h1>My first dynamic react application</h1>

      <Timer startTime={5}/>
      <Timer startTime={6}/>
      <Timer startTime={7}/>

      <MovieList movies={movies} headingText="The Movie List"/>

      {/* Here I add a comment to test the commit function */}
    </div>
  );
}

export default App;
