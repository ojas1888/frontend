import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieContent from "./components/MovieContent";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";
import BookMovie from "./components/BookMovie";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieContent />} />
        <Route path="/shows/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookMovie />} />
      </Routes>
    </div>
  );
}

export default App;