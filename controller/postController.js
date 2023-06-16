const postModel = require('../model/postModel')
const commentModel = require('../model/commentModel')

const getStartPage = (req, res) => {
    postModel.find()
        .populate('owner')
        .sort({creat_at : '-1'})

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
const deleteQuestion = (req, res) => {
    postModel.findByIdAndDelete(req.params.id)
        .then(res.redirect('/'))
        .catch(err => console.log(err))
}


const getEditPage = (req, res) => {

    postModel.findById(req.params.id)
        .then(result => res.render('editPage', {post: result}))
        .catch(err => (console.log(err)))
}

const postEdited = (req, res) => {
    postModel.findByIdAndUpdate({_id: req.params.id})
        .then(result => {
            result.title = req.body.title
            result.desc = req.body.desc
            result.save()
                .then(() =>
                    res.redirect(`/edit_page/${req.params.id}`))
                .catch(err => console.log(err))
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
        }).catch(err =>
    res.render('questionPage', {error: err})
    )


}

const getFullPage = (req, res) => {
    postModel.findById(req.params.id)
        .then(result => {
            commentModel.find()
                .populate('owner')
                .populate('fromPost')
                .then(comments => {



                    res.render('fullPage', {post: result, comments: comments});
                })
                .catch(err => {
                    console.log(err);
                    res.redirect(`/fullPage${req.params.id}`);
                });
        })
        .catch(err => {
            console.log(err);
            res.redirect(`/fullPage${req.params.id}`);
        });
};


const addComment = (req, res) => {

    const postId = req.params.postId;
    const ownerId = req.params.ownerId;
    let postObj = {
        ...req.body,
        owner: ownerId,
        fromPost: postId,
    };


    let newComment = new commentModel(postObj);
    newComment.save()
        .then(() => {
            res.redirect(`/fullPage/${req.body.postId}`)
        }).catch(err =>
        res.render('questionPage', {error : err})

    )


}

const deleteComment = (req, res) => {

    commentModel.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect(`/fullPage/${req.body.postId}`);
        }).catch((err) => {
        console.log(err);
    });
};


const logOut = (req, res) => {
    res.clearCookie('userToken');
    res.render('startPage', {error: ''})
}


module.exports = {
    getStartPage,
    addNewQuestion,
    getMainPage,
    getEditPage,
    postEdited,
    deleteQuestion,
    getFullPage,
    addComment,
    deleteComment


}