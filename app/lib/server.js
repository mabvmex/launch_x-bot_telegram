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
    console.log(`=== API FizzBuzz 2.0 in localhost:${port} ===`);
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

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    const result = ExplorerController.getResultInNumberOnly(score);
    res.json({
        score,
        trick: result,
    });
});

app.get("/v1/explorer/stack/:stack", (req, res) => {
    const stack = req.params.stack;
    const result = ExplorerController.getExplorerByStack(stack);
    res.json({
        stack: req.params.stack,
        explorers: result,
    });
});

// ======== CodeChallenge ========

// app.get("/v1/explorer/visualpartnership", (req, res) => {
app.get("/v1/visualexplorer/visualpartnership", (req, res) => {
    const explorersInVisual = ExplorerController.getAllVisualExplorers();
    res.json({ explorersInVisual });
});


app.get(
    "/v1/visualexplorer/visualpartner/certified/:haveCertification",
    (req, res) => {
        const certified = req.params.haveCertification;
        const certificados = JSON.parse(certified);
        const certExplorersInVisual =
        ExplorerController.getVisualExplorersCertified(certificados);
        res.json({
            haveCertification: req.params.haveCertification,
            explorers: certExplorersInVisual,
        });
    }
);

module.exports = app;
