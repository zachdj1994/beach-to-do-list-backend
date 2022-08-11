import ToDoListRepository from './ToDoListRepository';

class ToDoListService {
    private toDoListRepository: ToDoListRepository;
    constructor(toDoListRepository: ToDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    async addToDoListItem(toDoListRequest: ToDoListRequest): Promise<object> {
        return await this.toDoListRepository.insertToDoListItem(toDoListRequest.item);
    }

    async getToDoList (): Promise<ToDoList> {
        const results: ToDoListEntity = await this.toDoListRepository.getAllToDoListItems();
        const toDoList: ToDoList = [];

        results.map((result) => {
            toDoList.push(result.text);
        })

        return toDoList;
    }
}

export default ToDoListService;
