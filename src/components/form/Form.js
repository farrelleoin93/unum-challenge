import React, { useState } from "react";

import Table from "../table/Table";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Form.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Form(){
  const [inputFields, setInputFields] = useState([''])
  const [numbersForTable, setNumbersForTable] = useState([
    {
    numbersList: '',
    minNumber: '',
    maxNumber: '',
    averageNumber: '',
  }
]);


const handleSubmit = (e) => {
  e.preventDefault();

    async function POST(path, data) {
      const response = await fetch(`http://127.0.0.1:5000${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const returnedData = await response.json();
      console.log(returnedData);
      if(numbersForTable.numbersList !== ''){
        setNumbersForTable([
          ...numbersForTable, 
          {numbersList: returnedData.numbers,
          minNumber: returnedData.min,
          maxNumber: returnedData.max,
          averageNumber: returnedData.average
        }
      ]);
      } else {
        setNumbersForTable([
          {
            numbersList: returnedData.numbers,
            minNumber: returnedData.min,
            maxNumber: returnedData.max,
            averageNumber: returnedData.average,
          },
        ]);
      }
    console.log(numbersForTable);
    }
    POST("/", { numbers: inputFields })
    clearInputs();
    }

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index] = event.target.value;
    setInputFields(values)
  }

  const handleAddInput = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, ""])
  }

  const clearInputs = () => {
    const inputElements = Array.from(document.getElementsByClassName("input-field"));
    inputElements.map(inputElement => {
      return inputElement.value = ""
    })
  }

  const handleMinusInput = (e) => {
    e.preventDefault();
    
    if(inputFields.length > 1){
      const values = [...inputFields];
      values.splice(-1);
      setInputFields(values)
    }
  }

    return (
      <Row>
        <Col sm={12} md={6}>
          <form action="/" method="post" onSubmit={handleSubmit}>
            {inputFields.map((inputField, index) => (
              <input
                required
                key={index}
                className="input-field"
                type="number"
                name="numbers"
                value={inputField.value}
                placeholder="Enter a number"
                onChange={(event) => handleInputChange(index, event)}
              />
            ))}
            <div className="plus-minus-container">
              <button className="plus-minus" onClick={handleMinusInput}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="plus-minus" onClick={handleAddInput}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <button
              type="submit"
              className="calculate-button"
              // onClick={handleSubmit}
            >
              Calculate
            </button>
          </form>
        </Col>
        <Col sm={12} md={6}>
          <Table props={{ ...numbersForTable }} />
        </Col>
      </Row>
    );
}