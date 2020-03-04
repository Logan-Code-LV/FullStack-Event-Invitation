import { useInvite } from "../hooks"
import React from "react"

export default props => {
  const { going } = useInvite()
  return (
    <div>
      {going.map(item => (
        <div className="going">
          <img src={item.image}></img>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )
}
