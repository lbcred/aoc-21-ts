import TxtParser from "../tools/TxtParser/TxtParser";
import Grid from "./Grid/Grid";

function Day5(){
    const grid = new Grid(1000, TxtParser.gridLines('src/day-5/input.txt'))
    grid.plotStraightLines()

    const part1 = grid.countAtLeastTwoLines()

    grid.plotDiagonalLines()

    const part2 = grid.countAtLeastTwoLines()

    console.log(grid.countAtLeastTwoLines())

    return {part1, part2}
}

Day5()

export default Day5
