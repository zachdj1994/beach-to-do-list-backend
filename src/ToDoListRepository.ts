import {DataTypes, Sequelize} from 'sequelize';

class ToDoListRepository {
        private sequelize: Sequelize;

        constructor(sequelize: Sequelize) {
                this.sequelize = sequelize;
        }

        async insertToDoListItem(toDoListEntity: ToDoListEntity): Promise<object> {
                return Promise.resolve({});
        }

        async getAllToDoListItems(): Promise<ToDoListEntity> {
                const [results] = await this.sequelize.query('SELECT text FROM list_items;')

                const toDoList: ToDoListEntity = [];
                results.map((result: ToDoListItem) => {
                        toDoList.push(result)
                });

                return toDoList;
        }
}

export default ToDoListRepository;
