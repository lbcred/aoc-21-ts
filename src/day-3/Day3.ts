import PowerConsumption from "./Diagnostics/PowerConsumption/PowerConsumption";
import LifeSupportRating from "./Diagnostics/LifeSupportRating/LifeSupportRating";
import TxtParser from "../tools/TxtParser/TxtParser";

const diagnosticsReport = TxtParser.parseLinesAsArray("src/day-3/input.txt");

const powerConsumption = new PowerConsumption(diagnosticsReport)
const lifeSupportRating = new LifeSupportRating(diagnosticsReport)

const gammaEpsilonRates = powerConsumption.gammaAndEpsilonRate();
const pc = gammaEpsilonRates[0]*gammaEpsilonRates[1]

console.log("Part 1 - " + pc);

const lsr = lifeSupportRating.OxygenGeneratorRating()*lifeSupportRating.co2ScrubberRating()

console.log("Part 2 - " + lsr)

export {pc, lsr}