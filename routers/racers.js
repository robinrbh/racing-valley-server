const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const authMiddleware = require("../auth/middleware")
const Racer = require("../models/").racer

const { SALT_ROUNDS } = require("../config/constants")
const auth = require("../auth/middleware")

const router = new Router()

router.get("/", async (req, res) => {
	const racers = await Racer.findAll()

	res.send(racers)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params
	try {
		const racerById = await Racer.findByPk(parseInt(id))
		if (!racerById) {
			return res.status(400).send("Racer does not exist")
		}
		if (isNaN(parseInt(id))) {
			return res.status(400).send("Id is not a number")
		}

		res.send(racerById)
	} catch (err) {
		console.log(err)
	}
})

module.exports = router
