import express from 'express'
import http from 'http'
import path from 'path'
const __dirname = path.resolve()
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
var fs = import('fs')