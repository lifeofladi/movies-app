import React, {Component} from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

class App extends Component {
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
    this.setState({currentPage: page});
  };

  const {pageSize, currentPage, movies} = this.state;
  const count = movies.length;

  return (<React.Fragment>
    <NavBar numMovies={count}/>
    <main className="container">
      <Movies movies={movies} numMovies={count} onDelete={() => this.handleDelete(movie)} onPageChange={this.handlePageChange} pageSize={pageSize} currentPage={currentPage} onLike {() => this.handleLike(movie)}/>
    </main>
  </React.Fragment>);
};

export default App;
