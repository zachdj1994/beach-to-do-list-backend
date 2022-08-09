import { Sequelize } from 'sequelize';

const userName = process.env.USER;
const sequelize = new Sequelize(`postgres://${userName}:root@localhost:5432/to_do_list`);


export const getToDoListFromRepository = async (): Promise<ToDoList> => {
        const [results] = await sequelize.query('SELECT text FROM list_items;')

        const toDoList: ToDoList = [];
        results.map((result: ToDoListItem) => {
            toDoList.push(result.text)
        });

        return toDoList;
};
