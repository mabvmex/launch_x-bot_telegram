const Reader = require("./app/lib/utils/Reader");
const ExplorerService = require("./app/lib/services/ExplorerService");
const FizzbuzzService = require("./app/lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");
// console.log(explorers);

const mission = "node";

// eslint-disable-next-line no-unused-vars
const inMission = ExplorerService.filterByMission(explorers, mission);
console.log(`1.- Los explorer de la mision ${mission.toUpperCase()} son: `);
console.log(inMission);
console.log("=============================================\n");

// eslint-disable-next-line no-unused-vars
const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
// console.log(`2.- La cantidad de explorers participantes en la mision ${mission.toUpperCase()} es: ${cantidad}`);
// console.log('=============================================\n');

// const explorersName = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
// console.log(`3.- Los UserNames de GitHub de explorers de la mision ${mission.toUpperCase()} son:`);
// console.log(explorersName);
// console.log('=============================================\n');




const explorer1 = {name: "Carlo", score: 1}; // {name: "Explorer1", score: 1, trick: 1} 
const explorer3 = {name: "Fernanda", score: 3}; // {name: "Explorer3", score: 3, trick: "FIZZ"}
const explorer5 = {name: "Rodrigo", score: 5}; // {name: "Explorer5", score: 5, trick: "BUZZ"}
const explorer15 = {name: "Miguel", score: 15}; // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}


// eslint-disable-next-line no-unused-vars
const uno = FizzbuzzService.applyValidationInExplorer(explorer1);
// console.log(`El explorer ${explorer1.name} obtiene = ${uno}`);

// eslint-disable-next-line no-unused-vars
const tres = FizzbuzzService.applyValidationInExplorer(explorer3); 
// console.log(`El explorer ${explorer3.name} obtiene = ${tres}`);

// eslint-disable-next-line no-unused-vars
const cinco = FizzbuzzService.applyValidationInExplorer(explorer5); 
// console.log(`El explorer ${explorer5.name} obtiene = ${cinco}`);

// eslint-disable-next-line no-unused-vars
const quince = FizzbuzzService.applyValidationInExplorer(explorer15); 
// console.log(`El explorer ${explorer15.name} obtiene = ${quince}`);