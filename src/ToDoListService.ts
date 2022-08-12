import ToDoListRepository from './ToDoListRepository';

class ToDoListService {
    private toDoListRepository: ToDoListRepository;
    constructor(toDoListRepository: ToDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    async addToDoListItem(toDoListRequest: AddItemRequest): Promise<ToDoListItem> {
        const response: ToDoListEntityItem = await this.toDoListRepository.insertToDoListItem(toDoListRequest.item);
        return {itemId: response.id};
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
