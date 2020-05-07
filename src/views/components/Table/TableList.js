import React from 'react';
import PropTypes from 'prop-types';
//Botstrap
import Table from 'react-bootstrap/Table';

export default function TableList({ dataFromAPI }) {
  let tableRow = dataFromAPI.map((item, index) => {
    return (
      <tr key={item[0]}>
        <td>{index + 1}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
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