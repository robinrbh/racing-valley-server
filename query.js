const Car = require("./models").car
const Racer = require("./models").racer
const Booking = require("./models").booking
const Vendor = require("./models").vendor
const Ratings = require("./models").rating
const Track = require("./models").track

const findAllCars = async () => {
	try {
		const cars = await Car.findAll({
			include: [{ model: Vendor }],
		})
		console.log(cars)
	} catch (e) {
		console.log("error", e.message)
	}
}

const findOneCar = async () => {
	try {
		const car = await Car.findByPk(1, {
			include: [{ model: Vendor }],
		})
		console.log(car)
	} catch (e) {
		console.log("error", e.message)
	}
}

const findDetailsVendor = async () => {
	try {
		const vendor = await Vendor.findByPk(1, {
			include: [Car, Ratings],
		})
		console.log(vendor.ratings)
	} catch (e) {
		console.log("error", e.message)
	}
}

const findDetailsVendorBookings = async () => {
	try {
		const vendor = await Vendor.findByPk(1, {
			include: [
				{
					model: Car,
					include: [{ model: Booking }],
				},
			],
		})

		// console.log(vendor)

		const cars = vendor.cars
		// console.log("CAAAAAARS", cars)

		const bookings = cars.flatMap((car) => car.bookings)
		// const tracks = cars.flatMap((track) => track.tracks)

		// console.log(tracks)

		const bookingsWithCar = bookings.map((book) => ({
			...book,
			carBrand: cars.find((car) => car.id === book.carId).brand,
			carModel: cars.find((car) => car.id === book.carId).model,
			// location: cars.find((track) => track.id === book.trackId).name,
		}))

		console.log(bookingsWithCar)
	} catch (e) {
		console.log("error", e.message)
	}
}

const findRacerDetailsBookings = async () => {
	try {
		const racer = await Racer.findByPk(1, {
			include: [Booking],
		})
		console.log(racer.bookings)
	} catch (e) {
		console.log("error", e.message)
	}
}

// Find a list with all the cars
// findAllCars();

// Find one car and its details
// findOneCar()

// Find details of one Vendor including Cars and Reviews
// findDetailsVendor()

// !! Find details of one Vendor including Cars and Bookings
findDetailsVendorBookings()

// !! Find details of one Racer including his bookings
// findRacerDetailsBookings()
