import TxtParser from "../tools/TxtParser/TxtParser";
import School from "./LanturnFishSchool/School";

function Day6(){
    const lanternFish = TxtParser.toArray("src/day-6/input.txt")

    const school = new School(lanternFish);

    school.simulateDays(80)

    const part1 = school.countFish()

    console.log("Part 1 - " + part1)

    school.simulateDays(176)

    const part2 = school.countFish()

    console.log("Part 2 - " + part2)

    return {part1, part2}
}

Day6()

export default Day6
