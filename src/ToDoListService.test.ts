import {getToDoList} from './ToDoListService';
import ToDoListRepository from './ToDoListRepository';
import {Sequelize} from 'sequelize';

jest.mock('sequelize');

const mockGetToDoList = jest.fn();
jest.mock('./ToDoListRepository', () => {
    return function () {
        return {getToDoListFromRepository: mockGetToDoList}
    }
})

describe('The to do list service', () => {
   it('returns the to do list items from the repository layer', async () => {
       const expected =  [
               'Vibe',
               'Listen to the Pina Colada song or something?',
               "SUNSCREEN DON'T FORGET AGAIN",
               'ooh, dolphins!!!',
               'Aloe vera (I forgot sunscreen again)',
           ];
       mockGetToDoList.mockReturnValue(expected)


       const actual = await getToDoList(new ToDoListRepository(new Sequelize()));

       expect(mockGetToDoList).toHaveBeenCalled();
       expect(actual).toEqual(expected);
   })
});