import React from "react"
import { useInvite } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Invite from "./Invite.js"
import NotGoing from "./NotGoing.js"
import Going from "./Going.js"
import "../styles/app.css"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Link to="/going"> GOING </Link>
        <Link to="/notgoing"> NOT GOING </Link>
        <div className="invite">
          <Route exact path="/" component={Invite} />
        </div>
        <div className="going">
          <Route exact path="/Going" component={Going} />{" "}
        </div>
        <div className="notgoing">
          <Route exact path="/NotGoing" component={NotGoing} />{" "}
        </div>
      </div>
    </Router>
  )
}
