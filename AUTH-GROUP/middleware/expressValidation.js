const {body} = require('express-validator')
const validation =[
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'password must be a least 6 characters').isLength(6).isAlphanumeric(),
    
]
module.exports = validation