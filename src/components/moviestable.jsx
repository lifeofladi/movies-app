/** @format */
import React, { Component } from 'react';
import Like from './like';
import { paginate } from '../utils/paginate';
import Table from './table';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className='btn btn-danger'
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const {
      sortedMovies,
      pageSize,
      currentPage,
      itemsCount,
      sortColumn,
      onSort,
    } = this.props;

    //New array of movies objects to paginate from
    const movies = paginate(sortedMovies, currentPage, pageSize);

    if (!itemsCount) return null;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        data={movies}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
