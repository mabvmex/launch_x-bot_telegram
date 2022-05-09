class ExplorerService {
    // mission = "node";
  
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

}

module.exports = ExplorerService;
