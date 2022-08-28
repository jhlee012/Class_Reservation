//soontm

import express from 'express'
import http from 'http'
import path from 'path'
const __dirname = path.resolve()
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'


window.onload = function (){
    document.getElementById('mainTitle').textContent = "OnLoad Function()"
}




export function easteregg() {
    return document.getElementById('mainTitle').textContent = "????????"
}

const app = express()

app.set('port', 5500)
const appServer = http.createServer(app.get('port'),() => {
    console.log('WebServer Running on ' + app.get('port'))
})



