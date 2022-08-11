import ToDoListRepository from './ToDoListRepository';

class ToDoListService {
    private toDoListRepository: ToDoListRepository;
    constructor(toDoListRepository: ToDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    async addToDoListItem(toDoListRequest: ToDoListRequest): Promise<object> {
        const toDoList: ToDoList = [];
        toDoListRequest.map((item: ToDoListRequestItem) => {
            toDoList.push(item.item)
        });

        return await this.toDoListRepository.insertToDoListItem(toDoList);
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
