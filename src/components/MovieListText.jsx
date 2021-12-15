import React from 'react';

export default function MovieListText({ movies }) {
  return (
    <>
      {movies.length ? (
        <p style={{ marginTop: '2rem' }}>
          Showing {movies.length} in the database
        </p>
      ) : (
        <p style={{ marginTop: '2rem' }}>No movies in the database</p>
      )}
    </>
  );
}
