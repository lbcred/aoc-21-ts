import BinaryEnumerator from "../../../tools/BinaryEnumerator/BinaryEnumerator";


class PowerConsumption {
    diagnosticsReport: string[][]
    constructor(diagnosticsReport: string[][]){
        this.diagnosticsReport = diagnosticsReport;
        this.gammaAndEpsilonRate = this.gammaAndEpsilonRate.bind(this)
    }

    gammaAndEpsilonRate(){
        let gammaBinary = [];
        let epsilonBinary = [];
        let onesCount = 0;

        for (let i =0; i < this.diagnosticsReport[0].length; i++) {
            onesCount = 0

            for (const j of this.diagnosticsReport){
                if (j[i] === "1") {
                    onesCount += 1
                }
            }
            if (onesCount > this.diagnosticsReport.length/2){
                gammaBinary.push("1")
                epsilonBinary.push("0")
            } else {
                gammaBinary.push("0")
                epsilonBinary.push("1")
            }
        }
        return [BinaryEnumerator.arrayToInt(gammaBinary), BinaryEnumerator.arrayToInt(epsilonBinary)]
    }

}

export default PowerConsumption