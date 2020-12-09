/** @format */

import React, { Component } from 'react';
import Like from './like';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      count,
      onPageChange,
      onDelete,
      onLike,
      onNext,
      onPrev,
    } = this.props;

    //New array of movies objects to paginate from
    const movies = paginate(allMovies, currentPage, pageSize);

    if (!count) return null;
    return (
      <React.Fragment>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => onLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          count={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
          onNext={onNext}
          onPrev={onPrev}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
