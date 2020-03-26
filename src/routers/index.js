var express = require('express')

import { Hello } from '../Controllers/Hello';
var hello = new Hello();

const router = express.Router()

router.get("/hello", hello.showName);