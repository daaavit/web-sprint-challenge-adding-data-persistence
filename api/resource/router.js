// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.get('/resources', (req, res, next) => {
    Resources.getAll()
    .then(resources => {
        res.status(200).json(resources)
    }).catch(next)
})

module.exports = router