import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos, inputValue]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setInputValue("")
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
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
              value={inputValue} 
              onChange={handleChange}
              required
            />
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
