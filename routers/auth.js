const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const authMiddleware = require("../auth/middleware")
const Racer = require("../models/").racer
const Vendor = require("../models/").vendor
const { SALT_ROUNDS } = require("../config/constants")

const router = new Router()

router.post("/login", async (req, res, next) => {
	try {
		const { email, password, isRacer } = req.body

		if (!email || !password) {
			return res
				.status(400)
				.send({ message: "Please provide both email and password" })
		}

		if (isRacer === "1") {
			const racer = await Racer.findOne({ where: { email } })

			if (!racer || !bcrypt.compareSync(password, racer.password)) {
				return res.status(400).send({
					message: "Racer with that email not found or password incorrect",
				})
			}

			delete racer.dataValues["password"] // don't send back the password hash
			const token = toJWT({ racerId: racer.id })
			return res.status(200).send({ token, ...racer.dataValues })
		} else {
			const vendor = await Vendor.findOne({ where: { email } })
			if (!vendor || !bcrypt.compareSync(password, vendor.password)) {
				return res.status(400).send({
					message: "Vendor with that email not found or password incorrect",
				})
			}
			delete vendor.dataValues["password"]

			const token = toJWT({ vendorId: vendor.id })

			return res.status(200).send({ token, ...vendor.dataValues })
		}
	} catch (error) {
		console.log(error)
		return res.status(400).send({ message: "Something went wrong, sorry" })
	}
})

router.post('/signup', async (req, res) => {
  const { isRacer, name, email, password } = req.body;
  if (!email || !password || !name) {
    return res
      .status(400)
      .send({ message: 'Please provide an email, password and a name' });
  }
  try {
    if (isRacer === 1) {
      const newRacer = await Racer.create({
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        name,
      });

      delete newRacer.dataValues['password']; // don't send back the password hash

      const token = toJWT({ racerId: newRacer.id });

      const message = 'A new Racer account is created for you';
      res
        .status(201)
        .json({ token, ...newRacer.dataValues, message });
    } else {
      const newVendor = await Vendor.create({
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        name,
      });

      delete newVendor.dataValues['password'];

      const token = toJWT({ vendorId: newVendor.id });
      const message = 'A new Vendor account is created for you';
      res.status(201).json({ token, ...newVendor.dataValues, message });
    }
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res
        .status(400)
        .send({ message: 'There is an existing account with this email' });
    }

    return res.status(400).send({ message: 'Something went wrong, sorry' });
  }
});


// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
	// don't send back the password hash
	delete req.user.dataValues["password"]
	res.status(200).send({ ...req.user.dataValues })
})

module.exports = router
