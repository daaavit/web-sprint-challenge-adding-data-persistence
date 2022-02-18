const express = require('express')
const ResourcesRouter = require('./resource/router')
const server = express()
const TaskRouter = require('./task/router')


server.use(express.json())
server.use('/api/resources', ResourcesRouter)
server.use("/api/projects", ProjectRouter)
server.use('/api/tasks', TaskRouter)
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server