/** @format */
import React, { Component } from 'react';
import Like from './like';
import { paginate } from '../utils/paginate';

class MoviesTable extends Component {
  itemSort = path => {
    //clone sortColumn object (you should not mutate state properties directly)
    const sortColumn = { ...this.props.sortColumn };
    //toggle order between asc and desc
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const {
      sortedMovies,
      pageSize,
      currentPage,
      itemsCount,
      onDelete,
      onLike,
    } = this.props;

    //New array of movies objects to paginate from
    const movies = paginate(sortedMovies, currentPage, pageSize);

    if (!itemsCount) return null;
    return (
      <React.Fragment>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th onClick={() => this.itemSort('title')}>Title</th>
              <th onClick={() => this.itemSort('genre.name')}>Genre</th>
              <th onClick={() => this.itemSort('numberInStock')}>Stock</th>
              <th onClick={() => this.itemSort('dailyRentalRate')}>Rate</th>
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
      </React.Fragment>
    );
  }
}

export default MoviesTable;
