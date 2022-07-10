import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {v1} from 'uuid';

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "Reflect what you're grateful for", isDone: true},
        {id: v1(), title: "Spend time in nature", isDone: true},
        {id: v1(), title: "Take up a relaxing hobby", isDone: true},
        {id: v1(), title: "Pick a bed-time and stick to it", isDone: false},
    ])


    const removeTask = (elId: string) => {
        setTasks(tasks.filter((el) => el.id !== elId))
        console.log(tasks)
    }

    const changeTask = (elId: string) => {
        setTasks(tasks.map((el) => el.id === elId ? {...el, isDone: !el.isDone} : el))

    }

    const addTasks = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }


    const [filterValue, setFilterValue] = useState('All')

    let filteredTasks = tasks;
    if (filterValue === 'Active') {
        filteredTasks = tasks.filter(el => !el.isDone)
    } else if (filterValue === 'Completed') {
        filteredTasks = tasks.filter(el => el.isDone)
    }


    const changeTasksFilter = (buttonName: string) => {
        setFilterValue(buttonName)
    }
    return (
        <div className="App">
            <TodoList title={'Self-care Routine'}
                      title2={'Checklist'}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeTasksFilter={changeTasksFilter}
                      addTasks={addTasks}
                      changeTask={changeTask}
            />

        </div>
    );
}

export default App;
