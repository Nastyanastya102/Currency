import React from 'react'
import { Star } from './Icon';

import Table from 'react-bootstrap/Table';

const Favorite = ({ gettingData,filterList }) => {

 if(!gettingData.filtered.length) { 
 return(
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Add your favorite currency</th>
      </tr>
    </thead>
  </Table>
)}

let tableRow = gettingData.filtered.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>
          <i>
            <Star color={true}/>
          </i>
        </td>
      </tr>
    );
  });
  return(
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
  )
};
export default Favorite