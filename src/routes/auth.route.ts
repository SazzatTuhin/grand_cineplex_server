import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter: Router = express.Router();

const authInstanse = new AuthController();

authRouter.post('/register', authInstanse.register);

authRouter.post('/login', authInstanse.login);

export default authRouter;
