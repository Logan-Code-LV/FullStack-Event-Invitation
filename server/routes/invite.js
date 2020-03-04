const express = require("express")
const router = express.Router()
const axios = require("axios")
const shortid = require("shortid")

const data = {
  user: {},
  going: [],
  notgoing: []
}

router.get("/user", (req, res, next) => {
  axios.get("https://randomuser.me/api/?results=1").then(resp => {
    const obj = resp.data.results[0]
    const user = {
      id: shortid.generate(),
      name: obj.name.first + " " + obj.name.last,
      email: obj.email,
      phone: obj.phone,
      image: obj.picture.large
    }
    data.user = user
    res.json(user)
  })
})

router.post("/going", (req, res, next) => {
  const user = req.body
  data.going.push(user)
  res.json(data.user)
})

router.get("/going", (req, res, next) => {
  res.json(data.going)
})

router.post("/notgoing", (req, res, next) => {
  const user = req.body
  data.notgoing.push(user)
  console.log(data.notgoing)
  res.json(data.user)
})

router.get("/notgoing", (req, res, next) => {
  res.json(data.notgoing)
})

module.exports = router
