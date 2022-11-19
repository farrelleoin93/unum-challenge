import React from "react";

import TextField from "../TextField/TextField";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Form(){
    return (
      <form action="">
        <TextField />
        <div className="plus-minus-container">
        <button>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        </div>
        <button>Calculate</button>
      </form>
    );
}