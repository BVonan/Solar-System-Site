const express = require('express');
const app = express();
const fetch = require("node-fetch");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   res.render('home');
});

app.get('/mercury', (req, res) => {
   res.render('mercury');
});

app.get('/venus', (req, res) => {
   res.render('venus')
});

app.get('/saturn', (req, res) => {
   res.render('saturn')
});

app.get('/jupiter', (req, res) => {
   res.render('jupiter')
});
app.get('/mars', (req, res) => {
   res.render('mars')
});

app.get('/earth', async (req, res) => {

    
    let url=` https://api.unsplash.com/photos/random/?client_id=1QJtZcK_1xc92_nGsN1OSYUjaeYT-YVEG837GmLq60A&featured=true&query=planet%20earth`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data.urls.small);
    
    res.render('earth',{"earthpic":data.urls.regular, "edescription": data.description});
  
});
app.get('/nasa', async (req, res) => {

    
    let url=` https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=2023-03-16`;

    let response = await fetch(url);
    let data = await response.json();
    
    
    res.render('nasa',{"nasapic":data.url, "nasadescription": data.explanation});
  
});



app.listen(3000, () => {
   console.log('server started');
});