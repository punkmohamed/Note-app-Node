import { readFile, writeFileSync } from 'fs';

let users;

readFile('test.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    users = JSON.parse(data);
    console.log(users);
})

const getAllUsers = (req, res) => {
    res.json(users);
}

const sortUsers = (req, res) => {
    const usersSorted = users.sort((a, b) => a.name.localeCompare(b.name));
    res.json(usersSorted);
    writeFileSync("demo.txt", "Sorted users : " + JSON.stringify(usersSorted) + "\n", { flag: 'a' });
}

const addUser = (req, res) => {
    req.body.id = users[users.length - 1].id + 1;
    users.push(req.body)
    res.send({ message: "Success" })
    writeFileSync("demo.txt", "Added user : " + JSON.stringify(req.body) + "\n", { flag: 'a' });
}

const updateUsers = (req, res) => {
    let user = users.find(element => element.id == req.body.id)
    if (user) {
        user.name = req.body.name
        res.send({ message: "Success" })
    } else {
        res.send({ message: "User not found" })
    }
    writeFileSync("demo.txt", "update user : " + JSON.stringify(req.body) + "\n", { flag: 'a' });
}

const deleteUsers = (req, res) => {
    users = users.filter(element => element.id != req.params.id);
    writeFileSync("demo.txt", "Deleted user : " + JSON.stringify(users) + "\n", { flag: 'a' });
    res.send({ message: "Success" })
}

const searchUsers = (req, res) => {
    let user = users.find(element => element.id == req.params.id)
    if (user) {
        user.id = req.params.id
        res.send({ message: "Success", user })
    } else {
        res.send({ message: "User not found" })
    }
    writeFileSync("demo.txt", "Searched user : " + JSON.stringify(user) + "\n", { flag: 'a' })
}

export {
    searchUsers,
    updateUsers,
    deleteUsers,
    getAllUsers,
    sortUsers,
    addUser
}