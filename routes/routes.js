const express = require('express');
const route = express.Router();

const contrl = require('../controller/userController');

route.get('/', contrl.getAuthPage);
route.get('/login', contrl.getLoginPage)
//route.post('/login', contrl.postLoginPage)

route.get('/signup', contrl.getSignPage)
route.get('/addQuestion', contrl.getQuestionPage)


module.exports = route;