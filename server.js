const axios = require("axios");
const express = require("express");
const cors = require("cors")

const app = express();


app.use(express.json({
  extended: false
}))
app.use(cors())



app.post("/user", (req, res) => {
  console.log(req.body.pseudo)
  axios.get("https://api.fortnitetracker.com/v1/profile/" + req.body.platform + "/" + req.body.pseudo,
  {
    headers: {
      "TRN-Api-Key":"5f51cfcb-1ab8-4181-aeb4-7abcb3d554c1"
    }
  })
  
.then(function(response) {


  console.log(res.data);
    res.send(response.data);
  })
  
  
  
  .catch(function(error) {
    console.log("err", error);
    res.send("error");
  });

})


// app.get("/", (req, res) => {
//   axios.get("https://api.fortnitetracker.com/v1/profile/" + platform.pc + "/" + pseudo,
//   {
//     headers: {
//       "TRN-Api-Key":"5f51cfcb-1ab8-4181-aeb4-7abcb3d554c1"
//     }
//   })

// .then(function(response) {


// console.log(res.data);
//   res.send(response.data);
// })



// .catch(function(error) {
//   console.log("err", error);
//   res.send("error");
// });
// });



app.listen(8888);
