import React, { useReducer, useRef } from 'react'

export default function Listas() {
    let input = useRef()
    let state = [
        {
            id: 0,
            text: "Comer tamales y no engordar",
            done: false
        }
    ]

    let [todos, dispatch] = useReducer(reducer, state)

    function reducer(state, action) {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.todo]
            case "UPDATE_TODO":
                let todo = state.find(t => t.id === action.id)
                todo.done = !todo.done
                return [...state.map(t => {
                    if (t.id === action.id) return todo
                    return t
                })]
            case "DELETE_TODO":
                return [...state.filter(t => t.id !== action.id)]
            default:
                return state
        }
    }

    function addTodo(e) {
        if (e.key !== "Enter") return
        let todo = {
            text: e.target.value,
            id: Math.floor(Math.random() * 10000),
            done: false
        }
        dispatch({ type: "ADD_TODO", todo })
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
                                onClick={() => dispatch({ type: "UPDATE_TODO", id: t.id })}
                                style={t.done ? styles.tachado : {}}
                            >
                                {t.text}
                            </span>
                            <i onClick={() => dispatch({
                                type: "DELETE_TODO",
                                id: t.id
                            })} >🖕🏽</i>
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