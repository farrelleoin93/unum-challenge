import React from "react";

import TextField from "../TextField/TextField";

import Col from "react-bootstrap/Col";
import "./Form.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Form(){
    return (
      <Col>
        <form action="">
          <TextField />
          <div className="plus-minus-container">
            <button className="plus-minus">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="plus-minus">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button className="calculate-button">Calculate</button>
        </form>
      </Col>
    );
}