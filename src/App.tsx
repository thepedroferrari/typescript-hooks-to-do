import React, { useState } from 'react'

import './App.css'

interface ITodos {
  text: string
  isCompleted: Boolean
}

interface ITodoComponent {
  todo: ITodos
  index: number
}

function Todo({ todo, index }: ITodoComponent) {
  return <div className="todo">{todo.text}</div>
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build To-do App',
      isCompleted: false
    }
  ])

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
