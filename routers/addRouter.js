const { Router } = require('express')
const Blogs = require('../models/blogs');

const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: "Add page",
        isAdd: true
    })
})


router.post('/', async (req, res) => {
    const blogs = new Blogs(req.body.title, req.body.author, req.body.img, req.body.text)
    console.log(req.body.titel);
    blogs.save()
    res.redirect('/blogs')

})


module.exports = router