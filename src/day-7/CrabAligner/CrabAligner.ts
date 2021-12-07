import Crab from "../Crab/Crab";

class CrabAligner{
    calculateCost(crabs:Crab[], hPosition:number){
        let cost =0;
        for(const crab of crabs){
            cost += Math.abs(crab.horizontalPosition - hPosition);
        }
        return cost;
    }
    calculateCompoundCost(crabs:Crab[], hPosition:number){
        let cost =0;
        for(const crab of crabs){
            const x = Math.abs(crab.horizontalPosition - hPosition);
            cost += (x*(x+1))/2
        }
        return cost;
    }
}

export default CrabAligner