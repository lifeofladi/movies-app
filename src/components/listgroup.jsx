/** @format */

import React from 'react';

const ListGroup = props => {
  const { genres } = props;
  return (
    <ul className='list-group'>
      {genres.map(g => (
        <li key={g._id} className='list-group-item'>
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
