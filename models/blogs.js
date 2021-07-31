const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

class Blog {
    constructor(title, author, img, text){
        this.title = title,
        this.author = author,
        this.img = img,
        this.text = text,
        this.id = uuid.v4()
    }

    toJSON() {
        return({
            title: this.title,
            author: this.author,
            img: this.img,
            text: this.text,
            id: this.id
        })
    }

    async save(){
        const blogs = await Blog.getAll(); 

        blogs.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'blogs.json'),
                JSON.stringify(blogs),
                (err) => {
                    if(err) {
                        reject(err)
                    }
                    else{
                        resolve()
                    }
                }
            )
        })
    }



    static getAll(){
        return new Promise((resolve, reject) => {   
            fs.readFile(
                path.join(__dirname, '..', 'data', 'blogs.json'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }



    static async getId(id) {
        const blogs = await Blog.getAll(); 
        return blogs.find(item => item.id === id)
    }


    static async getLastPost(){
        const blogs = await Blog.getAll(); 
        const lastPost = blogs.length - 1
        return blogs[lastPost]
    }

}


module.exports = Blog