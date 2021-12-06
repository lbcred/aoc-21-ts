import express from 'express';
import Day3 from "./day-3/Day3";
import Day4 from "./day-4/Day4";
import Day5 from "./day-5/Day5";
import Day6 from "./day-6/Day6";

const app = express();

const port = 3000;
app.get('/', (req, res) => {
  res.send('Welcome to my advent of code results! Go to /{day} to get results for that day. (e.g. /3 for day 3)');
});

app.get('/3', (req, res) => {
  const {pc, lsr} = Day3()
  res.send('Part 1 - ' + (pc.toString()+ '\nPart 2 - ' + (lsr.toString())))
})

app.get('/4', (req, res) => {
  const {score1, score2} = Day4()
  res.send('Part 1 - ' + (score1.toString()) + '\nPart 2 - ' + (score2.toString()))
})

app.get('/5', (req, res) => {
  const {part1, part2} = Day5()
  res.send('Part 1 - ' + (part1.toString()) + '\nPart 2 - ' + (part2.toString()))
})

app.get('/6', (req, res) => {
  const {part1, part2} = Day6()
  res.send('Part 1 - ' + (part1.toString()) + '\nPart 2 - ' + (part2.toString()))
})

app.listen(port, () => {
  return console.log(`server is now listening on ${port}`);
});
