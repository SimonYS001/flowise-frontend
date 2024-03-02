import { React, useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import Fab from "@mui/material/Fab"
import SendIcon from "@mui/icons-material/Send"
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import { red } from "@mui/material/colors"


const useStyles = createTheme({
  palette: {
    primary: red
  },
})

const ChatComponent = () => {

  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')

  const handleSendMessage = async () => {
    const currentTime = new Date().toLocaleTimeString()
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      time: currentTime,
      sender: 'user',
    }

    // 添加用户消息到状态中
    setMessages([...messages, userMessage])

    // 发送消息到服务器并接收回复（示例，需替换为实际逻辑）
    const serverReply = await sendMessageToServer(inputText)
    const serverMessage = {
      id: messages.length + 1,
      text: serverReply,
      time: new Date().toLocaleTimeString(),
      sender: 'server',
    }

    // 添加服务器回复到状态中
    setMessages(messages => [...messages, serverMessage])
    setInputText('') // 清空输入
  }

  const sendMessageToServer = async (inputText) => {

    const response = await fetch(
      "http://localhost:3000/api/v1/prediction/e544f4df-32ad-4527-9519-5d2d4d212052",
      {
        headers: {
          Authorization: "Bearer dUHYK8DyRnsJSFznpHTtIibDrapYvGSiPkGZYBslxmM=",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ "question": inputText })
      }
    )
    const result = await response.json()
    return result.text
  }

  return (
    <ThemeProvider theme={useStyles}>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className="header-message">
              ChatBox
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          //   component={Paper}
          sx={{ width: "100%", height: "80vh" }}
        >
          <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0" }}>
            <List>
              <ListItem key="RemySharp">
                <ListItemIcon>
                  <Avatar>
                    <HomeWorkIcon color="success"></HomeWorkIcon>
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary="National Energy Code of Canada for Building 2020"></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Divider />
          </Grid>
          <Grid item xs={9}>
            <List sx={{ height: "70vh", overflowY: "auto" }}>
              {messages.map((message, index) => (
                <ListItem key={index}>
                  {/* <Grid container> */}
                  <Grid  >
                    <ListItemIcon>
                      {message.sender === 'user' ? <Avatar alt="Travis Howard" src="../Gali2.png" />
                        : <Avatar>
                          <HomeWorkIcon color="success"></HomeWorkIcon></Avatar>}

                    </ListItemIcon>
                  </Grid>
                  <ListItemText
                    align={message.sender === 'user' ? 'right' : 'left'}
                    primary={message.text}
                    secondary={message.time}
                  />

                  {/* </Grid> */}
                </ListItem>
              ))}

            </List>
            <Divider />
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </Grid>
              <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add" onClick={handleSendMessage}>
                  <SendIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default ChatComponent 
