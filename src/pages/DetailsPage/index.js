import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Navbar/Navbar';
import image from "../../images/no-image.jpg";
import "./style.css";

function DetailsPage() {

  const [show, setShow] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
      axios.get(`https://api.tvmaze.com/shows/${id}`)
         .then(response => {
            setShow(response.data);
         })
         .catch(error => {
            console.log("Error fetching show details");
         })
  }, [id]);

  if(!show){
    return <div>Loading...</div>
  }

  const cleanSummary = show.summary ? show.summary.replace(/<\/?[^>]+(>|$)/g, '') : '';

  return (
    <div>
        <Header />
        <div className='details-page'>
          <div className='top-section'>
            <img src = {show.image ? show.image.medium : image} alt = {show.name} />
            <div>
                <h3>{show.name}</h3>
                <h6>Rating: {show.rating.average}*</h6>
                <h6>Language: {show.language}</h6>
                <h6>Genres: {show.genres}</h6>
                <Link to={`/book-tickets?movieName=${encodeURIComponent(show.name)}`}>
                  <button>Book Tickets</button>
                </Link>
            </div>            
          </div>
          <div className="summary-box">
            <h4>Summary</h4>
            <div className="summary">
              <p>{cleanSummary}</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default  DetailsPage;