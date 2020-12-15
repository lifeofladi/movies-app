/** @format */

import React from 'react';

const ListGroup = props => {
  const { genres, onItemSelect, selectedItem } = props;
  return (
    <ul className='list-group'>
      {genres.map(g => (
        <li
          key={g._id}
          onClick={() => onItemSelect(g)}
          className={
            g === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
