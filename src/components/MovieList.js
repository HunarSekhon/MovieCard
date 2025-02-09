import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=993b73bd');
      setMovies(response.data);
      console.log(response.data)
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="movie-list">
      {
        <MovieCard 
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            actors={movie.Actors}
            plot={movie.Plot} />
      }
    </div>
  );
};

export default MovieList;
