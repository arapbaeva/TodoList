import React, {ChangeEvent} from 'react';
import s from './TodoList.module.css'
import {ButtonGroup} from "../ButtonGroup/ButtonGroup";
import {TypeInput} from "./TypeInput/TypeInput";


type InputPropsType = {
    title: string
    title2?: string
    tasks: Array<tasksPropsType>
    removeTask: (elId: string) => void
    changeTasksFilter: (buttonName: string) => void
    addTasks: (title: string) => void
    changeTask: (elId: string) => void
}
type tasksPropsType = {
    id: string,
    title: string,
    isDone: boolean
}


export const TodoList = (props: InputPropsType) => {

    return (
        <div className={s.wrapper}>
            <div className={s.inputLine}>
                <TypeInput addTasks={props.addTasks}/>

            </div>
            <div className={s.content}>
                <div className={s.rubric}><h2>{props.title}</h2>
                    <h1>{props.title2}</h1>
                </div>
                <div className={s.content}>
                    <ul className={s.dots}>
                        {props.tasks.map((el) => {

                            const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                                props.changeTask(el.id)
                            }
                            return (
                                <li key={el.id} className={s.inputContent}>
                                    <button className={s.btnX} onClick={
                                        () => props.removeTask(el.id)}>X
                                    </button>
                                    <input className={s.customCheckbox} type="checkbox"
                                           onChange={onChangeHandler} checked={el.isDone}/>

                                    <span> {el.title} </span>
                                </li>
                            )
                        })}

                    </ul>
                </div>

            </div>
            <ButtonGroup changeTasksFilter={props.changeTasksFilter}/>
        </div>

    );
};

