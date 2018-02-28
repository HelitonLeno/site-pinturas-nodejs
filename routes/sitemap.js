const express = require('express');
const router = express.Router();

router.get('/sitemap.xml', function (req, res, next) {
    res.header('Content-Type', 'application/xml');
    res.render('sitemap');
});