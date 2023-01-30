const router = require('express').Router()
const carsRoutes = require('./cars')
const usersRoutes = require('./users')


router.use('/v1/api/cars', carsRoutes)
router.use('/v1/api/users', usersRoutes)






module.exports = router