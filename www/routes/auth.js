var express = require('express');
var passport = require('../passport');
var router = express.Router();

// TODO: change to promises
router.post('/login', function(req, res, next) {
    passport.authenticate('ldapauth', function(err, user, info, status) {
        if (err) { return next(err); }
        if (!user) { return res.status(status).json(info); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.status(200).json({ "message": "Success" });
        });
    })(req, res, next);
});

router.get('/profile', function(req, res) {
    if (req.user)
        res.status(200).json({'you': req.user})
    else
        res.status(400).json({'message': 'Need to login'})
});

router.get('/logout', function(req, res) {
    req.logout()
    res.status(200).json()
});

module.exports = router;
