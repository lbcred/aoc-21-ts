import BingoGame from "./BingoGame";

const input1 = [12,34,45,23,6,78,3,89,66,31,55]
const input2 = [
    [
            [12, 23, 89],
            [55, 80, 40],
            [22, 33, 74]
        ],
        [
            [6, 57,  9],
            [31, 89, 95],
            [55,  4, 88]
        ]
    ]

const bingoGame = new BingoGame(input1, input2)

test('test check won', () => {
    expect(bingoGame.checkWon([[0,0,0], [2, 3, 4], [5, 6, 7]])).toStrictEqual(true);
});

test('test check won diagonal', () => {
    expect(bingoGame.checkWon([[0,0,2], [2, 0, 4], [5, 6, 0]])).toStrictEqual(false);
});

test('test check not won', () => {
    expect(bingoGame.checkWon([[0,0,2], [2, 3, 4], [5, 6, 7]])).toStrictEqual(false);
});

test('test win turn and board', () => {
    expect(bingoGame.winTurnAndBoard([[12, 23, 89], [55, 80, 40], [22, 33, 74]])).toStrictEqual({"winBoard" :[[0,0,0], [55,80,40], [22, 33, 74]],"winTurn": 8});
});

test('test find winner', () => {
    expect(bingoGame.findWinner()).toStrictEqual({
        board: [
            [0, 0, 0],
            [55, 80, 40],
            [22, 33, 74]
        ],
        winTurn: 8,
        sumOfAllUnmarked:304,
        winNumber: 89
    });
});

test('test find loser', () => {
    expect(bingoGame.findLoser()).toStrictEqual({
        board: [
            [0, 57, 9],
            [0, 0, 95],
            [0, 4, 88]
        ],
        winTurn: 11,
        sumOfAllUnmarked:66+95+4+88,
        winNumber: 55
    });
});


