import React, { useState } from "react";

import Table from "../table/Table";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Form.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [tableComponentClass, setTableComponentClass] = useState(
    "table-component-hide"
  );
  const [inputFields, setInputFields] = useState([""]);
  const [isValid, setIsValid] = useState(true);
  const [numbersForTable, setNumbersForTable] = useState([
    {
      numbersList: "",
      minNumber: "",
      maxNumber: "",
      averageNumber: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // posts form data to backend API and fetches calculated results
    async function POST(path, data) {
      try {
      const response = await fetch(`http://127.0.0.1:5000${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const returnedData = await response.json();
      // Set state to returned data
      setNumbersForTable([
        ...numbersForTable,
        {
          numbersList: returnedData.numbers,
          minNumber: returnedData.min,
          maxNumber: returnedData.max,
          averageNumber: returnedData.average,
        },
      ]);
      setTableComponentClass("table-component-show");
      } catch(e){
        alert('Make sure you only enter numbers in all input boxes')
      }
    }

    POST("/", { numbers: inputFields });

    clearInputs();
  };

  // Handle every time user types in input field
  const handleInputChange = (index, event) => {
    if (isNaN(event.target.value.trim()) === false) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    const values = [...inputFields];
    values[index] = event.target.value;
    setInputFields(values);
  };
  

  // Clear all input fields
  const clearInputs = () => {
    const inputElements = Array.from(
      document.getElementsByClassName("input-field")
    );
    inputElements.map((inputElement) => {
      return (inputElement.value = "");
    });
  };

  // Add input Field
  const handleAddInput = (e) => {
    e.preventDefault();

    setInputFields([...inputFields, ""]);
  };

  // Remove an input field
  const handleMinusInput = (e) => {
    e.preventDefault();

    if (inputFields.length > 1) {
      const values = [...inputFields];
      values.splice(-1);
      setInputFields(values);
    }
  };

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
