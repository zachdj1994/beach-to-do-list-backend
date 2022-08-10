import ToDoListRepository from './ToDoListRepository';

export const getToDoList = async (toDoListRepository: ToDoListRepository): Promise<ToDoList> =>  {
    const results: ToDoListEntity = await toDoListRepository.getAllToDoListItems();
    const toDoList: ToDoList = [];

    results.map((result) => {
        toDoList.push(result.text);
    })

    return toDoList;
}
