const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const authMiddleware = require("../auth/middleware")
const Car = require("../models/").car
const Vendor = require("../models").vendor

const { SALT_ROUNDS } = require("../config/constants")
const auth = require("../auth/middleware")

const router = new Router()

router.get("/", async (req, res) => {
	const cars = await Car.findAll()

	res.send(cars)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params
	const carById = await Car.findByPk(parseInt(id))
	if (!carById) {
		return res.status(400).send("Car does not exist")
	}
	if (isNaN(parseInt(id))) {
		return res.status(400).send("Id is not a number")
	}

	res.send(carById)
})

router.patch("/:id", async (req, res) => {
	const { id } = req.params
	const artwork = await Artwork.findByPk(parseInt(id))
	const updatedHearts = await artwork.increment({
		hearts: 1,
	})

	return res.status(200).send(updatedHearts)
})

module.exports = router