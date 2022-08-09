import {getToDoListFromRepository} from './ToDoListRepository';

jest.mock('sequelize', () => {
    return {
        Sequelize: jest.fn(() => ({
            query: jest.fn().mockResolvedValue([[
                {text: 'Vibe'},
                {text: 'Listen to the Pina Colada song or something?'},
                {text: "SUNSCREEN DON'T FORGET AGAIN"},
                {text: 'ooh, dolphins!!!'},
                {text: 'Aloe vera (I forgot sunscreen again)'},
            ]])
        }))
    };
});


describe('The to do list repository', () => {
    it('returns a promise of to do items from the db client', async () => {
        const expected = [
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'ooh, dolphins!!!',
            'Aloe vera (I forgot sunscreen again)',
        ];

        const actual = await getToDoListFromRepository();

        expect(actual).toEqual(expected);
    });
});
