import {fs} from 'fs';
import express, { Router } from 'express';




//Create routes with express and fs
const router = Router();
const app = express();

//Create a route to get all users
router.get('/', (req, res) => {
    fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

//Create a route to add a user
router.post('/', (req, res) => {
    fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            const users = JSON.parse(data);
            users.push(req.body);
            fs.writeFile('./users.json', JSON.stringify(users), (err) => {
                if (err) {
                    res.status(500).json({ message: err.message });
                } else {
                    res.status(201).json({ message: 'User added' });
                }
            });
        }
    });
});

//Create a route to delete a user
router.delete('/:id', (req, res) => {
    fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            const users = JSON.parse(data);
            const index = users.findIndex(user => user.id === req.params.id);
            if (index === -1) {
                res.status(404).json({ message: 'User not found' });
            } else {
                users.splice(index, 1);
                fs.writeFile('./users.json', JSON.stringify(users), (err) => {
                    if (err) {
                        res.status(500).json({ message: err.message });
                    } else {
                        res.status(200).json({ message: 'User deleted' });
                    }
                });
            }
        }
    });
});

//Create a route to update a user
router.put('/:id', (req, res) => {
    fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            const users = JSON.parse(data);
            const index = users.findIndex(user => user.id === req.params.id);
            if (index === -1) {
                res.status(404).json({ message: 'User not found' });
            } else {
                users[index] = req.body;
                fs.writeFile('./users.json', JSON.stringify(users), (err) => {
                    if (err) {
                        res.status(500).json({ message: err.message });
                    } else {
                        res.status(200).json({ message: 'User updated' });
                    }
                });
            }
        }
    });
});
