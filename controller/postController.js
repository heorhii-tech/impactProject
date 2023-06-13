const postModel = require('../model/postModel')

const getStartPage = (req, res) => {
    postModel.find()

        .then(allPosts => {
            res.render('startPage', {
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
    console.log(postObj)

    let newPost = new postModel(postObj);
    newPost.save()
        .then(() => {
            res.redirect('/')
        }).catch(() => {
        console.log(err)
    })


}

module.exports = {
    getStartPage,
    addNewQuestion


}