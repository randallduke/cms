const express = require('express');
const router = express.Router();


router.all('/*', (req, res, next)=>{

    req.app.locals.layout = 'admin';
    next();


});


router.get('/', (req, res)=>{

    res.render('admin/posts/index');

});

router.get('/create', (req, res)=>{

    res.render('admin/posts/create');

});


router.get('/test', (req, res)=>{

    res.render('admin/posts/test');

});


module.exports = router;