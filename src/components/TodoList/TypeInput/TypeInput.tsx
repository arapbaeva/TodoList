import React, {ChangeEvent, useState} from 'react';
import s from './Typeinput.module.css'


type TypeInputPropsType = {
    addTasks: (title: string) => void
}
export const TypeInput = (props: TypeInputPropsType) => {
    const [title, setTitle] = useState('')


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }


    const onClickButtonHandler = () => {
        props.addTasks(title)
        setTitle('')

    }
    return (<>
            <div className={s.inputPlace}>
                <input className={s.typeInput} value={title} onChange={onChangeInputHandler}/>

                <button className={s.btn} onClick={onClickButtonHandler}>+
                </button>
            </div>
        </>
    );
};

