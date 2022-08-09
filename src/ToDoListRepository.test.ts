import ToDoListRepository from './ToDoListRepository';
import {Sequelize} from 'sequelize';

const mockQuery = jest.fn();
jest.mock('sequelize', () => {
    return {
        Sequelize: jest.fn(() => ({
            query: mockQuery
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
        const repository = new ToDoListRepository(new Sequelize());
        mockQuery.mockResolvedValue([[
            {text: 'Vibe'},
            {text: 'Listen to the Pina Colada song or something?'},
            {text: "SUNSCREEN DON'T FORGET AGAIN"},
            {text: 'ooh, dolphins!!!'},
            {text: 'Aloe vera (I forgot sunscreen again)'},
        ]]);

        const actual = await repository.getToDoListFromRepository();

        expect(mockQuery).toHaveBeenCalledWith('SELECT text FROM list_items;')
        expect(actual).toEqual(expected);
    });
});
