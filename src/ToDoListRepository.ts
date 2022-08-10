import { Sequelize } from 'sequelize';

class ToDoListRepository {
        private sequelize: Sequelize;

        constructor(sequelize: Sequelize) {
                this.sequelize = sequelize;
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
