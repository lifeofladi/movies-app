/** @format */

import React from 'react';

const DataMessage = ({ count }) => {
  const message = (
    <span>
      There are <span className='badge badge-pill badge-primary'> {count}</span>{' '}
      movies in the database!
    </span>
  );

  return (
    <p>{count === 0 ? 'There are no more movies in the database!' : message}</p>
  );
};

export default DataMessage;
