import {getToDoListFromRepository} from './ToDoListRepository';

export const getToDoList = (): ToDoList =>  {
    return getToDoListFromRepository();
}
