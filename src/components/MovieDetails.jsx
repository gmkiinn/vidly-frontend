import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const { replace } = useHistory();
  const handleBack = () => {
    replace('/movies');
  };
  return (
    <div>
      <h1>Movie Form</h1>
      <p>{movieId}</p>
      <button onClick={handleBack} className='btn btn-sm btn-primary'>
        Save
      </button>
    </div>
  );
}

export default MovieDetails;
