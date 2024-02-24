import React, { useState } from 'react'
import { TextField, Button, Container, Typography, AppBar, Toolbar, Box } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

function App () {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // 假设答案处理逻辑
    const fakeAnswer = `你的问题是: ${question}`
    setAnswer(fakeAnswer)
  }

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <AccountCircle />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            登录
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="outlined-required"
          label="问题"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button variant="contained" type="submit">提交</Button>
      </Box>
      {answer && (
        <Typography sx={{ mt: 2 }}>
          答案: {answer}
        </Typography>
      )}
    </Container>
  )
}

export default App
