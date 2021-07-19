const router = require('express').Router()
const {
    createComment,
    deleteComment,
    updateComment
} = require('../controllers/comment')

// ========= Public Routes ========= 

// ========= Protected Routes ========= 

router.use(require('../config/auth'))
router.post('/:post_id', checkAuth, createComment)
router.delete('/:post_id/:comment_id', checkAuth, deleteComment)
router.put('/:comment_id/:post_id/:user_id', checkAuth, updateComment)

function checkAuth(req, res, next) {
    return req.user
    ? next()
    : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router