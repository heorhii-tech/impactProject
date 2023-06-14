const postModel = require('../model/postModel')

const getStartPage = (req, res) => {
    postModel.find()
        .populate("owner")
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
//edit question
const getEditpage = (req,res)=>{
    postModel.findById({_id: req.params.id})
    .then(result=>{
        console.log(result)
        res.render('editQuestionPage',{result})})
        .catch(err=>console.log(err))
}
const postEdited = (req,res)=>{
    postModel.findByIdAndUpdate({_id: req.params.id})
    .then(result =>{
        result.title = req.body.title
        result.desc = req.body.desc
        result.save()
        .then(()=>
        res.redirect('/'))
        .catch(err=>console.log(err))
    })

}

const deleteQuestion = (req,res)=>{
     postModel.findByIdAndDelete({_id: req.params.id})
        .then(result=> res.redirect('startPage'))
        .catch(err=>console.log(err))
}

module.exports = {
    getStartPage,
    addNewQuestion,
    getEditpage,
    postEdited,
    deleteQuestion

}