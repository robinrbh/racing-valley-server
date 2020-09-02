"use strict"
const Vendor = require("../models").vendor

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const vendor1 = await Vendor.findOne({
			where: { email: "p@p.com" },
		})

		const vendor2 = await Vendor.findOne({
			where: { email: "b@b.com" },
		})

		await queryInterface.bulkInsert(
			"cars",
			[
				{
					brand: "Porsche",
					model: "Cayman GT4",
					bhp: 385,
					description:
						"This GT4 delivers 385 bhp and is rear-wheel drive, mid-engined.",
					gearbox: "6-speed manual",
					imageUrl:
						"https://cnet1.cbsistatic.com/img/VgERQKJ8Z9C7QpkpS3zau6SP1uI=/1200x675/2020/06/24/bb068e63-74b7-478f-a3fa-5b8e2a41df52/2020-porsche-718-cayman-gt4-017.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor1.id,
				},
				{
					brand: "Porsche",
					model: "911 GT3",
					bhp: 500,
					description:
						"A Porsche 991 911 GT3 delivers 500 bhp and is rear-wheel drive, rear-engined.",
					gearbox: "6-speed manual",
					imageUrl:
						"https://www.motorward.com/wp-content/images/2013/03/porsche-gt3-action.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor1.id,
				},
				{
					brand: "Porsche",
					model: "911 GT3 RS",
					bhp: 510,
					description:
						"This GT3 RS delivers 510 bhp and is rear-wheel drive, rear-engined.",
					gearbox: "7-speed PDK",
					imageUrl:
						"https://autostrada.tv/wp-content/uploads/2020/08/Manthey-Racing-Porsche-911-GT3-RS.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor1.id,
				},
				{
					brand: "BMW",
					model: "M3",
					bhp: 400,
					description:
						"A BMW M3 delivers 400 bhp and is rear-wheel drive, front-engined.",
					gearbox: "6-speed manual",
					imageUrl:
						"https://i.pinimg.com/originals/15/40/0a/15400a1edbec3e247806620f509c50fc.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor2.id,
				},
				{
					brand: "BMW",
					model: "M2",
					bhp: 450,
					description:
						"This M2 delivers 450 bhp and is rear-wheel drive, front-engined.",
					gearbox: "8-speed DCT",
					imageUrl:
						"https://thumbor.pijper.io/jPK6L9FmvN3eckkLTLFSmw0YgVY=/1290x726/center/middle/https://cdn.pijper.io/source/autobahn/6a595060d9_P90298666_highRes_the-new-bmw-m2-compe.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor2.id,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("cars", null, {})
	},
}
