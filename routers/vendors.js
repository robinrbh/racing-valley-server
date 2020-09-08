const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const vendorAuthMiddleware = require("../auth/vendorAuthMiddleware")
const Car = require("../models/").car
const Vendor = require("../models").vendor
const Racer = require("../models").racer
const Booking = require("../models").booking
const Location = require("../models").track
const Ratings = require("../models").rating

const { SALT_ROUNDS } = require("../config/constants")
const auth = require("../auth/middleware")

const router = new Router()

router.get("/", async (req, res) => {
	const vendors = await Vendor.findAll()

	res.send(vendors)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params
	try {
		const vendorById = await Vendor.findByPk(parseInt(id), {
			include: [
				{ model: Car, include: [{ model: Location }] },
				{ model: Ratings },
			],
		})
		if (!vendorById) {
			return res.status(400).send("Vendor does not exist")
		}
		if (isNaN(parseInt(id))) {
			return res.status(400).send("Id is not a number")
		}

		res.send(vendorById)
	} catch (err) {
		console.log(err)
	}
})

router.patch("/:id/", async (req, res) => {
	const { id } = req.params
	console.log("req.params", req.params)

	const { newLogo } = req.body
	console.log("req.body", req.body)
	const vendor = await Vendor.findByPk(parseInt(id))

	try {
		const updatedLogo = await vendor.update({
			...vendor,
			imageUrl: newLogo,
		})
		return res.status(201).send({ message: "Logo updated", updatedLogo })
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
