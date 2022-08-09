import { Sequelize } from 'sequelize';

class ToDoListRepository {
        private sequelize: Sequelize;

        constructor(sequelize: Sequelize) {
                this.sequelize = sequelize;
        }

        async getToDoListFromRepository(): Promise<ToDoList> {
                const [results] = await this.sequelize.query('SELECT text FROM list_items;')

                const toDoList: ToDoList = [];
                results.map((result: ToDoListItem) => {
                        toDoList.push(result.text)
                });

                return toDoList;
        }
}

export default ToDoListRepository;
