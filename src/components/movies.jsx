import React, {Component} from "react";
import {getMovies} from "./services/fakeMovieService";
import Like from "./like";
import Pagination from './pagination';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    //return all the movies that their ID does not match the arg Movie.
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    //Update state to refelect new result.
    this.setState({movies});
  };

  handleLike = movie => {
    // clone movies array of objects to avoid mutating state directly
    const movies = [...this.state.movies];
    // find index of movie objec liked
    const index = movies.indexOf(movie);
    movies[index] = {
      ...movies[index]
    };
    // toggles like component on object
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  };

  handlePageChange = page => {
    this.setState({currentPage: page})
  };

  render() {
    let {length: numMovies} = this.state.movies;
    let {pageSize, currentPage} = this.state;

    if (numMovies === 0) 
      return <p>There are no more movies in the database!</p>;
    
    return (<React.Fragment>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th/>
            <th/>
          </tr>
        </thead>
        <tbody>
          {
            this.state.movies.map(movie => (<tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
              </td>
              <td>
                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>))
          }
        </tbody>
      </table>
      <Pagination itemsCount={numMovies} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
    </React.Fragment>);
  }
}

export default Movies;
