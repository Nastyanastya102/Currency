import React from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';
import star from '../../../img/star.png';

export  const TableList = ({ dataFromAPI, filterList }) => {
  let tableRow = dataFromAPI.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>
          <img
            src={star}
            alt="add to favorite"
            onClick={() => filterList(item, index)}
          />
        </td>
      </tr>
    );
  });
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Currency</th>
          <th>Exchange Rate = 1 EUR</th>
        </tr>
      </thead>
      <tbody>{tableRow}</tbody>
    </Table>
  );
}

TableList.propTypes = {
  dataFromAPI: PropTypes.array.isRequired,
};
