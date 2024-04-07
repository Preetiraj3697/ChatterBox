import express from 'express';
import { getMyProfile, login, newUser } from '../controllers/user.js';
import {singleAvatar} from '../middlerwares/multer.js'
import { isAuthenticated } from '../middlerwares/auth.js';
const app = express.Router()

//http://localhost:3000/user
app.post("/new",singleAvatar,newUser)
app.post("/login", login);

app.use(isAuthenticated);

app.get("/me", getMyProfile);

export default app;