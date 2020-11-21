import React from "react";

const NavBar = props => {
  const { count } = props;
  const message =
    <span>There are <span className = "badge badge-pill badge-primary"> { count }</span> movies in the database!</span>;

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="!#" className="navbar-brand">
        {
          (count === 0) ? 'There are no more movies in the database!' : message
        }
  
      </a>
    </nav>
  );
};

export default NavBar;
