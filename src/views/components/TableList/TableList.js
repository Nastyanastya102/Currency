import React from 'react';

import Table from 'react-bootstrap/Table';
import { Star } from './Icon';
  
export  const TableList = ({gettingData, filterList }) => {
  const list = gettingData.dataFromAPI.map((key, index) => (
    <tr key={key.key}>
      <td>{index + 1}</td>
        <td>{key.key}</td>
        <td>{key.value}</td>
        <td>
          <i onClick={() => setTimeout(() => filterList(key, index),0)}>
              <Star color={key.star}/>
          </i>
        </td>
    </tr>
  ));

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Currency</th>
          <th>Exchange Rate = 1 EUR</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </Table>
  );
}

