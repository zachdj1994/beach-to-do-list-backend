import ToDoListService from './ToDoListService';
import ToDoListRepository from './ToDoListRepository';

const mockGetToDoList = jest.fn();
jest.mock('./ToDoListRepository', () => {
    return function () {
        return {getToDoList: mockGetToDoList}
    }
})

describe('The to do list service', () => {
   it('returns the to do list items from the repository layer', () => {
       const expected =  [
               'Vibe',
               'Listen to the Pina Colada song or something?',
               "SUNSCREEN DON'T FORGET AGAIN",
               'Get a closer look at that weird smelly thing that just washed up',
               'Aloe vera (I forgot sunscreen again)',
           ];
       mockGetToDoList.mockReturnValue(expected)
       const service = new ToDoListService();

       const actual = service.getToDoList();

       expect(actual).toEqual(expected);
   })
});