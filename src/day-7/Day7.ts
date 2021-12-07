import TxtParser from "../tools/TxtParser/TxtParser";
import CrabAligner from "./CrabAligner/CrabAligner";
import Crab from "./Crab/Crab";

function Day7(){
    const crabAligner = new CrabAligner();


    const crabPositions:number[] = TxtParser.toArray('src/day-7/input.txt')

    const crabs:Crab[] = [];

    crabPositions.forEach(crabPosition => {
        crabs.push(new Crab(crabPosition))
    })

    let bestCost = 3000000;
    let bestPosition = 0;

    const costs = []

    for(let i = Math.min(...crabPositions); i < Math.max(...crabPositions); i++){
        let cost = 0
        cost = crabAligner.calculateCost(crabs, i)

        costs.push(cost)

        if(cost<bestCost){
            bestCost = cost;
            bestPosition = i;
        }
    }

    console.log("Part - 1 " + bestCost)

    bestCost=3000000000000

    for(let i = Math.min(...crabPositions); i < Math.max(...crabPositions); i++){
        let cost = 0
        cost = crabAligner.calculateCompoundCost(crabs, i)

        costs.push(cost)

        if(cost<bestCost){
            bestCost = cost;
            bestPosition = i;
        }
    }

    console.log("Part - 2 " + bestCost)

    return 0
}

Day7()

export default Day7
