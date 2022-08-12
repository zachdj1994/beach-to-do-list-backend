type ToDoList = ToDoListItem[];
type ToDoListItem = {itemId: number, item: string};
type ToDoListEntity = ToDoListEntityItem[];
type ToDoListEntityItem = {id: number, text: string};
type AddItemRequest = {item: string};
