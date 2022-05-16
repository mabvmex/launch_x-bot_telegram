const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    mission = "node";

    // ======== Refactoring ========

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

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const amountofExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            mission
        );
        return amountofExplorers;
    }

    // ======== FIZZBUZZ ========

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

    static getVisualExplorersCertified(certified) {
        const visualExplorers = Reader.readJsonFile("visualpartners.json");
        const explorerCertificado = ExplorerService.getVisualExplorerByEmail(
            visualExplorers,
            certified
        );

        return explorerCertificado;
    }

    static getVisualExplorersWithCredits() {
        const visualExplorers = Reader.readJsonFile("visualpartners.json");
        const explorersWithCredits =
            ExplorerService.getVisualExplorerByCredits(visualExplorers);
        return explorersWithCredits;
    }
}


module.exports = ExplorerController;
