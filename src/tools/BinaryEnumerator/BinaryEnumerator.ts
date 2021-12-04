export class BinaryEnumerator {
    static arrayToInt(array:string[]){
        let str: string;
        str = array.join('')
        return parseInt(str, 2)
    }

    static stringToInt(str:string){
        return parseInt(str, 2)
    }
}

export default BinaryEnumerator