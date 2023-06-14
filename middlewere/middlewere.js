const jwt = require('jsonwebtoken');

const checkHomeTkn = (req, res, next) => {
    let token = req.cookies.userToken;
    if (!token) {
        res.locals.user = false;
        next()
    } else {
        res.redirect('/mainPage')
    }
}

const checkToken = (req, res, next) => {
    let token = req.cookies.userToken;
    if (token) {
        jwt.verify(token, process.env.JWT_TEXT, async (err, userInfo) => {
            if (err) {
                console.log(err)
            } else {
                res.locals.user = userInfo.infoForToken.userName;
                res.locals.email = userInfo.infoForToken.email;
                res.locals.userId = userInfo.infoForToken.id;
                next();
            }
        })
    } else {
        res.locals.user = false;
        res.render('startPage', {userId: ""}, )
    }
}

module.exports = {
    checkHomeTkn,
    checkToken


}
