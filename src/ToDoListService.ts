import ToDoListRepository from './ToDoListRepository';

class ToDoListService {
    private toDoListRepository: ToDoListRepository;
    constructor(toDoListRepository: ToDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    async addToDoListItem(toDoList: ToDoList): Promise<object> {
        const toDoListEntity: ToDoListEntity = [];
        toDoList.map((item: string) => {
            toDoListEntity.push({text: item})
        });

        return await this.toDoListRepository.insertToDoListItem(toDoListEntity);
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
