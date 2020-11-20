import React, {Component} from "react";
import {getMovies} from "./services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";

class Movies extends Component {
  const {
    numMovies,
    onDelete,
    movies,
    onPageChange,
    pageSize,
    currentPage,
    onLike
  } = props;

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
          movies.map(movie => (<tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)}/>
            </td>
            <td>
              <button onClick={() => onDelete(movie)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>))
        }
      </tbody>
    </table>
    <Pagination itemsCount={numMovies} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}/>
  </React.Fragment>);
};

export default Movies;
