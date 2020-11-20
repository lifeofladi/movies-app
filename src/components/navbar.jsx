import React from "react";

const NavBar = props => {
  const {numMovies} = props;

  const dymNav = () => {
    if (numMovies === 0) {
      return 'There are no more movies in the database!'</span>;
    } else {
      return `Showing ${numMovies} movies in the database`
    }
  }

  return (<nav className="navbar navbar-light bg-light ">
    <span className="navbar-text">{
        dymNav();
      }</span>
  </nav>);
};

export default NavBar;
