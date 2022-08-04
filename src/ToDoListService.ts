import ToDoListRepository from './ToDoListRepository';

class ToDoListService {
    getToDoList(): ToDoList {
        const toDoListRepository = new ToDoListRepository();
        return toDoListRepository.getToDoList();
    }
}

export default ToDoListService