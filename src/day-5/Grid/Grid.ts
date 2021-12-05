class Grid {
    lines:number[][][];
    grid:number[][];
    constructor(size: number, lines:number[][][]) {
        this.lines = lines;
        this.grid = this.makeGrid(size, size, 0)
    }
    makeGrid(w:number, h:number, val:number) {
        const arr:number[][] = [];
        for(let i = 0; i < h; i++) {
            arr[i] = [];
            for(let j = 0; j < w; j++) {
                arr[i][j] = val;
            }
        }
        return arr;
    }
    plotStraightLines(){
        this.lines.forEach(line => {
            const y1 = line[0][1]
            const y2 = line[1][1]
            const x1 = line[0][0]
            const x2 = line[1][0]
            if(y1 === y2 || x1 === x2) {
                if (y1 !== y2) {
                    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
                        this.grid[y][x1] += 1
                    }
                } else if (x1 !== x2) {
                    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
                        this.grid[y1][x] += 1
                    }
                }
            }
        }
    )
    }
    plotDiagonalLines() {
        this.lines.forEach(line => {
                const y1 = line[0][1]
                const y2 = line[1][1]
                const x1 = line[0][0]
                const x2 = line[1][0]
                if (y1 < y2 && x1 < x2) {
                    for (let x = x1; x <= x2;) {
                        for (let y = y1; y <= y2; y++, x++)
                            this.grid[y][x] += 1
                    }
                }
                else if (y1 > y2 && x1 < x2) {
                    for (let x = x1; x <= x2;) {
                        for (let y = y1; y >= y2; y--, x++)
                            this.grid[y][x] += 1
                    }
                }
                else if (y1 < y2 && x1 > x2) {
                    for (let x = x1; x >= x2;) {
                        for (let y = y1; y <= y2; y++,  x--)
                            this.grid[y][x] += 1
                    }
                }
                else if (y1 > y2 && x1 > x2) {
                    for (let x = x1; x >= x2;) {
                        for (let y = y1; y >= y2; y--,  x--)
                            this.grid[y][x] += 1
                    }
                }
            }
        )
    }
    countAtLeastTwoLines(){
        let count = 0
        this.grid.forEach(row => {
            row.forEach(num => {
                if(num >= 2){
                    count++
                }
            })
        })
        return count
    }
}

export default Grid