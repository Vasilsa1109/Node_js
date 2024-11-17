const express = require('express');
const router = express.Router();

    router.get('/', (req, res) => {
        res.render('registraion', {
            title: 'Registration page'
        })
    });

module.exports = router;