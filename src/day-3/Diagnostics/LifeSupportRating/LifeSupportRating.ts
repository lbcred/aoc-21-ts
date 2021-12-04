import BinaryEnumerator from "../../../tools/BinaryEnumerator/BinaryEnumerator";

class LifeSupportRating {
    diagnosticsReport: string[][]
    constructor(diagnosticsReport: string[][]){
        this.diagnosticsReport = diagnosticsReport;
    }

    OxygenGeneratorRating() {
        let tmpArr = this.diagnosticsReport
        let col = 0

        while (tmpArr.length > 1) {
            let onesCount = 0;
            let mostCommon = "0";

            for (const row of tmpArr) {
                if (row[col] === "1") {
                    onesCount += 1
                }
            }

            if (onesCount >= tmpArr.length / 2){
                mostCommon = "1"
            }

            const tmpArr2: string[][] = []
            for (const row of tmpArr){
                if (row[col] === mostCommon){
                    tmpArr2.push(row)
                }
            }
            tmpArr = tmpArr2

            col += 1
        }
        return BinaryEnumerator.arrayToInt(tmpArr[0])
    }

    co2ScrubberRating() {
        let tmpArr = this.diagnosticsReport
        let col = 0

        while (tmpArr.length > 1) {
            let onesCount = 0;
            let leastCommon = "0";

            for (const row of tmpArr) {
                if (row[col] === "1") {
                    onesCount += 1
                }
            }

            if (onesCount < tmpArr.length / 2){
                leastCommon = "1"
            }

            const tmpArr2: string[][] = []
            for (const row of tmpArr){
                if (row[col] === leastCommon){
                    tmpArr2.push(row)
                }
            }
            tmpArr = tmpArr2

            col += 1
        }
        return BinaryEnumerator.arrayToInt(tmpArr[0])
    }
}

export default LifeSupportRating