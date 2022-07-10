import React from 'react';
import s from './ButtonGroup.module.css'


type ButtonGroupPropsType = {
    changeTasksFilter: (buttonName: string) => void

}

export const ButtonGroup = (props: ButtonGroupPropsType) => {
    return (
        <div className={s.buttonGroup}>
            <button className={s.selectButton} onClick={() => props.changeTasksFilter('All')}>All
            </button>
            <button className={s.selectButton} onClick={() => props.changeTasksFilter('Active')}>Active</button>
            <button className={s.selectButton} onClick={() => props.changeTasksFilter('Completed')}>Completed</button>
        </div>
    );
};

