const express = require('express');
const fs = require('fs');
exports.signup = async (req, res, next) => {
    fs.readFile('../FrontEnd/signup.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading signup page');
            return next(err);
        }
        res.send(data);
    });
};