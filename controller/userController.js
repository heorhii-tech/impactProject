const getAuthPage = (req,res)=>{
    res.render('startPage')
}
const getLoginPage = (req,res)=>{
res.send('hello')
}
const getSignPage = (req,res)=>{
    res.send('hello')
}
const getQuestionPage = (req,res)=>{
    res.send( ' hello')
}

module.exports= {
    getAuthPage,
    getLoginPage,
    getSignPage,
    getQuestionPage
}