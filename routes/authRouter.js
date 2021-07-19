const express = require('express')
const {
    getTopUsers,
    register,
    login,
    updateUser
} = require('../controllers/auth')

// Don't mix logic with imports
const router = express.Router()

/*---------- Public Routes ----------*/

router.get('/', getTopUsers)
router.post('/signup', register)
router.post('/login', login)

// ========= Protected Routes =========
// careful lazy loading like this on line 25. I'm not sure if this is
// a solid concern in your case but I've experienced major bugs and performance
// issues both at work and personally from loading a module within
// logic. There are times where the import isn't fast enough to keep up with the
// rest of the script.

router.use(require('../config/auth'))
router.put('/:id', checkAuth, updateUser)

function checkAuth(req, res, next) {
    return req.user
        ? next()
        : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router
