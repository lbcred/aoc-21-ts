class BingoGame {
    drawnNumbers: number[];
    boards: number[][][];
    constructor(drawnNumbers:number[], boards:number[][][]) {
        this.drawnNumbers = drawnNumbers
        this.boards = boards
    }

    findWinner(){
        type boardWinTurn = {board: number[][], winTurn : number, winNumber : number, sumOfAllUnmarked : number}
        const currentBest: boardWinTurn = {board: [], winTurn: 100, winNumber : 0, sumOfAllUnmarked : 0}
        this.boards.forEach(board => {
            const winTurnAndBoard = this.winTurnAndBoard(board)
            if(winTurnAndBoard.winTurn < currentBest.winTurn){
                this.setNewCurrentBestOrWorst(winTurnAndBoard, currentBest)
            }
            }
        )
        return currentBest;
    }

    findLoser(){
        type boardWinProps = {board: number[][], winTurn : number, winNumber : number, sumOfAllUnmarked : number}
        const currentWorst: boardWinProps = {board: [], winTurn: 0, winNumber : 0, sumOfAllUnmarked : 0}
        this.boards.forEach(board => {
                const winTurnAndBoard = this.winTurnAndBoard(board)
                if(winTurnAndBoard.winTurn > currentWorst.winTurn){
                    this.setNewCurrentBestOrWorst(winTurnAndBoard, currentWorst)
                }
            }
        )
        return currentWorst;
    }

    setNewCurrentBestOrWorst(newWinTurnAndBoard: {winTurn:number, winBoard: number[][]}, currentBestOrWorst:{board: number[][], winTurn : number, winNumber : number, sumOfAllUnmarked : number}){
        currentBestOrWorst.board = newWinTurnAndBoard.winBoard;
        currentBestOrWorst.winTurn = newWinTurnAndBoard.winTurn;
        currentBestOrWorst.winNumber = this.drawnNumbers[newWinTurnAndBoard.winTurn-1]
        currentBestOrWorst.sumOfAllUnmarked = 0
        currentBestOrWorst.board.forEach(row => {
            row.forEach(num =>
                currentBestOrWorst.sumOfAllUnmarked += num
            )
        })
    }

    winTurnAndBoard(board:number[][]) {
        const tmpBoard = board.map(row => [...row])
        let winTurn = 0;
        while (!this.checkWon(tmpBoard) && winTurn < this.drawnNumbers.length) {
            const num = this.drawnNumbers[winTurn]
            for (let c = 0; c < board.length; c++) {
                for (let r = 0; r < board.length; r++) {
                    if(tmpBoard[r][c] === num){
                        tmpBoard[r][c] = 0;
                    }
                }
            }
            winTurn++;
        }
        return {winTurn, winBoard: tmpBoard}
    }

    checkWon(board:number[][]){
        const cols: number[] = [0,0,0,0,0]
        const rows: number[] = [0,0,0,0,0]
        for (let c=0; c<board.length; c++){
            for (let r=0; r<board.length; r++){
                if (board[r][c] === 0){
                    cols[c]++
                    rows[r]++
                    if( cols[c] === board.length || rows[r] === board.length){
                        return true
                    }
                }
            }
        }
        return false
    }
}

export default BingoGame