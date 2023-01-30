const mongoose = require('mongoose')


const carsSchema = mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true
        },
        url: {
            type: 'String',
            required: true
        }
    }, 
    {
        timestamps: true
    }
)



module.exports = mongoose.model('cars', carsSchema)