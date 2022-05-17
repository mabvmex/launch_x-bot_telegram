const ExplorerController = require("./controllers/ExplorerControllers");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res, err) => {
    res.json({
        message: "=== FizzBuzz API welcome! ===",
    });
});

app.listen(port, () => {
    var err;
    if (err) {
        console.log("Error in server setup", err);
    }
    console.log(`=== API FizzBuzz 2.0 in localhost:${port} ===`);
});

// listen for an event
// eslint-disable-next-line no-unused-vars
var handler = function () {
    app.close();
};

// ======== Refactoring ========

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
        ExplorerController.getExplorersAmountByMission(mission);
    res.json({
        mission: req.params.mission,
        amountOfExplorers: amountOfExplorers,
    });
});

// ======== 3. FIZZBUZZ ========

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    const result = ExplorerController.getResultInNumberOnly(score);
    res.json({
        solicitud: "/v1/fizzbuzz/" + score,
        score: score,
        trick: result,
    });
});

// ======== 4. Explorers By Stack ========

app.get("/v1/explorer/stack/:stack", (req, res) => {
    const stack = req.params.stack;
    const result = ExplorerController.getExplorerByStack(stack);
    res.json({
        stack: req.params.stack,
        explorers: result,
    });
});

// ======== 5. CodeChallenge ========

app.get("/v1/students", (req, res) => {
    const explorersInVisual = ExplorerController.getAllVisualExplorers();
    res.json({
        explorers: explorersInVisual.length,
        explorersInVisual,
    });
});

app.get("/v1/students/email/:haveCertification", (req, res) => {
    const certified = JSON.parse(req.params.haveCertification);
    const certExplorersInVisual =
        ExplorerController.getVisualExplorersCertified(certified);
    res.json({
        haveCertification: req.params.haveCertification,
        explorers: certExplorersInVisual,
    });
});

app.get("/v1/students/credits", (req, res) => {
    const credits = ExplorerController.getVisualExplorersWithCredits();
    res.json({
        TotalExplores: credits.length,
        criteria: "credits > 500",
        explorers: credits,
    });
});

module.exports = app;
