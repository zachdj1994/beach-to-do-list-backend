interface ToDoListRepositoryInterface {
        insertToDoListItem(toDoListItem: string): Promise<ToDoListEntityItem>;

        getAllToDoListItems(): Promise<ToDoListEntity>;

        deleteToDoListItemById(itemId: ToDoListEntityItem): void;
}
