const postModel = require('../model/postModel')

const getStartPage = (req, res) => {
    postModel.find()
        .populate('owner')

        .then(allPosts => {


            res.render('startPage', {
                posts: allPosts
            })
        })
        .catch(err => {
            console.log(err);
        })
}
const getMainPage = (req, res) => {
    postModel.find()

        .then(allPosts => {
            res.render('mainPage', {
                posts: allPosts
            })
        })
        .catch(err => {
            console.log(err);
        })
}

const addNewQuestion = (req, res) => {
    let postObj = {
        ...req.body,
        owner: req.params.id
    };


    let newPost = new postModel(postObj);
    newPost.save()
        .then(() => {
            res.redirect('/')
        }).catch(() => {
        console.log(err)
    })


}
const logOut = (req, res) => {
    res.clearCookie('userToken');
    res.render('startPage', {error: ''})
}

module.exports = {
    getStartPage,
    addNewQuestion,
    getMainPage


}