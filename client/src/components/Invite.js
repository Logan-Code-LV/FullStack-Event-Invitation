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
      <button onClick={e => sendGoing(user)}>going</button>
      <button onClick={e => sendNotgoing(user)}>notgoing</button>
    </div>
  )
}
