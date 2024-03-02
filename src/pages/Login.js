/*
 * @Author: SimonYS001 su.simon.yang@gmail.com
 * @Date: 2024-02-24 16:26:30
 * @LastEditors: SimonYS001 su.simon.yang@gmail.com
 * @LastEditTime: 2024-02-29 22:12:07
 * @FilePath: \flowise-frontend\src\pages\Login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { Chat } from "@mui/icons-material";
import ButtonAppBar from "../components/ButtonAppBar"
import { Container } from "@mui/material"
import ChatComponent from "../components/ChatComponent"

export default function Login () {
  return (
    <div>
      <Container maxWidth="lm">
        <ButtonAppBar></ButtonAppBar>
      </Container>
      <Container maxWidth="lm">
        <ChatComponent></ChatComponent>
      </Container>
    </div>
  )
}
