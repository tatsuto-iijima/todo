import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const remainingTodos = todos.filter(todo => !todo.completed).length

  return (
    <div className="app">
      <div className="todo-container">
        <h1>TODOアプリ</h1>
        <TodoForm onAdd={addTodo} />
        <div className="todo-stats">
          残り: {remainingTodos} / 全体: {todos.length}
        </div>
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  )
}

export default App
