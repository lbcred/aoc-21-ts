import School from "./School";

test('test simulate day', () => {
    const school = new School([0,1,2])
    school.simulateDays(1)
    expect(school.groupedLanternFish).toStrictEqual([1,1,0,0,0,0,1,0,1])
})

test('test simulate days negative', () => {
    const school = new School([0,1,2])
    expect(() => school.simulateDays(-1)).toThrow(RangeError)
})


test('test count fish', () => {
    const school = new School([0,1,2])
    expect(school.countFish()).toStrictEqual(3)
})