import ToDoListService from './ToDoListService';

describe('The to do list service', () => {
   it('returns the to do list items', () => {
       const expected =  [
               'Vibe',
               'Listen to the Pina Colada song or something?',
               "SUNSCREEN DON'T FORGET AGAIN",
               'Get a closer look at that weird smelly thing that just washed up',
               'Aloe vera (I forgot sunscreen again)',
           ];

       const service = new ToDoListService();
       const actual = service.getToDoList();

       expect(actual).toEqual(expected);
   })
});