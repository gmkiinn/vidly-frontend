import React from 'react';
import GenresList from './GenresList';
import MovieListText from './MovieListText';
import { MovieTable } from './MovieTable';
import Pagination from './common/Pagination';

function MovieContainer({
  genres,
  activeGenre,
  movies,
  sortColumn,
  filteredMovies,
  pageSize,
  currentPage,
  handleGenreChange,
  handleDelete,
  handleLikeClick,
  handleSort,
  handlePageChange,
}) {
  return (
    <div className='row'>
      <div className='col-3'>
        <GenresList
          genres={genres}
          onGenreChange={handleGenreChange}
          activeGenre={activeGenre}
        />
      </div>
      <div className='col'>
        <MovieListText movies={filteredMovies} />
        <MovieTable
          movies={movies}
          onDelete={handleDelete}
          onLikeClick={handleLikeClick}
          onSort={handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={filteredMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default MovieContainer;
