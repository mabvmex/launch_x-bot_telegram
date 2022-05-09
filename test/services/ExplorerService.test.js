const Reader = require("./../../app/lib/utils/Reader");
const ExplorerService = require("../../app/lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorers.json");

describe("Unit test for 'ExplorerService' ", () => {
    test("1.- Read the Json file from ExplorerService file", () => {
        expect(explorers[0].mission).toBe("node");
    });

    test("2.- Read filterByMission", () => {
        const explorerByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorerByMission[9]).toBe("Woopa15");
    });

    test("3.- For getAmountOfExplorersByMission", () => {
        const numberOfExplores = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(numberOfExplores).toBe(10);
    });

    test("4.- for getExplorersUsernameByMission", () => {
        const exploresUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(exploresUsernames[0]).toBe("ajolonauta1");
    });
});