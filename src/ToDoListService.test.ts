import ToDoListService from './ToDoListService';
import ToDoListRepository from './ToDoListRepository';
import {Sequelize} from 'sequelize';

jest.mock('sequelize');

const mockGetToDoList = jest.fn();
const mockInsertToDoListItem = jest.fn();
jest.mock('./ToDoListRepository', () => {
    return function () {
        return {
            getAllToDoListItems: mockGetToDoList,
            insertToDoListItem: mockInsertToDoListItem
        }
    }
})

describe('The to do list service', () => {
    const service = new ToDoListService(new ToDoListRepository(new Sequelize()))

    describe('getToDoList', () => {
        it('returns the to do list items from the repository layer', async () => {
            const resultFromRepository: ToDoListEntity = [
                {id: 1, text: 'Vibe'},
                {id: 2, text: 'Listen to the Pina Colada song or something?'},
                {id: 3, text: "SUNSCREEN DON'T FORGET AGAIN"},
                {id: 4, text: 'ooh, dolphins!!!'},
                {id: 6, text: 'Aloe vera (I forgot sunscreen again)'},
            ];
            const expected =  [
                {itemId: 1, item: 'Vibe'},
                {itemId: 2, item: 'Listen to the Pina Colada song or something?'},
                {itemId: 3, item: "SUNSCREEN DON'T FORGET AGAIN"},
                {itemId: 4, item: 'ooh, dolphins!!!'},
                {itemId: 6, item: 'Aloe vera (I forgot sunscreen again)'},
            ];
            mockGetToDoList.mockReturnValue(resultFromRepository)

            const actual = await service.getToDoList();

            expect(mockGetToDoList).toHaveBeenCalled();
            expect(actual).toEqual(expected);
        });
    });

    describe('addToDoListItem',  () => {
        it('adds an item to the repository', async () => {
            const expected = 'Vibe';
            mockInsertToDoListItem.mockResolvedValue({});

            await service.addToDoListItem({item: 'Vibe'});

            expect(mockInsertToDoListItem).toHaveBeenCalledWith(expected);
        });

        it('returns the newly added items auto incremented id', async () => {
            const expected: ToDoListItem = {itemId: 1};
            mockInsertToDoListItem.mockResolvedValue({id: 1});

            const actual: ToDoListItem = await service.addToDoListItem({item: 'Vibe'});

            expect(actual).toEqual(expected);
        });
    });
});