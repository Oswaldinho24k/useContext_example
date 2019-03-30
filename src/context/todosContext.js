import React, { useReducer } from 'react'

let TodosContext = React.createContext()
let { Provider, Consumer } = TodosContext

function TodosProvider({ children }) {
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

    return (<Provider value={{ todos, dispatch }}>
        {children}
    </Provider>)
}

export let ADD_TODO = "ADD_TODO"
export let UPDATE_TODO = "UPDATE_TODO"
export let DELETE_TODO = "DELETE_TODO"

export { TodosProvider, Consumer as TodosConsumer, TodosContext }