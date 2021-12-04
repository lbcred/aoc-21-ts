import PowerConsumption from "./PowerConsumption";
import TxtParser from "../../../tools/TxtParser/TxtParser";


test('test array of arrays input', () => {
    let powerConsumption: PowerConsumption;
    powerConsumption = new PowerConsumption([["1", "0", "1", "0"], ["0", "0", "1", "0"], ["1", "1", "1", "0"]])

    expect(powerConsumption.gammaAndEpsilonRate()).toStrictEqual([10, 5]);
});