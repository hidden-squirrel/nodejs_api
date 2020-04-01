var express = require('express')

import { Hello } from '../Controllers/Hello';
var hellos = new Hello();
const router = express.Router()


router.get("/hello", hellos.showName);