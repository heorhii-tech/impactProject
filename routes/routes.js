const express = require('express');
const postcontrl = require('../controller/postController');
const midle = require('../middlewere/middlewere');
const contrl = require('../controller/userController');

const route = express.Router();



route.get('/',midle.checkHomeTkn,postcontrl.getStartPage);
route.get('/loginPage',midle.checkHomeTkn, contrl.getLoginPage)
route.post('/login', contrl.postLoginPage)

route.get('/mainPage',midle.checkToken,postcontrl.getMainPage)

route.get('/signupPage',midle.checkHomeTkn, contrl.getSignPage)
route.post('/signup',contrl.getSignUpFunction)

route.get('/questionPage',midle.checkToken, contrl.getQuestionPage)
route.post('/addNewQuestion',midle.checkToken, postcontrl.addNewQuestion)

route.get('/logout', contrl.logOut)


module.exports = route;