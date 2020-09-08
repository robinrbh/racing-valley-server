const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const racerAuthMiddleware = require("../auth/racerAuthMiddleware")
const Car = require("../models/").car
const Racer = require("../models").racer
const Vendor = require("../models").vendor
const Booking = require("../models").booking
const Location = require("../models").track

const { SALT_ROUNDS } = require("../config/constants")
const auth = require("../auth/middleware")
const racer = require("../models/racer")

const router = new Router()

router.get("/", async (req, res) => {
	const cars = await Car.findAll({
		include: [
			{
				include: { model: Vendor },
				model: Booking,
				include: { model: Racer },
			},
		],
	})
	res.send(cars)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params
	const carById = await Car.findByPk(parseInt(id), {
		include: [Location],
	})
	if (!carById) {
		return res.status(400).send("Car does not exist")
	}
	if (isNaN(parseInt(id))) {
		return res.status(400).send("Id is not a number")
	}

	res.send(carById)
})

router.post("/:id/book", racerAuthMiddleware, async (req, res) => {
	const { id } = req.params
	const car = await Car.findByPk(parseInt(id))
	const { trackId, racerId } = req.body

	console.log("car", car)

	try {
		const booking = await Booking.create({
			carId: car.id,
			racerId,
			trackId,
		})
		return res.status(201).send({ message: "Booking made", booking })
	} catch (e) {
		console.log(e)
	}
})

// router.patch("/:id", async (req, res) => {
// 	const { id } = req.params
// 	const artwork = await Artwork.findByPk(parseInt(id))
// 	const updatedHearts = await artwork.increment({
// 		hearts: 1,
// 	})

// 	return res.status(200).send(updatedHearts)
// })

module.exports = router
