import { BinaryEnumerator } from "./BinaryEnumerator";

test('test array of strings input', () => {
    expect(BinaryEnumerator.arrayToInt(["1", "1", "0", "1"])).toStrictEqual(13);
});