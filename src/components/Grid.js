import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from "../images/no-image.jpg";
import "../pages/Homepage/style.css";

function Grid() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
       axios.get("https://api.tvmaze.com/search/shows?q=all")
          .then(response => {
            setShows(response.data);
          })
          .catch(error => {
            console.log('Error fetching data');
          });
    }, []);

    
    return (
    <div>
        <div className='movie-list'>
            {
                shows.map(show => (
                    <div id = "show.show.id" className='movie-card'>
                          <img src = {show.show.image ? show.show.image.medium : image} alt = {show.show.name} className='movie-image' />
                          <h3>{show.show.name}</h3>
                          <p>Language: {show.show.language}</p>
                          <Link to={`/details-page/${show.show.id}`}>
                            <button className="movie-button">Details</button>
                          </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Grid