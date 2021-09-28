import { drag } from './Sidebar'

const data = [1, 2, 3, 4, 5, 6, 7]

test('drag 1 to 2', () => {
    const _drag = drag(data);
    expect(_drag(0, 1, data)).toEqual([2, 1, 3, 4, 5, 6, 7]);
    expect(_drag(0, 2, data)).toEqual([2, 3, 1, 4, 5, 6, 7]);
    expect(_drag(0, 3, data)).toEqual([2, 3, 4, 1, 5, 6, 7]);
    expect(_drag(1, 0, data)).toEqual([2, 1, 3, 4, 5, 6, 7]);
    expect(_drag(1, 6, data)).toEqual([1, 3, 4, 5, 6, 7, 2]);
    expect(_drag(2, 3, data)).toEqual([1, 2, 4, 3, 5, 6, 7]);
    expect(_drag(2, 0, data)).toEqual([3, 1, 2, 4, 5, 6, 7]);
    expect(_drag(5, 0, data)).toEqual([6, 1, 2, 3, 4, 5, 7]);
    expect(_drag(5, 6, data)).toEqual([1, 2, 3, 4, 5, 7, 6]);
    expect(_drag(4, 0, data)).toEqual([5, 1, 2, 3, 4, 6, 7]);
    expect(_drag(4, 5, data)).toEqual([1, 2, 3, 4, 6, 5, 7]);
});