import TxtParser from "../tools/TxtParser/TxtParser";
import BingoGame from "./Bingo/BingoGame";

function Day4() {
    const {numberOrder, boards} = TxtParser.bingoGame('src/day-4/input.txt')


    const bingoGame = new BingoGame(numberOrder, boards)
    const winner = bingoGame.findWinner()

    const score1 = winner.sumOfAllUnmarked * winner.winNumber;

    console.log("Part 1 - " + score1)

    const loser = bingoGame.findLoser()

    const score2 = loser.sumOfAllUnmarked * loser.winNumber

    console.log("Part 2 - " + score2)

    return {score1, score2}
}

Day4()

export default Day4