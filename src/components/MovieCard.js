import React from 'react';

const MovieCard = ({ title, year, poster, actors, plot }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={poster} alt={title} />
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
        <p className="movie-plot">{plot}</p>
        <p className="movie-actors"><strong>Actors:</strong> {actors}</p>
      </div>
    </div>
  );
};

export default MovieCard;
