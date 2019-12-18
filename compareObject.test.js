import compareObject from './compareObject.js';

test('Object embed tree layers', () => {
    const obj = {
        name: 111,
        age: 12,
        friend: {
            name: 'sss',
            friend: {
                name: 'cat'
            }
        }
    };
    const other = {
        name: 111,
        age: 12,
        friend: {
            name: 'sss',
            friend: {
                name: 'cat'
            }
        }
    };
    expect(compareObject(obj, other)).toBe(true);
})

test('object is unequal string', () => {
    const obj1 = {
        name: 111
    };
    const obj2 = '111';
    expect(compareObject(obj1, obj2)).toBe(false);
})
