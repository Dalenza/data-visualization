const fs = require("fs")

/**
 * returns an object representation of a json file
 * @param {String} path - path to json file 
 * @returns {Object} an object representation of the json file
 */
function jsonRead(path) {
    const data = fs.readFileSync(path, { encoding: "utf-8" }, (err, jsonString) => {
        if (err) {
            console.log("error")
            return
        }
    })
    return JSON.parse(data)
}

module.exports = {
    jsonRead
}