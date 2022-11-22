import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import "./Form.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Form(){
  const [inputFields, setInputFields] = useState([''])

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    clearInputs()

  }

    return (
      <Col sm={12} md={6}>
        <form action="">
          {inputFields.map((inputField, index) => (
            <input
              key={index}
              className="input-field"
              type="text"
              value={inputField.value}
              placeholder="Enter a number"
              onChange={(event) => handleInputChange(index, event)}
            />
          ))}
          <div className="plus-minus-container">
            <button className="plus-minus" onClick={handleMinusInput} >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="plus-minus" onClick={handleAddInput}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button className="calculate-button" onClick={handleSubmit}>
            Calculate
          </button>
        </form>
      </Col>
    );
}