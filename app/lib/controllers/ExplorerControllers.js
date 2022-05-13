const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    mission = "node";

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

    static getExplorerByStack(stack) {
        const explorer = Reader.readJsonFile("explorers.json");
        const explorerStack = ExplorerService.getExplorersUsernamesByStack(
            explorer,
            stack
        );
        return explorerStack;
    }

    // ======== CodeChallenge ========

    static getAllVisualExplorers() {
        const visualExplorers = Reader.readJsonFile("visualpartners.json");
        return visualExplorers;
    }

    // static getVisualExplorersCertified(certificado) {
    //     const visualExplorers = Reader.readJsonFile("visualpartners.json");
    //     const explorerCert = ExplorerService.getVisualExplorerByEmail(
    //         visualExplorers,
    //         certificado
    //     );
    //     return explorerCert;
    // }
}

// console.log(ExplorerController.getAllVisualExplorers());
// ExplorerController.getAllVisualExplorers();

// console.log(ExplorerController.getVisualExplorersCertified());
module.exports = ExplorerController;
