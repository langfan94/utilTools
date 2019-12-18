import compareArray from './compareArray';

test('array has same property, that contains object', () => {
    const arr1 = [{
        name: '123'
    }, 1123]
    const arr2 = [{
        name: '123'
    }, 1123]
    expect(compareArray(arr1, arr2)).toBe(true);
})

test('array has same property, that contains embed multple object', () => {
    const arr1 = [{
        name: '123',
        family: [{
            name: 'father'
        }, {
            name: 'mother'
        }]
    }]
    const arr2 = [{
        name: '123',
        family: [{
            name: 'father'
        }, {
            name: 'mother'
        }]
    }]
    expect(compareArray(arr1, arr2)).toBe(true);
})

test('embed three layers', () => {
    const arr1 = [{
        name: '123',
        family: [{
            name: 'father',
            friend: {
                name: "cat"
            }
        }, {
            name: 'mother'
        }]
    }]
    const arr2 = [{
        name: '123',
        family: [{
            name: 'father',
            friend: {
                name: "cat"
            }
        }, {
            name: 'mother'
        }]
    }]
    expect(compareArray(arr1, arr2)).toBe(true);
})

test('string[]', () => {
    const arr1 = [123, '111'];
    const arr2 = [123, '111'];
    expect(compareArray(arr1, arr2)).toBe(true);
})
