/** @format */
import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';
import MoviesTable from './moviestable';
import DataMessage from './dataMessage';
import Pagination from './pagination';
import ListGroup from './listgroup';
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres, selectedGenre: genres[0] });
  }

  handleDelete = movie => {
    //return all the movies that their ID does not match the arg Movie.
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    //Update state to refelect new result.
    this.setState({ movies });
  };

  handleLike = movie => {
    // clone movies array of objects to avoid mutating state directly
    const movies = [...this.state.movies];
    // find index of movie object liked
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };

    // toggles like component on object
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleNext = currPage => {
    this.setState({ currentPage: currPage + 1 });
  };

  handlePrev = currPage => {
    this.setState({ currentPage: currPage - 1 });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies,
      genres,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
    } = this.state;

    //Array of movies based on selected genre.
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(m => m.genre._id === selectedGenre._id)
        : movies;
    const count = filtered.length;
    //sort by title(default)
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    return (
      <React.Fragment>
        <section className='row'>
          <div className='col-3'>
            <ListGroup
              genres={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className='col'>
            <DataMessage count={count} />
            <MoviesTable
              sortedMovies={sorted}
              itemsCount={count}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              currentPage={currentPage}
              pageSize={pageSize}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              onNext={this.handleNext}
              onPrev={this.handlePrev}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Movies;
