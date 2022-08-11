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
    beforeEach(() => {
        mockQuery.mockReset()
    });

    describe('getAllToDoListItems', () => {
        it('returns a promise of to do items from the db client', async () => {
            const expected: ToDoListEntity = [
                {text: 'Vibe'},
                {text: 'Listen to the Pina Colada song or something?'},
                {text: "SUNSCREEN DON'T FORGET AGAIN"},
                {text: 'ooh, dolphins!!!'},
                {text: 'Aloe vera (I forgot sunscreen again)'},
            ];
            const repository = new ToDoListRepository(new Sequelize());
            mockQuery.mockResolvedValue([expected]);

            const actual: ToDoListEntity = await repository.getAllToDoListItems();

            expect(mockQuery).toHaveBeenCalledWith('SELECT text FROM list_items;')
            expect(actual).toEqual(expected);
        });
    });

    describe('insertToDoListItem', () => {
       it('inserts an item into the db', () => {
           const repository = new ToDoListRepository(new Sequelize());

            repository.insertToDoListItem('Vibe')

           expect(mockQuery).toHaveBeenCalledWith("INSERT INTO list_items (text) VALUES ('Vibe');");
       });
    });
});
