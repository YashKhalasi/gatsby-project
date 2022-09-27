import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="d-flex flex-row">
      <span className="px-3">
        <Link to="/">
          <b className="text-white">Home</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/contactus">
          <b className="text-white">contact us</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/voipelements">
          <b className="text-white">Voip Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/itelements">
          <b className="text-white">IT Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/cloudelements">
          <b className="text-white">Cloud Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/growthelements">
          <b className="text-white">Growth Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/iotelements">
          <b className="text-white">IOT Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/statictemplates">
          <b className="text-white">Static Templates</b>
        </Link>
      </span>
    </nav>
  )
}
