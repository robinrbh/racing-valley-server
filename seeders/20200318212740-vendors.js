"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"vendors",
			[
				{
					name: "Porsche4Track",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin lorem nec eros rhoncus venenatis sit amet ac est. Quisque sed fringilla nunc, iaculis commodo est. Morbi eleifend pulvinar scelerisque. Proin convallis velit nisl, id porttitor erat tristique at. Mauris porttitor tortor sit amet elit consectetur, sit amet rutrum nisi cursus. Nam mattis orci vitae metus luctus convallis. Etiam id tempus arcu. Ut euismod odio eu mattis sagittis. Proin sapien neque, viverra at tellus vitae, semper tempor lacus. Etiam ut odio quis nisl pellentesque egestas. Nam dapibus orci eget iaculis ornare. Nunc ante elit, porttitor a mauris sed, imperdiet egestas eros. Morbi mattis tortor euismod venenatis dignissim.",
					email: "p@p.com",
					password: bcrypt.hashSync("p", SALT_ROUNDS),
					imageUrl:
						"https://w7.pngwing.com/pngs/168/25/png-transparent-porsche-911-car-porsche-boxster-cayman-porsche-cayenne-porsche-angle-text-logo-thumbnail.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "TrackBMWs",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin lorem nec eros rhoncus venenatis sit amet ac est. Quisque sed fringilla nunc, iaculis commodo est. Morbi eleifend pulvinar scelerisque. Proin convallis velit nisl, id porttitor erat tristique at. Mauris porttitor tortor sit amet elit consectetur, sit amet rutrum nisi cursus. Nam mattis orci vitae metus luctus convallis. Etiam id tempus arcu. Ut euismod odio eu mattis sagittis. Proin sapien neque, viverra at tellus vitae, semper tempor lacus. Etiam ut odio quis nisl pellentesque egestas. Nam dapibus orci eget iaculis ornare. Nunc ante elit, porttitor a mauris sed, imperdiet egestas eros. Morbi mattis tortor euismod venenatis dignissim.",
					email: "b@b.com",
					password: bcrypt.hashSync("b", SALT_ROUNDS),
					imageUrl:
						"https://images.autowereld.com/high/bmw-logo-1963-92ca35.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("vendors", null, {})
	},
}
