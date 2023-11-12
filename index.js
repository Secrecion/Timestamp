// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/:date?",equalizer, time)

function equalizer(req, res, next){
  next();
}

function time(req, res){
    if(!req.params.date){
      const currentDate = new Date();
      res.json({ 
        "unix": currentDate.getTime(),
        "utc": currentDate.toUTCString()
      })
    }else{
      let prueba=new Date(req.params.date);
      let prueba2=new Date(parseInt(req.params.date));
      if(prueba.toString()=="Invalid Date" && prueba2.toString()=="Invalid Date"){
        res.json({ 
          "error": "Invalid Date",
        })
      }else{
        let datecheck= Math.floor(new Date(req.params.date).getTime());
        if(datecheck){
          let datenew2= new Date(parseInt(datecheck));
          res.json({ 
            "unix": datecheck,
            "utc": datenew2.toUTCString()
          })
        }else{
          let datenew= new Date(parseInt(req.params.date));
          res.json({ 
            "unix": parseInt(req.params.date),
            "utc": datenew.toUTCString()
          })
        }
      }
    }
   
};

// app.get("/api/",timeN);

// function timeN(res, req){
//   const currentDate = new Date();
//     res.json({ 
//       "unix": "hola",
//       "utc": currentDate.toUTCString()
//     })
// }
