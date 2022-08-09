import ToDoListRepository from './ToDoListRepository';

export const getToDoList = (toDoListRepository: ToDoListRepository): Promise<ToDoList> =>  {
    return toDoListRepository.getToDoListFromRepository();
}
