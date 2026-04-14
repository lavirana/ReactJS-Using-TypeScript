import React, { useState, useEffect } from "react";
import Todo from './components/Todo';
import Counter from './components/Counter';
import { stat } from "fs";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {increment, decrement} from './redux/slices/counter'


const myTodoItems = [
    {
        id: 1,
        title: "Hello all",
    },
    {
        id: 2,
        title: "I need to watch videos",
    },
];


interface TodoItem {
    completed: boolean
    id: number
    title: string
    userId: number
}


const App: React.FC = () => {
    const [state, setSate] = useState<boolean>(true)
    const [todos, setTodos] = useState<TodoItem[]>([])
    const count = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response).then(e => e.json()).then(e => setTodos(e as TodoItem[])); 
    }, [])


    return (
        <div style={{ border: "1px solid red" }} >
            <Todo items={myTodoItems} />
            <button onClick={e => setSate(!state)} >Toogle</button>
            {state ? <Counter /> : ""}

            <h1>Count is {count}</h1>
            <button onClick={()=>dispatch(increment())} >Increment</button>
            <button onClick={()=>dispatch(decrement())} >Decrement</button>
            <div>
                {
                    todos.map(todo => <li key={todo.id}>{todo.title}</li>)
                }
            </div>
        </div>
    );


};

export default App;
