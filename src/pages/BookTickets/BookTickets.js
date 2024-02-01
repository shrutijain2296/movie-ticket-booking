import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./style.css";

function BookTickets() {
  const [movieName, setMovieName] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('movieName');
    console.log('Movie name:', name); 
    if (name) {
      setMovieName(name);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem('email');
    if (!email) {
      console.error('User email not found in localStorage');
      return;
    }

    console.log('Booking tickets for movie:', movieName);
    console.log('Number of tickets:', numberOfTickets);
    console.log('User email:', email);
    // Store booking details in localStorage
    const bookingDetails = {
      movieName,
      numberOfTickets,
      userEmail: email,
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    window.location.href = "/tickets-booked"
  };

  return (
    <div className='book-tickets'>
      <h2>Book Tickets</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieName">Movie Name:</label>
          <input 
            type="text" 
            id="movieName" 
            value={movieName} 
            readOnly 
            required 
          />
        </div>
        <div>
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input type="number" id="numberOfTickets" min="1" required onChange = {(e) => setNumberOfTickets(e.target.value)} value = {numberOfTickets}/>
        </div>
        <div>
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}

export default BookTickets;
