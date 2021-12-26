// build your `Resource` model here
const db = require("../../data/dbConfig");

// Example of the response body: {"resource_id":1,"resource_name":"foo","resource_description":null}

const get = () => {
    return db("resources")
}

const create = async (body) => {
    const [resource_id] = await db("resources").insert(body)
    return db("resources").where({ resource_id }).first()
}

const getById = async (resource_id) => {
    return db("resources").where({ resource_id }).first()
}

module.exports = {
    get,
    create,
    getById
}
