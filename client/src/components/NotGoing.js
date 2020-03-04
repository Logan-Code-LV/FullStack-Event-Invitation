import { useInvite } from "../hooks"
import React from "react"

export default props => {
  const { notgoing } = useInvite()
  return (
    <div>
      {notgoing.map(item => (
        <div className="notgoing">
          <img src={item.image}></img>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )
}
