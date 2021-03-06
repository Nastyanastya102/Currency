import React from 'react';
import PropTypes from 'prop-types';

import { ErrorInfo } from '../ErrorInfo';
import Table from 'react-bootstrap/Table';
import { Star } from './Icon';
  
const TableList = ({ dataFromAPI, filterList }) => {
  
  if (!dataFromAPI.length) return <ErrorInfo/>;
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
        {
          dataFromAPI.map((key, index) => (
            <tr key={key.key}>
              <td>{index + 1}</td>
                <td>{key.key}</td>
                <td>{key.value}</td>
                <td>
                  <i onClick={() => filterList(key, index)}>
                    <Star color={key.star}/>
                  </i>
                </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
 );
};

export default TableList;

TableList.propTypes = {
  dataFromAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterList: PropTypes.func.isRequired
};
