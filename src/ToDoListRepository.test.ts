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
    const repository = new ToDoListRepository(new Sequelize());

    beforeEach(() => {
        mockQuery.mockReset();
    });

    describe('getAllToDoListItems', () => {
        it('returns a promise of to do items from the db client', async () => {
            const expected: ToDoListEntity = [
                {id: 1, text: 'Vibe'},
                {id: 2, text: 'Listen to the Pina Colada song or something?'},
                {id: 3, text: "SUNSCREEN DON'T FORGET AGAIN"},
                {id: 4, text: 'ooh, dolphins!!!'},
                {id: 6, text: 'Aloe vera (I forgot sunscreen again)'},
            ];
            mockQuery.mockResolvedValue([expected]);

            const actual: ToDoListEntity = await repository.getAllToDoListItems();

            expect(mockQuery).toHaveBeenCalledWith('SELECT id, text FROM list_items;')
            expect(actual).toEqual(expected);
        });
    });

    describe('insertToDoListItem', () => {
       it('inserts an item into the db', () => {
           mockQuery.mockResolvedValue([[{id: 1}]]);

           repository.insertToDoListItem('Vibe');

           expect(mockQuery).toHaveBeenCalledWith("INSERT INTO list_items (text) VALUES ('Vibe') RETURNING id;");
       });

       it('returns the auto incremented id', async () => {
           const expected: ToDoListEntityItem = {id: 1};
           mockQuery.mockResolvedValue([[{id: 1}]]);

           const actual = await repository.insertToDoListItem('Vibe');

           expect(actual).toEqual(expected);
       });
    });

    describe('deleteToDoListItemById', () => {
        it('deletes an item from the db by id', () => {
            const idOfItemToDelete: ToDoListEntityItem = {id: 1};

            repository.deleteToDoListItemById(idOfItemToDelete);

            expect(mockQuery).toHaveBeenCalledWith('DELETE FROM list_items WHERE id = 1')
        });
    });
});
