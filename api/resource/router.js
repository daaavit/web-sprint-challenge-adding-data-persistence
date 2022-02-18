const express = require('express')
const ResourcesRouter = require('./resource/router')
const server = express()

server.use(express.json())
server.use('/api', ResourcesRouter)
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

router.post('/resources', async (req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router 