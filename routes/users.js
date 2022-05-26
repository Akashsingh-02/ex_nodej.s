import express from "express";
import {v4 as uuidv4} from 'uuid';

const router = express.Router();
let users =[]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    //const userId =  uuidv4();

    users.push({ ...user, id: uuidv4() });
    res.send(`User: ${user.Name} has been added`);
    //console.log("User ${user.Name} has been added");
});

router.get(':/id', (req, res) => {
    const {id} = rew.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id!== id);

    res.send(`User with the id ${id} is deleted..`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { Name, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(Name) {
        user.Name = Name;
        // res.send(`name: ${Name} updated`)
    }

    if(age) {
        user.age = age;
    }

    res.send(`User with id ${id} has been updated`);
})
export default router;