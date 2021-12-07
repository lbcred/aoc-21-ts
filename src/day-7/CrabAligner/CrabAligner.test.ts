import CrabAligner from "./CrabAligner";
import Crab from "../Crab/Crab";

const crabs = [new Crab(10), new Crab(4), new Crab(5), new Crab(6)]

const crabAligner = new CrabAligner();

test('align crabs and cost', () => {
    expect(crabAligner.calculateCost(crabs, 5)).toStrictEqual(7)
})

test('align crabs and cost higher', () => {
    expect(crabAligner.calculateCost(crabs, 11)).toStrictEqual(19)
})

test('align crabs and cost higher', () => {
    expect(crabAligner.calculateCost(crabs, 0)).toStrictEqual(25)
})

test('align crabs and cost with compound', () => {
    expect(crabAligner.calculateCompoundCost(crabs, 0)).toStrictEqual(55+10+15+21)
})