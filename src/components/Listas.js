import React, { useContext, useRef } from 'react'
import {
    TodosContext,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../context/todosContext'

export default function Listas() {
    let { todos, dispatch } = useContext(TodosContext)
    let input = useRef()
    function addTodo(e) {
        if (e.key !== "Enter") return
        let todo = {
            text: e.target.value,
            id: Math.floor(Math.random() * 10000),
            done: false
        }
        dispatch({ type: ADD_TODO, todo })
        input.current.value = ""
    }

    return (
        <div>
            <h1>
                Cosas que quisiera hacer, pero que no van a suceder...
            </h1>
            <input ref={input} placeholder="pon tu cochinada" onKeyPress={addTodo} type="text" />
            <ul>
                {todos.map(t => {
                    return (
                        <li key={t.id} style={styles.cursor} >
                            <span
                                onClick={() => dispatch({ type: UPDATE_TODO, id: t.id })}
                                style={t.done ? styles.tachado : {}}
                            >
                                {t.text}
                            </span>
                            <i onClick={() => dispatch({ type: DELETE_TODO, id: t.id })} >🖕🏽</i>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

let styles = {
    tachado: {
        textDecoration: "line-through"
    },
    cursor: {
        cursor: "pointer"
    }
}