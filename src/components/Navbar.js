import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="d-flex flex-row">
      <span className="px-3">
        <Link to="/">
          <b className="text-black">Home</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/contactus">
          <b className="text-black">contact us</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/voipelements">
          <b className="text-black">Voip Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/itelements">
          <b className="text-black">IT Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/cloudelements">
          <b className="text-black">Cloud Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/growthelements">
          <b className="text-black">Growth Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/businessunits/iotelements">
          <b className="text-black">IOT Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/statictemplates">
          <b className="text-black">Static Templates</b>
        </Link>
      </span>
    </nav>
  )
}
