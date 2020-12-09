import React, { Component } from "react";
import { getMovies } from "./components/services/fakeMovieService";
import { getGenres } from "./components/services/fakeGenreService";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import ListGroup from "./components/listgroup";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    //return all the movies that their ID does not match the arg Movie.
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    //Update state to refelect new result.
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // clone movies array of objects to avoid mutating state directly
    const movies = [...this.state.movies];
    // find index of movie object liked
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] }
    
    // toggles like component on object
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

   handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleNext = currPage => {
    this.setState({ currentPage: currPage + 1 });
  };

  handlePrev = currPage => {
    this.setState({ currentPage: currPage - 1 });
  };
  
  render() {
    const { movies, genres, pageSize, currentPage } = this.state;
    const count = movies.length

    return (
      <React.Fragment>
        <NavBar count={ count }/>
        <main className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup genres={ genres }/>
            </div>
            <div className="col">
              <Movies
                movies={movies}
                pageSize={pageSize}
                currentPage={currentPage}
                count={count}
                onPageChange={this.handlePageChange}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onNext={this.handleNext}
                onPrev={this.handlePrev}
              />
            </div>
          </div>
          
        </main>
      </React.Fragment>
    );
  }
  
  }
  
export default App;
