import React from 'react';
import './MovieCard.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const MovieCard = ({id, title, average_rating, release_date, poster_path, selectMovie }) => {

  return (
    <div className='movie-card'>
      <Link to={`/${id}`}>
        <img className='movie-img' src={poster_path}/>
        <h3>{title}</h3>
        <p>{average_rating}</p>
        <p>{release_date}</p>
      </Link>
    </div>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  average_rating: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  selectMovie: PropTypes.func
}