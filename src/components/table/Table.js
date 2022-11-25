import React from "react";

import "./Table.css"

export default function Table(){
    // let numbers
    // fetch('http://127.0.0.1:5000/')
    // .then(res => res.json())
    // .then(data => console.log(data.numbers))

    return (
        <table className="table">
          <tbody>
            <tr className="table-head">
              <th>Numbers</th>
              <th>Minimum</th>
              <th>Maximum</th>
              <th>Average</th>
            </tr>
            <tr className="data">
              <td>2,6,4,3,2</td>
              <td>2</td>
              <td>6</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
    );
}