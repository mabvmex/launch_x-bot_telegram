const ExplorerController = require("../../app/lib/controllers/ExplorerControllers");

describe("Unit Test for ExplorerController", () => {
    test("1.- getExplorerByMission: ", () => {
        const mission = "node";
        const explorerServiceFiltrado =
            ExplorerController.getExplorerByMission(mission);

        expect(explorerServiceFiltrado[0]).toBe("Woopa1");
    });

    test("2.- getExplorersUsernamesByMission", () => {
        const mission = "node";
        const usernamesFiltrado =
            ExplorerController.getExplorersUsernamesByMission(mission);

        expect(usernamesFiltrado[usernamesFiltrado.length - 1]).toBe(
            "ajolonauta15"
        );
    });

    test("3.- getAmountOfExplorersByMission", () => {
        const mission = "node";
        const amountofExplorers =
            ExplorerController.getExplorersAmountByMission(mission);

        expect(amountofExplorers).toBe(10);
    });

    test("4.- FIZZBUZZ > getResultsInNumberOnly", () => {
        const number = 15;
        const getResultWithNumber =
            ExplorerController.getResultInNumberOnly(number);
        expect(getResultWithNumber).toBe("FIZZBUZZ");
    });

    test("5.- FIZZBUZZ > getExplorerByStack", () => {
        const stack = "javascript";
        const getExplorers = ExplorerController.getExplorerByStack(stack);
        expect(getExplorers[0]).toBe("ajolonauta1");
    });

    test("6.- CodeChallenge > getAllVisualExplorers", () => {
        const getExplorers = ExplorerController.getAllVisualExplorers();
        expect(getExplorers[0].name).toBe("Warren");
    });


    test("7.- CodeChallenge > getVisualExplorersCertified", () => {
        const certified = true;
        const emailList = ExplorerController.getVisualExplorersCertified(certified);
        expect(emailList[0]).toBe("Todd@visualpartnership.xyz");
    });

    test("8.- CodeChallenge > getVisualExplorersCredits", () => {
        const visualCredits =
            ExplorerController.getVisualExplorersWithCredits();
        expect(visualCredits[visualCredits.length - 1].credits).toBe(552);
    });
});
