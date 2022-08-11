import {DataTypes, Sequelize} from 'sequelize';

class ToDoListRepository {
        private sequelize: Sequelize;

        constructor(sequelize: Sequelize) {
                this.sequelize = sequelize;
        }

        async insertToDoListItem(toDoListItem: string): Promise<object> {
                this.sequelize.query(`INSERT INTO list_items (text) VALUES ('${toDoListItem}');`);
                return Promise.resolve({});
        }

        async getAllToDoListItems(): Promise<ToDoListEntity> {
                const [results] = await this.sequelize.query('SELECT text FROM list_items;')

                const toDoList: ToDoListEntity = [];
                results.map((result: ToDoListEntityItem) => {
                        toDoList.push(result)
                });

                return toDoList;
        }
}

export default ToDoListRepository;
