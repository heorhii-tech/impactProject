const getAuthPage = (req,res)=>{
    res.render('startPage')
}
const getLoginPage = (req,res)=>{
res.render('logInPage')
}

//const postLoginPage = (req,res)=>{
//   // Check if this user is already in the DB.
//    let existedUser = await userModel.findOne({email: req.body.email});
//     if(!existedUser) {
//        res.render('signup', {
//            error: "user is not exist. So signup first please!",
//            success: ""
//        })
//     } else {
//        let isCorrectPass = bcrypt.compareSync(req.body.password, existedUser.password);
//        if(!isCorrectPass) {
//            res.render('signin', {
//                error: "user password is not correct!",
//                success: ""
//            })
//        } else {
//            let infoForToken = {
//                id: existedUser._id,
//                name: existedUser.userName,
//                email: existedUser.email
//           }
//                  let userToken = jwt.sign({infoForToken}, process.env.JWT_TEXT);
//            res.cookie("userToken", userToken, {httpOnly: true});
//            res.redirect('/')
//        }
//    }
//}

const getSignPage = (req,res)=>{
    res.send('hello')
}
const getQuestionPage = (req,res)=>{
    res.send( ' hello')
}

module.exports= {
    getAuthPage,
    getLoginPage,
//    postLoginPage,
    getSignPage,
    getQuestionPage
}