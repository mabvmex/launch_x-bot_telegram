const fs = require("fs");

class Reader {

    static readJsonFile(path) {
        const rawData = fs.readFileSync(path);
        return JSON.parse(rawData);
    }

}

// console.log(Reader.readJsonFile("explorers.json"));
module.exports = Reader;