// this is where all our functions lie to work with our mockdata
//this is the backend of our app 
// we will write an endpoint, that will call getallposts, then will take to date, then get a result. aka a res. 

let mockData = require('../mockData.json')
let id = 101;

module.exports = {
    getAllPosts(req, res) {
        // console.log({ mockData })
        res.status(200).send(mockData);
    },
    addPost(req, res) {
        let { name, title, content, image } = req.body;
        mockData.unshift({
            id: id,
            name: name,
            title: title,
            content: content,
            image: image
        })
        id++;
        res.status(200).send(mockData[0])
    },
    editPost(req, res) {
        let { id } = req.params;
        let { name, title, content, image } = req.body;
        let i = mockData.indexOf(post => +post.id === +id)
        mockData[i] = {
            id: id,
            name: name,
            title: title,
            content: content,
            image: image
        };
        res.status(200).send(mockData[i])
    },
    deletePost(req, res) {
        let { id } = req.params
        let i = mockData.indexOf(post => +post.id === +id)
        mockData.splice(i, 5)
        res.status(200).send(mockData)
    }
}
