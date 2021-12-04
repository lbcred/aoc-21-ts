import express from 'express';
import {pc, lsr} from "./day-3/Day3";
import {score1, score2} from "./day-4/Day4";

const app = express();

const port = 3000;
app.get('/', (req, res) => {
  res.send('Welcome to my advent of code results! Go to /{day} to get results for that day. (e.g. /3 for day 3)');
});

app.get('/3', (req, res) => {
  res.send('Part 1 - ' + (pc.toString()+ '\nPart 2 - ' + (lsr.toString())))
})

app.get('/4', (req, res) => {
  res.send('Part 1 - ' + (score1.toString()) + '\nPart 2 - ' + (score2.toString()))
})

app.listen(port, () => {
  return console.log(`server is now listening on ${port}`);
});
