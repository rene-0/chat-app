import { io } from 'socket.io-client'

export const socketClient = io('http://localhost:5050', { autoConnect: false })
const accessToken = localStorage.getItem('accessToken')
if (accessToken) {
  socketClient.auth = { accessToken: { token: accessToken } }
  socketClient.connect()
}
