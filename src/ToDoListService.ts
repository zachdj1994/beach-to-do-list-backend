import {getToDoListFromRepository} from './ToDoListRepository';

export const getToDoList = (): Promise<ToDoList> =>  {
    return getToDoListFromRepository();
}
