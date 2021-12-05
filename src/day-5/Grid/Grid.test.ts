import Grid from "./Grid";


test('test plot straight lines on grid', () => {
    const grid = new Grid(5, [
        [[3, 2], [3,4]],
        [[4, 1], [1,1]],
        [[1, 4], [1, 3]],
        [[0, 0], [0, 4]],
        [[0, 0], [4, 4]],
        [[0,4], [4, 0]],
        [[4, 0], [0, 4]],
        [[4,4], [0, 0]]
    ])
    grid.plotStraightLines()
    expect(grid.grid)
        .toStrictEqual(
            [
                [1,0,0,0,0],
                [1,1,1,1,1],
                [1,0,0,1,0],
                [1,1,0,1,0],
                [1,1,0,1,0]
            ]
        );
});

test('test plot diagonal lines on grid', () => {
    const grid = new Grid(5, [
        [[3, 2], [3,4]],
        [[4, 1], [1,1]],
        [[1, 4], [1, 3]],
        [[0, 0], [0, 4]],
        [[0, 0], [4, 4]],
        [[0,4], [4, 0]],
        [[4, 0], [0, 4]],
        [[4,4], [0, 0]]
    ])
    grid.plotDiagonalLines()
    expect(grid.grid)
        .toStrictEqual(
            [
                [2,0,0,0,2],
                [0,2,0,2,0],
                [0,0,4,0,0],
                [0,2,0,2,0],
                [2,0,0,0,2]
            ]
        );
});

test('test make grid', () => {
    const grid = new Grid(5, [
        [[3, 2], [3,4]],
        [[4, 1], [1,1]],
        [[1, 4], [1, 3]],
        [[0, 0], [0, 4]],
        [[0, 0], [4, 4]],
        [[0,4], [4, 0]],
        [[4, 0], [0, 4]],
        [[4,4], [0, 0]]
    ])
    expect(grid.makeGrid(5, 5, 0))
        .toStrictEqual(
            [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]
            ]
        );
});
