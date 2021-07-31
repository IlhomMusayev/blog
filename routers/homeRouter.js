const { Router } = require('express')
const Blog = require('../models/blogs');

const router = Router()

router.get('/', async (req, res) => {
    const lastPost = await Blog.getLastPost()
    res.render('home', {
        title: "Home page",
        isHome: true,
        lastPost
    })
})


module.exports = router