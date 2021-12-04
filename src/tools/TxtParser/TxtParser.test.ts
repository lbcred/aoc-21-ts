import TxtParser from "./TxtParser";

test('test array of arrays output', () => {
    expect(TxtParser.parseLinesAsArray('src/tools/TxtParser/input.txt'))
        .toStrictEqual([
                ["I","t","'","s"," ","C","h","r","i","s","t","m","a","s"],
                ["I","t","'","s"," ","C","h","r","i","s","t","m","a","s"],
                ["I","t","'","s"," ","C","h","r","i","s","t","m","a","s"],
                ["I","t","'","s"," ","C","h","r","i","s","t","m","a","s"]
            ]
        );
});

test('test bingo game input', () => {
    expect(TxtParser.bingoGame('src/tools/TxtParser/testBingoInput.txt'))
        .toStrictEqual({"boards": [[[12, 23, 89], [55, 80, 40], [22, 33, 74]], [[6, 57, 9], [31, 89, 95], [55, 4, 88]]], "numberOrder": [12, 34, 45, 23, 6, 78, 3, 89]});
});