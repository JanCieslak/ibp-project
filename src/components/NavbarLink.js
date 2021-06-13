import {Link} from "react-router-dom";
import React from "react";

export function NavbarLink({path, name}) {
  return (
    <li className="dib f4 ph4 pv3 dim pointer">
      <Link className="no-underline black" to={path}>{name}</Link>
    </li>
  );
}