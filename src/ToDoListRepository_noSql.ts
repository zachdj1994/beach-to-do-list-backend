import {Sequelize} from 'sequelize';

class ToDoListRepository_noSql implements ToDoListRepositoryInterface {
        private sequelize: Sequelize;

        constructor(sequelize: Sequelize) {
                this.sequelize = sequelize;
        }

        async insertToDoListItem(toDoListItem: string): Promise<ToDoListEntityItem> {
                const [results] = await this.sequelize.query(`INSERT INTO list_items (text) VALUES ('${toDoListItem}') RETURNING id;`);
                let toDoListItemId: number;
                results.map((result: {id: number}) => {
                        toDoListItemId = result.id;
                });
                return {id: toDoListItemId};
        }

        async getAllToDoListItems(): Promise<ToDoListEntity> {
                const [results] = await this.sequelize.query('SELECT id, text FROM list_items;')

                const toDoList: ToDoListEntity = [];
                results.map((result: ToDoListEntityItem) => {
                        toDoList.push(result)
                });

                return toDoList;
        }

        deleteToDoListItemById(itemId: ToDoListEntityItem): void {
                this.sequelize.query(`DELETE FROM list_items WHERE id = ${itemId.id}`);
        }
}

export default ToDoListRepository_noSql;
