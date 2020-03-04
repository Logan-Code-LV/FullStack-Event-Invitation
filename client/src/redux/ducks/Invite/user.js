import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
const GET_USER = "user/GET_USER"
const GOING = "user/GOING"
const NOT_GOING = "user/NOTGOING"
const initialState = {
  user: {},
  going: [],
  notGoing: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case GOING:
      return { ...state, going: action.payload }
    case NOT_GOING:
      return { ...state, notgoing: action.payload }
    default:
      return state
  }
}
function notGoing(user) {
  return dispatch => {
    axios.post("/api/notgoing", user).then(resp => {
      dispatch(getUser())
    })
  }
}

function Going(user) {
  return dispatch => {
    axios.post("/api/going", user).then(resp => {
      dispatch(getUser())
    })
  }
}

function getGoing() {
  return dispatch => {
    axios.get("/api/going").then(resp => {
      const data = resp.data
      dispatch({
        type: GOING,
        payload: data
      })
    })
  }
}

function getNotGoing() {
  return dispatch => {
    axios.get("/api/notgoing").then(resp => {
      const data = resp.data
      dispatch({
        type: NOT_GOING,
        payload: data
      })
    })
  }
}

function getUser() {
  return dispatch => {
    axios.get("/api/user").then(resp => {
      const data = resp.data
      console.log(data)
      dispatch({
        type: GET_USER,
        payload: data
      })
    })
  }
}
export function useInvite() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.userState.user)
  const going = useSelector(appState => appState.userState.going)
  const notgoing = useSelector(appState => appState.userState.notgoing)
  const sendGoing = user => dispatch(Going(user))
  const sendNotgoing = user => dispatch(notGoing(user))

  useEffect(() => {
    dispatch(getUser())
    dispatch(getGoing())
    dispatch(getNotGoing())
  }, [dispatch])
  return { user, going, notgoing, sendGoing, sendNotgoing }
}
