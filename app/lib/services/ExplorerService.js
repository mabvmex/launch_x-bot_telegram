class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernamesInMission = explorersInNode.map(
            (explorers) => explorers.name
        );
        return usernamesInMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInNodeToGetUsernames.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernamesInNode = explorersInNodeToGetUsernames.map(
            (explorersInNodeToGetUsernames) =>
                explorersInNodeToGetUsernames.githubUsername
        );
        return usernamesInNode;
    }

    static getExplorersUsernamesByStack(explorers, stack) {
        const explorers_JSstack = explorers.filter((singleExplorer) =>
            singleExplorer.stacks.includes(stack)
        );

        const usernames_JSstack = explorers_JSstack.map(
            (singleExplorer_JSstack) => singleExplorer_JSstack.githubUsername
        );
        return usernames_JSstack;
    }

    // ======== CodeChallenge ========

    static getVisualExplorerByEmail(visualExplorers, certificado) {
        const explorersInVisual = visualExplorers.filter((explorer) => explorer.haveCertification === certificado);
        const emailInVisual = explorersInVisual.map(
            (explorers) => explorers.email
        );
        return emailInVisual;
    }
}

module.exports = ExplorerService;
