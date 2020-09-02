"use strict"
const Vendor = require("../models").vendor

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const vendor1 = await Vendor.findOne({
			where: { businessName: "Porsche4Track" },
		})

		const vendor2 = await Vendor.findOne({
			where: { businessName: "TrackBMWs" },
		})

		await queryInterface.bulkInsert(
			"ratings",
			[
				{
					comment: "Great company, those Porsches are fast!!",
					rating: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor1.id,
				},
				{
					comment: "Really good company, those BMW's are really fun to drive.",
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
					vendorId: vendor2.id,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("ratings", null, {})
	},
}
