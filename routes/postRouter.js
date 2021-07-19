const router = require('express').Router()
const postCtrl = require('../controllers/post')

// ========= Public Routes ========= 

router.get('/:page', postCtrl.getRecent)
router.get('/questions/search', postCtrl.searchPosts)

// ========= Protected Routes ========= 

router.use(require('../config/auth'))
router.get('/details/:id', postCtrl.getPostById)
router.post('/', checkAuth, postCtrl.createPost)
router.put('/:id', checkAuth, postCtrl.updatePost)
router.delete('/:id', checkAuth, postCtrl.deletePost)
router.get('/user/:user_id', postCtrl.getPostsByUserId)


function checkAuth(req, res, next) {
    return req.user
        ? next()
        : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router