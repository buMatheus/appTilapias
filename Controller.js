const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
let user=models.User;
let adress = models.Endereco;

app.post('/login', async (req,res)=>{
    const response = await user.findOne({
        where: {userName: req.body.userName, password: req.body.password}
      });
      if(response === null){
        res.send(JSON.stringify('failed'));
      }else{
        res.send(response);
      }
    
});

app.post('/createUser', async (req,res)=>{
      await user.create({
        firstName: req.body.userName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    const response = await user.findOne({
        where: {userName: req.body.userName, password: req.body.password}
      });
      if(response === null){
        res.send(JSON.stringify('failed'));
      }else{
        res.send(response);
      }
});

app.get('/readUser', async (req,res)=>{
    let readUser = await user.findByPk(req.body.userId);
    if(readUser === null){
      res.send(JSON.stringify('failed'));
    }else{
      res.send(readUser);
    }
});

app.get('/readAdress', async (req,res)=>{
  let readAdress = await adress.findByPk(req.body.adressId);
});
app.post('/readAllAdress', async (req,res)=>{
  console.log('Cheguei');

  let readAllAdress = await adress.findAll({
    where: {
      userId: req.body.userId
    }
  });
  if(readAllAdress === null){
    res.send(JSON.stringify('failed'));
    console.log('failed');
  }else{
    res.send(readAllAdress);
    console.log(readAllAdress);
  }
  
});

app.post('/updateUser', async (req,res)=>{
  console.log(req.body);
  let response = await user.findOne({
    where:{
      id:req.body.id
    }
  });
  if(response === null ){
    res.send(JSON.stringify('failed'));
  }else{
    response.id = req.body.id;
    response.firstName = req.body.firstName;
    response.lastName = req.body.lastName;
    response.email = req.body.email;
    response.userName = req.body.userName;
    response.password = req.body.password;
    response.save();
    res.send(JSON.stringify('Atualizado com sucesso!'));
  }
    
    
});

app.get('/deleteUser', async (req,res)=>{
    user.destroy({
        where: {id: 1}
      });
    res.send('Usuário editado com sucesso!');
});




app.post('/createAdress', async (req,res)=>{
  await adress.update({ activity: false }, { // coloca activity de todos os endereços do usuário logado em false
    where: {
      userId: req.body.userId
    }
  });
  const response = await adress.create({ // Cria novo Endereço, colocando activity em true
    cep: req.body.cep,
    estado: req.body.uf,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    complemento: req.body.complemento,
    activity: req.body.activity,
    userId: req.body.userId,
    createdAt: new Date(),
    updatedAt: new Date(),
});
  if(response === null){
    res.send(JSON.stringify('failed'));
  }else{
    res.send(response);
  }
});


let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
})