import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAppleAlt, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function ProductCard({name}) {
  return (
    <div className="flex flex-column items-center relative pa4 ma2 ba br4">
      <button className="absolute card-button-pos ma0 pa1 bg-transparent b--transparent pointer">
        <FontAwesomeIcon icon={faPlusCircle}/>
      </button>
      <FontAwesomeIcon className="f1" icon={faAppleAlt}/>
      <p className="ma0 pa0 mt2">
        {name}
      </p>
    </div>
  );
}