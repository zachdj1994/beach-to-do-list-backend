import {getToDoList} from './ToDoListService';
import * as ToDoListRepository from './ToDoListRepository';

jest.mock('./ToDoListRepository', () => ({
    getToDoListFromRepository: jest.fn()
}));
const mockGetToDoList = jest.spyOn(ToDoListRepository, 'getToDoListFromRepository');


describe('The to do list service', () => {
   it('returns the to do list items from the repository layer', async () => {
       const expected =  [
               'Vibe',
               'Listen to the Pina Colada song or something?',
               "SUNSCREEN DON'T FORGET AGAIN",
               'ooh, dolphins!!!',
               'Aloe vera (I forgot sunscreen again)',
           ];


       mockGetToDoList.mockResolvedValue(expected)

       const actual = await getToDoList();

       expect(ToDoListRepository.getToDoListFromRepository).toHaveBeenCalled()
       expect(actual).toEqual(expected);
   })
});