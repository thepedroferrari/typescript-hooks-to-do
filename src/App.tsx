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
  removeTodo: (i: number) => void
}

function Todo({ todo, index, completeTodo, removeTodo }: ITodoComponent) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
      className="todo"
    >
      {todo.text}
      <div>
        <button className="action" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? '❎' : '✅'}
        </button>
        <button className="action" onClick={() => removeTodo(index)}>
          🗑️
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
      <button type="submit" className="submit">
        Add Task
      </button>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Open Amazing To-do App',
      isCompleted: true
    },
    {
      text: 'Realize you are amazing too',
      isCompleted: true
    },
    {
      text: 'Add a new task',
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

  const removeTodo = (index: number): void => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
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
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
