  

const http = require("http");
const fs = require('fs');
fs.readFile('test.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let users = JSON.parse(data);
  console.log(users);

  const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.setHeader("content-type","application/json")
      res.end(JSON.stringify(users));
      fs.writeFileSync("demo.txt", "list of user : " + JSON.stringify(users) + "\n", { flag: 'a' });
    } else if (req.url === "/" && req.method === "POST") {
        req.on("data",(chunck)=>{
            let addedUser= JSON.parse(chunck);
            addedUser.id=users[users.length -1].id +1;
            users.push(addedUser)
            fs.writeFileSync("demo.txt", "Added user : " + JSON.stringify(addedUser) + "\n", { flag: 'a' });
            res.end("hello from add users");
        })
    } else if (req.url === "/sort" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        const usersSorted = users.sort((a, b) => a.name.localeCompare(b.name));
        res.end(JSON.stringify(usersSorted));
        fs.writeFileSync("demo.txt", "Sorted users : " + JSON.stringify(usersSorted) + "\n", { flag: 'a' });

      }else if (req.url =="/update" && req.method =="PUT") {
        req.on("data",(chunk)=>{
            let updateUser= JSON.parse(chunk);
            let user =users.find(element => element.id == updateUser.id)
            if(user){
                user.name =updateUser.name
            } else{
                res.end("user not found");
            }
            res.end(JSON.stringify(updateUser));
            fs.writeFileSync("demo.txt", "update user : " + JSON.stringify(updateUser) + "\n", { flag: 'a' });
        })
      }else if (req.url == "/delete" && req.method == "DELETE") {
        req.on("data", (chunk) => {
          let user = JSON.parse(chunk);
          let deletedUser = users.find(element => element.id === user.id);
          if (!deletedUser) {
            res.end("user not found ");
          } else {
            users = users.filter(element => element.id !== user.id);
            res.end("hello from delete user");
            fs.writeFileSync("demo.txt", "Deleted user : " + JSON.stringify(deletedUser) + "\n", { flag: 'a' });
          }
        });
      }else if (req.url=="/search"&& req.method =="GET") {
      
        req.on("data",(chunk)=>{
            res.setHeader("content-type","application/json")
            let searchUser= JSON.parse(chunk);
            let user =users.find(element => element.id == searchUser.id)
            if(user){
                user.id =searchUser.id
            } else{
                res.end("user not found");
            }
            res.end(JSON.stringify(user));
            fs.writeFileSync("demo.txt", "Searched user : " +JSON.stringify(user)+ "\n", { flag: 'a' })
        })
      }else{
        res.end("helllo");
      }

  });

  server.listen(3000, () => {
    console.log("server is running");
  });
});

