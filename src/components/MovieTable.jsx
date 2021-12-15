import React, { Component } from 'react';
import LikeComponent from './common/LikeComponent';
import { Link } from 'react-router-dom';

export class MovieTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, onLikeClick, sortColumn } = this.props;
    return (
      <>
        {movies.length ? (
          <table className='table'>
            <thead>
              <tr>
                <th
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.raiseSort('title')}
                >
                  Title{' '}
                  {sortColumn.path === 'title' ? (
                    sortColumn.order === 'asc' ? (
                      <i className='bi bi-caret-up-fill'></i>
                    ) : (
                      <i className='bi bi-caret-down-fill'></i>
                    )
                  ) : null}
                </th>
                <th
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.raiseSort('genre.name')}
                >
                  Genre{' '}
                  {sortColumn.path === 'genre.name' ? (
                    sortColumn.order === 'asc' ? (
                      <i className='bi bi-caret-up-fill'></i>
                    ) : (
                      <i className='bi bi-caret-down-fill'></i>
                    )
                  ) : null}
                </th>
                <th
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.raiseSort('numberInStock')}
                >
                  Stock{' '}
                  {sortColumn.path === 'numberInStock' ? (
                    sortColumn.order === 'asc' ? (
                      <i className='bi bi-caret-up-fill'></i>
                    ) : (
                      <i className='bi bi-caret-down-fill'></i>
                    )
                  ) : null}
                </th>
                <th
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.raiseSort('dailyRentalRate')}
                >
                  Rate{' '}
                  {sortColumn.path === 'dailyRentalRate' ? (
                    sortColumn.order === 'asc' ? (
                      <i className='bi bi-caret-up-fill'></i>
                    ) : (
                      <i className='bi bi-caret-down-fill'></i>
                    )
                  ) : null}
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>
                    <Link to={`movies/${movie._id}`}>{movie.title}</Link>
                  </td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeComponent
                      onClick={() => onLikeClick(movie)}
                      like={movie.like}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(movie._id)}
                      className='btn btn-sm btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </>
    );
  }
}

export default MovieTable;
