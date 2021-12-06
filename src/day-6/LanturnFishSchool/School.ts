class School{
    private lanternFish:number[];
    groupedLanternFish:number[];
    numberOfFish:number;
    constructor(lanternFish: number[]) {
        this.lanternFish = lanternFish;
        this.groupedLanternFish = this.groupFish();
        this.numberOfFish = lanternFish.length;
    }

    simulateDays(noOfDays:number){
        if(noOfDays >= 1){
            for(let day = 0; day<noOfDays; day++) {
                const tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                for (let i = 0; i < this.groupedLanternFish.length; i++) {
                    if (i === 0) {
                        tmp[6] += this.groupedLanternFish[i];
                        tmp[8] += this.groupedLanternFish[i];
                    } else {
                        tmp[i - 1] += this.groupedLanternFish[i];
                    }
                }
                this.groupedLanternFish = tmp;
            }
        }
        else{
            throw RangeError("Invalid input, must be >=1!")
        }
    }
    private groupFish(){
        const arr:number[] = [0,0,0,0,0,0,0,0,0]
        for(let i = 0; i < 6; i++){
            this.lanternFish.filter(num => num === i).forEach(_ => {
                arr[i] += 1
            })
        }
        return arr
    }
    countFish(){
        return this.groupedLanternFish.reduce((a, b) => a + b, 0)
    }
}

export default School