const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
// eslint-disable-next-line no-unused-vars
const FizzBuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorer = Reader.readJsonFile("explorers.json");
        const explorerServiceFiltrado = ExplorerService.filterByMission(
            explorer,
            mission
        );
        console.log(explorerServiceFiltrado);
        return explorerServiceFiltrado;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorer = Reader.readJsonFile("explorers.json");
        const usernamesFiltrado = ExplorerService.getExplorersUsernamesByMission(
            explorer,
            mission
        );
        console.log(usernamesFiltrado);

        return usernamesFiltrado;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const amountofExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        console.log(amountofExplorers);
        return amountofExplorers;
    }
}

// ExplorerController.getExplorerByMission("node");
// ExplorerController.getExplorersUsernamesByMission("node");
// ExplorerController.getExplorersAmonutByMission("node");

module.exports = ExplorerController;
