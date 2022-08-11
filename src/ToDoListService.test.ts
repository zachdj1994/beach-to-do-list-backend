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
                {text: 'Vibe'},
                {text: 'Listen to the Pina Colada song or something?'},
                {text: "SUNSCREEN DON'T FORGET AGAIN"},
                {text: 'ooh, dolphins!!!'},
                {text: 'Aloe vera (I forgot sunscreen again)'},
            ];
            const expected =  [
                'Vibe',
                'Listen to the Pina Colada song or something?',
                "SUNSCREEN DON'T FORGET AGAIN",
                'ooh, dolphins!!!',
                'Aloe vera (I forgot sunscreen again)',
            ];
            mockGetToDoList.mockReturnValue(resultFromRepository)

            const actual = await service.getToDoList();

            expect(mockGetToDoList).toHaveBeenCalled();
            expect(actual).toEqual(expected);
        });
    });

    describe('addToDoListItem',  () => {
        it('adds a list of items to the repository', async () => {
            const expected = [
                'Vibe',
                'Listen to the Pina Colada song or something?'
            ];
            mockInsertToDoListItem.mockResolvedValue({});

            const actual = await service.addToDoListItem([
                {item: 'Vibe'},
                {item: 'Listen to the Pina Colada song or something?'}
            ]);

            expect(mockInsertToDoListItem).toHaveBeenCalledWith(expected);
            expect(actual).toEqual({});
        });
    });
});