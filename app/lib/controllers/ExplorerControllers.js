const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorer = Reader.readJsonFile("explorers.json");
        const explorerServiceFiltrado = ExplorerService.filterByMission(
            explorer,
            mission
        );
        return explorerServiceFiltrado;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorer = Reader.readJsonFile("explorers.json");
        const usernamesFiltrado =
            ExplorerService.getExplorersUsernamesByMission(explorer, mission);

        return usernamesFiltrado;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const amountofExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            mission
        );
        return amountofExplorers;
    }

    static getResultInNumberOnly(number) {
        const userResult = FizzBuzzService.applyValidationInNumber(number);
        return userResult;
    }
}

// ExplorerController.getExplorerByMission("node");
// ExplorerController.getExplorersUsernamesByMission("node");
// ExplorerController.getExplorersAmonutByMission("node");
// console.log(ExplorerController.getResultInNumberOnly(15));

module.exports = ExplorerController;
