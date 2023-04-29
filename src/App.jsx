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
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" gutterBottom>
          ToDo List
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction="row" alignItems="center">
            <TextField 
              id="todo-input" 
              label="Add ToDo" 
              variant="outlined" 
              value={inputValue} 
              onChange={handleChange}
            />
            <div>
              <Button variant="outlined" size="small">Save</Button>
            </div>
          </Stack>
        </form>
        {todos.map((todo, index) => 
          <div key={index}>
            {todo}
          </div>
        )}
      </Box>
    </Container>
  )
}

export default App
