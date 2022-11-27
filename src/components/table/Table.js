import React from "react";

import "./Table.css"

export default function Table(props){
  
  const tableData = props.props
    tableData.map(numbersArr => {
      if (numbersArr.numbersList === "") tableData.splice(numbersArr, 1);
    })
    return (
      <table className="table">
          <tbody>
            <tr className="table-head">
              <th>Numbers</th>
              <th>Minimum</th>
              <th>Maximum</th>
              <th>Average</th>
            </tr>
            {    tableData.map((numbersArr, index) => {
                if(numbersArr.numbersList === '') tableData.splice(numbersArr, 1)
                return (
                  <tr className="data" key={index}>
                    <td>{numbersArr.numbersList.join(', ')}</td>
                    <td>{numbersArr.minNumber}</td>
                    <td>{numbersArr.maxNumber}</td>
                    <td>{numbersArr.averageNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
    );
}