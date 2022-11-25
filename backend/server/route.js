import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser,userLogIn,userSignUp  } from '../controller/user-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);


router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;