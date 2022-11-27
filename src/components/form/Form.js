import React, { useState } from "react";

import Table from "../table/Table";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Form.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Form(){
  const [tableComponentClass, setTableComponentClass] = useState('table-component-hide')
  const [inputFields, setInputFields] = useState([''])
  const [isValid, setIsValid] = useState(true)
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
        setNumbersForTable([
          ...numbersForTable, 
          {numbersList: returnedData.numbers,
          minNumber: returnedData.min,
          maxNumber: returnedData.max,
          averageNumber: returnedData.average
        }
      ]);
    console.log(numbersForTable);
    }
    POST("/", { numbers: inputFields })
    
    clearInputs();
    setTableComponentClass('table-component-show')
    }

  const handleInputChange = (index, event) => {
    console.log(isNaN(event.target.value.trim()));
    if(isNaN(event.target.value.trim()) === false) {
      setIsValid(false)
    }
    else {
      setIsValid(true)
    }
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
                type="text"
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
              id="submit-button"
              type="submit"
              className="calculate-button"
              disabled={isValid}
            >
              Calculate
            </button>
          </form>
        </Col>
        <Col sm={12} md={6}>
          <div className={tableComponentClass}>
          <Table props={[...numbersForTable]} />
          </div>
        </Col>
      </Row>
    );
}