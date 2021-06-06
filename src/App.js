import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index, completeTodo, undoTodo, removeTodo }) {
    return ( <
        div style = {
            { textDecoration: todo.isCompleted ? 'line-through' : '' } }
        className = "todo" > { todo.text } <
        div >
        <
        button onClick = {
            () => completeTodo(index) } > Done < /button> <
        button onClick = {
            () => undoTodo(index) } > Undone < /button> <
        button onClick = {
            () => removeTodo(index) } > x < /button>

        <
        /div> <
        /div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (

        <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        className = "input"
        value = { value }
        placeholder = "Add Todo...."
        onChange = { e => setValue(e.target.value) }
        /> <
        /form>

    )
}


function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
        console.log('todo added')
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
        console.log('completed')
    }

    const undoTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = false;
        setTodos(newTodos)
        console.log('not yet completed')
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        console.log('one todo removed')
    }

    const myStyle = {
        color: "black",
        fontFamily: "comic sans ms"
    }

    const styleP = {
        color: "black",
        fontFamily: "cursive"
    }

    return (

        <
        div style = {
            { width: "100%", margin: "auto", textAlign: "center" } }
        className = "App" >


        <
        div >
        <
        h1 style = { myStyle } > TODO - LIST < /h1> <
        /div> <
        p style = { styleP } > Add your work here: - < /p> <
        div className = "todo-list" > {
            todos.map((todo, index) => ( <
                Todo key = { index }
                index = { index }
                todo = { todo }
                completeTodo = { completeTodo }
                undoTodo = { undoTodo }
                removeTodo = { removeTodo }
                />
            ))
        } <
        TodoForm addTodo = { addTodo }
        /> <
        /div> <
        /div>

    );
}

export default App;