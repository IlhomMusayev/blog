const { Router } = require('express')
const Blog = require('../models/blogs')

const router = Router()

router.get('/', async (req, res) => {
    const blogs = await Blog.getAll()
    res.render('blogs', {
        title: "Blog page",
        isBlogs: true,
        blogs
    })
})



router.get('/:id', async (req, res) => {
    const blog = await Blog.getId(req.params.id)

    res.render('blog', {
        title: `blog ${blog.title}`,
        blog
    })
})


module.exports = router