const db = require('../../data/dbConfig')

async function getAll () {
    return db('resources');
}

function getAllById (id) {
    return db('resources')
        .where('resource_id', id)
        .first();
}

async function insert (resource) {
    const [id] = await db('resources')
        .insert(resource);
    return getAllById(id)
}

module.exports = { 
    getAll, 
    insert 
}