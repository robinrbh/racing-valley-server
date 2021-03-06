const Racer = require("../models").racer
const Car = require("../models").car
const Vendor = require("../models").vendor
const Location = require("../models").track
const Booking = require("../models").booking

const { toData } = require("./jwt")

async function auth(req, res, next) {
	const auth = req.headers.authorization && req.headers.authorization.split(" ")

	if (!auth || !auth[0] === "Bearer" || !auth[1]) {
		res.status(401).send({
			message:
				"This endpoint requires an Authorization header with a valid token",
		})
	}

	try {
		const data = toData(auth[1])
		const racer = await Racer.findByPk(data.racerId, {
			include: [
				{
					model: Booking,
					include: [
						{ model: Car, include: { model: Vendor } },
						{ model: Location },
					],
				},
			],
		})

		if (!racer) {
			return res.status(404).send({ message: "Racer does not exist" })
		}
		req.racer = racer

		return next()
	} catch (error) {
		console.log("ERROR IN AUTH MIDDLEWARE", error)

		switch (error.name) {
			case "TokenExpiredError":
				return res
					.status(401)
					.send({ error: error.name, message: error.message })

			case "JsonWebTokenError":
				return res
					.status(400)
					.send({ error: error.name, message: error.message })

			default:
				return res.status(400).send({
					message: "Something went wrong, sorry",
				})
		}
	}
}

module.exports = auth
