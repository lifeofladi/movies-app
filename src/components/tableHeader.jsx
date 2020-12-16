/** @format */

import React, { Component } from 'react';

class TableHeader extends Component {
  itemSort = path => {
    //clone sortColumn object (you should not mutate state properties directly)
    const sortColumn = { ...this.props.sortColumn };
    //toggle order between asc and desc
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead className='thead-dark'>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.itemSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
