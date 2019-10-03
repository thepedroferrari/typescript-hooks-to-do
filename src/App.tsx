import React, { useState } from 'react'

import './App.css'

interface ITodos {
  text: string
  isCompleted: Boolean
}

interface ITodoComponent {
  todo: ITodos
  index: number
  completeTodo: (i: number) => void
}

function Todo({ todo, index, completeTodo }: ITodoComponent) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? '❎' : '✅'}
        </button>
      </div>
    </div>
  )
}

const TodoForm = ({ addTodo }: any): any => {
  const [value, setValue] = useState('')

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
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

  const addTodo = (text: ITodos['text']): void => {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
