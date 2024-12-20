const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios') 

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/", (req, res)=>{
   res.sendFile(__dirname + '/index.html');
} );

// app.post("/", (req,res)=>{
//    res.send("Thank you for posting something");
// });

app.post("/", (req,res)=>{
//    // console.log(req.body);
//    // console.log(req.body.num1);
//    // console.log(req.body.num2);
//    // res.send("Thank you for posting something");
   var num1 = Number(req.body.num1); // อ่านค่าจาก input1
   var num2 = Number(req.body.num2); // อ่านค่าจาก input2
   var result = num1 + num2; // รวมค่า
   res.send("The calculation result is : " + result); // แสดงผล
});

app.get('/bmiCalculator', (req, res) => {
   res.sendFile(__dirname + '/bmiCalculator.html');
} ); //สำหรับแสดงหน้า bmiCalculator.html

app.post('/bmiCalculator', (req, res) => {

      var weight = Number (req.body.weight);
      var height = Number (req.body.height);
      console.log(weight);
      console.log(height);
      var BMI = Math.round (weight/(height**2));
      res.send("คุณมีค่า BMI = " + BMI);

}); //สำหรับส่งผลการคำนวนค่า BMI ออกมา

app.get('/kanye', async (req, res) => {
   try {
       const url = 'https://api.kanye.rest/'; // Replace with the URL you want to fetch data from
       const response = await axios.get(url);
       res.json(response.data); // Send the fetched data as a response
   } catch (error) {
       res.status(500).send('Error fetching data');
   }
});

app.get('/java', async (req, res) => {
   try {
       const url = 'https://v2.jokeapi.dev/joke/Programming?contains=Java'; // Replace with the URL you want to fetch data from
       const response = await axios.get(url);
       res.json(response.data); // Send the fetched data as a response
   } catch (error) {
       res.status(500).send('Error fetching data');
   }
});


app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});

