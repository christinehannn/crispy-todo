import { useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TodoAccordions from './components/TodoAccordions';
import './App.css'

function App() {
  const [todoValue, setTodoValue] = useState("")
  const [detailsValue, setDetailsValue] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos, {todo: todoValue, details: detailsValue}]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodoValue("")
    setDetailsValue("")
  }

  const handleTodoChange = (event) => {
    setTodoValue(event.target.value)
  }

  const handleDetailsChange = (event) => {
    setDetailsValue(event.target.value)
  }

  return (
    <Container maxWidth="sm">
      <Stack spacing={6} alignItems="center">
        <Typography variant="h2">
          ToDo List
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} alignItems="center">
            <TextField
              id="todo-input" 
              label="Add ToDo" 
              variant="outlined" 
              value={todoValue} 
              onChange={handleTodoChange}
              required
            />
            <TextField
              id="todo-details" 
              label="Additional details" 
              variant="outlined" 
              value={detailsValue} 
              onChange={handleDetailsChange}
            />
            <div>
              <Button variant="outlined" size="small" type="submit">Save</Button>
            </div>
          </Stack>
        </form>
        <Stack spacing={2}>
          <TodoAccordions todos={todos} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
