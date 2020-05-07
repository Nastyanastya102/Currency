import React from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';
import { Star } from './Icon';
import  Favorite   from '../../containers/Favorite'
        
        console.log();

export  const TableList = ({gettingData, filterList }) => {

  let tableRow = gettingData.dataFromAPI.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>
          <i onClick={() => setTimeout(() => filterList(index, item),0)}>
            <Star/>
          </i>
        </td>
      </tr>
    );
  });
  
  return (
    <>
    <Favorite/>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Currency</th>
          <th>Exchange Rate = 1 EUR</th>
        </tr>
      </thead>
      <tbody>
        {tableRow}
      </tbody>
    </Table>
    </>
  );
}

TableList.propTypes = {
  gettingData: PropTypes.object.isRequired,
};
