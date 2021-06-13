import {NavbarLink} from "./NavbarLink";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function Navbar() {
  return (
    <div className="w-100 flex justify-center bg-light-gray">
      <ul className="w-50 pa0 ma0">
        <NavbarLink path="/" name="Home"/>
        <NavbarLink path="/employee" name="Employee panel"/>
      </ul>
      <div className="flex justify-center items-center">
        <Link to="/cart">
          <FontAwesomeIcon className="black f4 mr3" icon={faShoppingCart}/>
        </Link>
        <p className="mr3">
          Hello, Admin
        </p>
        <p className="underline blue pointer">
          logout
        </p>
      </div>
    </div>
  );
}