import ToDoListRepository from './ToDoListRepository';

class ToDoListService {
    private toDoListRepository: ToDoListRepository;
    constructor(toDoListRepository: ToDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    async addToDoListItem(toDoListRequest: AddItemRequest): Promise<object> {
        return await this.toDoListRepository.insertToDoListItem(toDoListRequest.item);
    }

    async getToDoList (): Promise<ToDoList> {
        const results: ToDoListEntity = await this.toDoListRepository.getAllToDoListItems();
        const toDoList: ToDoList = [];

        results.map((result) => {
            toDoList.push({itemId: result.id, item: result.text});
        })

        return toDoList;
    }
}

export default ToDoListService;
