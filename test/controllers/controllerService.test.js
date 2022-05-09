const ExplorerService = require("./../../app/lib/services/ExplorerService");
const Reader = require("./../../app/lib/utils/Reader");

describe("Unit Test for controllerService", () => {
    test("1.- getExplorerByMission: ", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        const mission = "node";
        const explorerServiceFiltrado = ExplorerService.filterByMission(
            explorer,
            mission
        );
        
        expect(explorerServiceFiltrado[0]).toBe("Woopa1");
    });

    test("2.- getExplorersUsernamesByMission", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        const mission = "node";
        const usernamesFiltrado = ExplorerService.getExplorersUsernamesByMission(
            explorer,
            mission
        );

        expect(usernamesFiltrado[usernamesFiltrado.length-1]).toBe("ajolonauta15");
    });

    test("3.- getAmountOfExplorersByMission", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        const mission = "node";
        const amountofExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorer,
            mission
        );

        expect(amountofExplorers).toBe(10);
    });

    
});
