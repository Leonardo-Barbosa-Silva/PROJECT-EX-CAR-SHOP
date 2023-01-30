const jwt = require('jsonwebtoken')


// Simulate a database with only one admin user
const db = [
    {
        username: 'admin_user',
        password: 'admin'
    }
]



module.exports = {

    login: async (req, res) => {
        try {
            const { username, password } = req.body

            if (!username) {
                return (
                    res.status(400).json({ message: 'Please add a username' })
                )
            }
            if (!password) {
                return (
                    res.status(400).json({ message: 'Please add a password' })
                )
            }

            const user = db.find( (user) => user.username === username && user.password === password )

            if (!user) {
                return (
                    res.status(400).json({ message: 'User not found' })
                )
            }

            const token = await jwt.sign({ username }, process.env.JWT_SECRET, {
                expiresIn: '90d'
            })

            res.status(200).json({
                message: 'Successfully login admin user',
                username: user.username,
                token
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}