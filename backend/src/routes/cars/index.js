const router = require('express').Router()
const { getCars, setCar } = require('../../controllers/cars')



router.get('/', getCars)
router.post('/', setCar)


module.exports = router