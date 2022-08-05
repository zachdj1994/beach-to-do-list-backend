import {getToDoListFromRepository} from './ToDoListRepository';

describe('The to do list repository', () => {
    it('returns an array list of to do items', () => {
        const expected = [
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'Get a closer look at that weird smelly thing that just washed up',
            'Aloe vera (I forgot sunscreen again)',
        ];

        const actual = getToDoListFromRepository();

        expect(actual).toEqual(expected);
    });
});
