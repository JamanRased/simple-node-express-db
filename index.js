const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World! Hello MongoDTB')
})

const users = [
    {id: 1, name: "LeanneS Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 2, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 3, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 4, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 5, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 6, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 7, name: "Leanne Lraham",username: "Bret", email: "Sincere@april.biz"},
    {id: 8, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 9, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 10, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"},
    {id: 11, name: "Leanne Graham",username: "Bret", email: "Sincere@april.biz"}
]
app.get('/users', (req,res) =>{
    const search = req.query.search;
    if (search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
    }else{
        res.send(users)
    }  
});
//app.METHOD
app.post('/users', (req, res )=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the Post', req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser)
})
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
  console.log('Hello MongoDB', port);
})