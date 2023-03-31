import React from 'react';
import './MovieDetailsSection.css';
import PropTypes from 'prop-types'
import formatDate from '../utils';

const MovieDetailsSection = ({details}) => {
  return (
    <div className='movie-details'>
      <div className='movie-title-tagline'>
        <h1>{details.movie.title}</h1>
        <h2>{details.movie.tagline}</h2>
      </div>
      <div className='movie-overview'>
        <div>
          <p>Runtime: {details.movie.runtime} minutes</p>
          <p>Released: {formatDate(details.movie.release_date)}</p>
          {console.log(details.movie.genres)}
          <p>{details.movie.genres.join(' | ')}</p>
          <p>Budget: ${details.movie.budget.toLocaleString('en-US')}</p>
          <p>Revenue: ${details.movie.revenue.toLocaleString('en-US')}</p>
          <p>Average Rating: {details.movie.average_rating}/10</p>
        </div>
        <p>{details.movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetailsSection;

MovieDetailsSection.propTypes = {
  details: PropTypes.object
}