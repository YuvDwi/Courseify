const express = require("express"); 
const bodyParser = require("body-parser");    
const ejs = require('ejs'); 

const app = express();   
app.set("view engine", "ejs"); 

const SerpWow = require('google-search-results-serpwow') 
const serpwow = new SerpWow('82272D80EB914548A99CFD9C378852B2') // API key
app.use(bodyParser.urlencoded({extended: true}));  
app.use(express.static("public")); 

app.get("/", (req, res) => {   
    res.sendFile(__dirname + "/index.html"); 
})

app.post("/", (req, res) => {   

    var query = req.body.query; // User input sent from form 

    var params = {
        q: query,   
        location: 'Canada'
      }
    
   serpwow.json(params)
  .then((result) => {
   
    var data = result 
    var video1 = data.inline_videos[0].link    

    var prob1 = data.related_questions[0].question  
    var ans1 = data.related_questions[0].answer

    var prob2 = data.related_questions[1].question   
    var ans2 = data.related_questions[1].answer

    var prob3 = data.related_questions[2].question   
    var ans3 = data.related_questions[2].answer 

    var web1t = data.organic_results[0].title 
    var web2t = data.organic_results[1].title 
    var web3t = data.organic_results[2].title   

    var web1desc = data.organic_results[0].snippet 
    var web2desc = data.organic_results[1].snippet 
    var web3desc = data.organic_results[2].snippet

    var web1url = data.organic_results[0].cached_page_link 
    var web2url = data.organic_results[1].cached_page_link 
    var web3url = data.organic_results[2].cached_page_link
 
 


 
groups = video1.match(/.*\/(watch\?v=)?(.+)/)
let video_id = groups[groups.length - 1]
let embed_link = `https://www.youtube.com/embed/${video_id}` 

    res.render("learn", { 
        query: query,  
        video1:embed_link, 
        prob1:prob1, 
        prob2:prob2, 
        prob3:prob3, 
        ans1:ans1, 
        ans2:ans2, 
        ans3:ans3,  
        web1t:web1t, 
        web2t:web2t, 
        web3t:web3t, 
        web1url:web1url,  
        web2url:web2url, 
        web3url:web3url, 
        web1desc:web1desc,  
        web2desc:web2desc, 
        web3desc:web3desc
   })

    
  })
  .catch(error => {
    console.log(error);
  });


});
 

app.listen(process.env.PORT  || 3000, () => { 
    console.log("Server on port 3000");
}); 
 