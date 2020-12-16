/** @format */

import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form</h1>
      <p>
        {match.params.title} - <span>{match.params.id}</span>
      </p>
      <button
        className='btn btn-success'
        onClick={() => history.push('/movies')}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
