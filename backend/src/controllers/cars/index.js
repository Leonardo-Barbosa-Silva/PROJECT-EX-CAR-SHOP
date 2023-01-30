const CarsModel = require('../../models/cars')


module.exports = {

    getCars: async (req, res) => {
        try {
            const cars = await CarsModel.find()

            if (!cars) {
                return res.status(404).json({ message: 'Cars not found' })
            }

            res.status(200).json({
                message: 'Successfully GET cars',
                items: cars
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    },

    setCar: async (req, res) => {
        try {
            const { name, url } = req.body

            if (!name || !url) {
                return res.status(400).json({ message: 'Please add "name" and "url" fields' })
            }

            const carCreated = await CarsModel.create({
                name,
                url
            })

            if (!carCreated) {
                return res.status(400).json({ message: 'Invalid input car data' })
            }

            res.status(201).json({
                message: 'Successfully created car',
                item: carCreated
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}