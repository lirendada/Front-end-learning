/** @format */

const express = require('express')
const router = express.Router()

const bannerRouter = require('./banner')
const userRouter = require('./user')
const articleRouter = require('./article')

router.use('/api', bannerRouter, userRouter, articleRouter)

module.exports = router
