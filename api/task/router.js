// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.getAll()
        .then((task) => {
            res.status(200).json(task)
        })
        .catch(next)
})


module.exports = router 