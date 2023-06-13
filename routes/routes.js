const express = require('express');
const route = express.Router();

const contrl = require('../controller/userController');

route.get('/', contrl.getAuthPage);
route.get('/loginPage', contrl.getLoginPage)
//route.post('/login', contrl.postLoginPage)

route.get('/signupPage', contrl.getSignPage)
route.post('/signup',contrl.getSignUpFunction)

route.get('/addQuestion', contrl.getQuestionPage)


module.exports = route;