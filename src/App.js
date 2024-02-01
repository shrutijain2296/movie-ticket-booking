import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import HomePage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";
import BookTickets from "./pages/BookTickets/BookTickets";
import LastPage from "./pages/LastPage/LastPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />}/>
        <Route path = "/homepage" element = {<HomePage />}/>
        <Route path = "/details-page/:id" element = {<DetailsPage />} />
        <Route path = "/book-tickets" element = {<BookTickets />} />
        <Route path = "/tickets-booked" element = {<LastPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
