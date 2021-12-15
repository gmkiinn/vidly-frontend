import React from 'react';

function GenresList({ genres, onGenreChange, activeGenre }) {
  return (
    <ul style={{ marginTop: '2rem' }} className='list-group'>
      {genres.map((genre) => (
        <li
          style={{ cursor: 'pointer' }}
          key={genre._id}
          className={
            activeGenre === genre.name
              ? 'list-group-item active'
              : 'list-group-item'
          }
          onClick={() => onGenreChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

GenresList.defaultProps = {
  valueProperty: 'name',
};

export default GenresList;

// Component -> must be generic
// for Interface -> Use it before implement it.
// props -> pay great attention on props
// Try to compose HighLevel components, not mixture.
