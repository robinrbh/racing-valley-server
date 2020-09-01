"use strict"
const Bid = require("../models").bid
const Artwork = require("../models").artwork

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const artwork1 = await Artwork.findOne({
			where: { title: "Digital art" },
		})

		const artwork2 = await Artwork.findOne({
			where: { title: "Traditional art" },
		})

		const artwork3 = await Artwork.findOne({
			where: { title: "Grafiti art" },
		})

		await queryInterface.bulkInsert(
			"bids",
			[
				{
					email: "rhartog@gmail.com",
					amount: 300,
					createdAt: new Date(),
					updatedAt: new Date(),
					artworkId: artwork1.id,
				},
				{
					email: "rhartog@gmail.com",
					amount: 400,
					createdAt: new Date(),
					updatedAt: new Date(),
					artworkId: artwork2.id,
				},
				{
					email: "rhartog@gmail.com",
					amount: 500,
					createdAt: new Date(),
					updatedAt: new Date(),
					artworkId: artwork3.id,
				},
				{
					email: "rbhartog@live.nl",
					amount: 350,
					createdAt: new Date(),
					updatedAt: new Date(),
					artworkId: artwork1.id,
				},
				{
					email: "rbhartog@live.nl",
					amount: 450,
					createdAt: new Date(),
					updatedAt: new Date(),
					artworkId: artwork2.id,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("bids", null, {});
	},
}
