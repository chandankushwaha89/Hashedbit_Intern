import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/movie";
import Form from "./pages/Form";
import BookingSuccessFull from "./pages/BookingSuccessFull";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/ticket-booking-form" element={<Form />} />
      <Route path="/booking-successfull" element={<BookingSuccessFull />} />
    </Routes>
  );
}

export default App;