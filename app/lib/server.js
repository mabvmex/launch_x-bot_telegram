const ExplorerController = require("./controllers/ExplorerControllers");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "=== FizzBuzz API welcome! ===",
    });
});

app.listen(port, () => {
    console.log(`=== FizzBuzz API in localhost:${port} ===`);
});

app.get("/v1/explorer/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorer/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernames =
        ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({ mission: req.params.mission, usernames: explorersUsernames });
});

app.get("/v1/explorer/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountOfExplorers =
        ExplorerController.getExplorersAmonutByMission(mission);
    res.json({
        mission: req.params.mission,
        amountOfExplorers: amountOfExplorers,
    });
});


module.exports = app;
