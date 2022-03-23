import React, { useState } from "react";


function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div>
            <li
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
                <button onClick={() => onDelete(todo.id)}>삭제</button>
            </li>
        </div>
    );
}

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />))}
        </ul>
    );
}

function Todos({ todos, onCreate, onToggle, onDelete }) {
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder="할일을 입력하세요" />
                <button type='submit'>클릭</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
        </div>
    );
}

export default Todos;






