const ExplorerController = require("../../app/lib/controllers/ExplorerControllers");
const ExplorerService = require("./../../app/lib/services/ExplorerService");
const Reader = require("./../../app/lib/utils/Reader");
const explorer = Reader.readJsonFile("explorers.json");

describe("Unit Test for controllerService", () => {
    test("1.- getExplorerByMission: ", () => {
        const mission = "node";
        const explorerServiceFiltrado = ExplorerService.filterByMission(
            explorer,
            mission
        );
        
        expect(explorerServiceFiltrado[0]).toBe("Woopa1");
    });

    test("2.- getExplorersUsernamesByMission", () => {
        const mission = "node";
        const usernamesFiltrado = ExplorerService.getExplorersUsernamesByMission(
            explorer,
            mission
        );

        expect(usernamesFiltrado[usernamesFiltrado.length-1]).toBe("ajolonauta15");
    });

    test("3.- getAmountOfExplorersByMission", () => {
        const mission = "node";
        const amountofExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorer,
            mission
        );

        expect(amountofExplorers).toBe(10);
    });

    test("4.- FIZZBUZZ > getResultsInNumberOnly", () => {
        const number = 15;
        const getResultWithNumber = ExplorerController.getResultInNumberOnly(
            number
        );
        expect(getResultWithNumber).toBe("FIZZBUZZ");
    });

    test("5.- FIZZBUZZ > getExplorerByStack", () => {
        const stack = "javascript";
        const getExplorers = ExplorerController.getExplorerByStack(
            stack
        );
        expect(getExplorers[0]).toBe("ajolonauta1");
    });


    
});
