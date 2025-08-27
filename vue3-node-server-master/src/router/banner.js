/** @format */

const express = require('express')
const bannerRouter = express.Router()
const { bannerData, customStatusCode } = require('../config')

bannerRouter.get('/banner', (req, res) => {
	res.json({
		code: customStatusCode.SUCCESS,
		...bannerData
	})
})

module.exports = bannerRouter
