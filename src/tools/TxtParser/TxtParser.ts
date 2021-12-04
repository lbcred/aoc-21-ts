import fs from "fs";

class TxtParser {
    static parseLinesAsArray(filePath: string){
        let text:string;
        text = fs.readFileSync(filePath, 'utf8')
        const out: string[][] = []
        text.split(/\n/).forEach(line => out.push(line.split('')))
        return out
    }
    static bingoGame(filePath: string){
        let text:string;
        text = fs.readFileSync(filePath, 'utf8')
        const boards: number[][][] = []
        const blocks:string[] = text.split(/\n\n/)
        // tslint:disable-next-line:radix
        const numberOrder = blocks.splice(0,1)[0]?.split(',').map(str => parseInt(str))

        blocks.forEach(block => {
            const tmp: number [][] = []
            block.split(/\n/).forEach(line => {
                line = line.replace(/\s/g,",")
                // tslint:disable-next-line:radix
                const numbers:number[] = line.split(',').filter(String).map(str => parseInt(str))
                tmp.push(numbers)
            })
            boards.push(tmp)
        })
        return {numberOrder, boards}
    }
}

export default TxtParser