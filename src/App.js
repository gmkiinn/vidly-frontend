import React, { Component } from 'react';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';

import './App.css';
import { paginate } from './components/util/paginate';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import Navbar from './components/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import MovieContainer from './components/MovieContainer';
import MovieDetails from './components/MovieDetails';

export class App extends Component {
  state = {
    movies: [],
    genres: [],
    activeGenre: '',
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount = () => {
    const movies = getMovies().map((movie) => ({ ...movie, like: false }));
    const activeGenre = 'All Genres';
    const genres = [{ _id: uuidv4(), name: 'All Genres' }, ...getGenres()];
    this.setState({ movies, genres, activeGenre });
  };

  handleDelete = (id) => {
    const movie = deleteMovie(id);
    if (movie) {
      const movies = this.state.movies.filter((m) => m._id !== movie._id);
      this.setState({ movies });
    }
  };

  handleLikeClick = (movie) => {
    const movies = [...this.state.movies];
    const index = this.state.movies.findIndex((m) => m._id === movie._id);
    movies[index] = { ...movie };
    movies[index].like = !movie.like;
    this.setState({ movies });
  };

  handleGenreChange = (activeGenre) => {
    this.setState({ activeGenre, currentPage: 1 });
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      activeGenre,
      sortColumn,
    } = this.state;
    const genreMovies = allMovies.filter(
      (movie) => movie.genre.name === activeGenre
    );
    const filteredMovies = genreMovies.length ? genreMovies : allMovies;
    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sorted, pageSize, currentPage);
    return (
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/movies/:movieId' component={MovieDetails} />
            <Route
              path='/movies'
              component={(props) => (
                <MovieContainer
                  {...props}
                  genres={genres}
                  activeGenre={activeGenre}
                  filteredMovies={filteredMovies}
                  movies={movies}
                  sortColumn={sortColumn}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  handleGenreChange={this.handleGenreChange}
                  handleDelete={this.handleDelete}
                  handleLikeClick={this.handleLikeClick}
                  handleSort={this.handleSort}
                  handlePageChange={this.handlePageChange}
                />
              )}
            />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/notfound' component={NotFound} />
            <Redirect exact from='/' to='/movies' />
            <Redirect to='/notfound' />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
