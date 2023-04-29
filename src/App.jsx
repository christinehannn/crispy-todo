import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './App.css'

function App() {
  const [todoValue, setTodoValue] = useState("")
  const [detailsValue, setDetailsValue] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos, todoValue]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodoValue("")
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
          {todos.map((todo, index) => 
            <div key={index}>
              {todo}
            </div>
          )}
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
