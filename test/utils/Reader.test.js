const fs = require("fs");

describe("Unit Test for Reader Class", () => {
    test("1.- Access the \"explorers.json\" file and read its properties", () => {
        const rawData = fs.readFileSync("explorers.json");
        const explorersData = JSON.parse(rawData);

        expect(explorersData[0].mission).toBe("node");
    });
});
