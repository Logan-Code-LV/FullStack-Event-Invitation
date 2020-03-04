import React, { useEffect, useState } from "react"
import axios from "axios"
import { useInvite } from "../hooks"
import "../styles/invite.css"

export default props => {
  const { user, sendGoing, sendNotgoing } = useInvite()
  return (
    <div>
      <div>
        <img src={user.image}></img>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
      <div className="buttons">
        <button onClick={e => sendGoing(user)}>Going</button>
        <button onClick={e => sendNotgoing(user)}>Not Going</button>
      </div>
    </div>
  )
}
