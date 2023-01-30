const mongoose = require('mongoose')

const USER_NAME = process.env.USER_NAME
const USER_PASSWORD = encodeURIComponent(process.env.USER_PASSWORD)


const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true)

        const connection = await mongoose.connect(
            `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@car-shop-cluser.owa1yw9.mongodb.net/CARS?retryWrites=true&w=majority`
        )

        console.log(`Successfully connect on ${connection.connection.host}`.grey.underline)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}



module.exports = connectDB