import MovieList from "./components/MovieList";
import movies from "./assets/movies"; // gives me ready the list with movies from the asset
import "./App.css";
import Timer from "./components/Timer";
import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <h1>My first dynamic react application</h1>

      <Counter/>

      <Timer startTime={5}/>

      <MovieList movies={movies} headingText="The Movie List"/>

    </div>
  );
}

export default App;
