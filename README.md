# Project Title Inspiration:
The COVID-19 pandemic has affected everybody in one way, or another. Many have lost their jobs, or have started working from home. In Ontario, Canada, students all across the province have gone through months of quarantine, where they were forced to learn from home. This drastic change was grueling for all, and drastically affected the learning of those who were impacted. Many people struggled with the adjustment, there aren’t many free online tools that can help students overcome the challenges of distance learning. That’s exactly where Courseify comes in, it brings a whole new level of online learning that is very easy to adapt to. This platform is meant to assist students through the terrors of learning virtually. 

Courseify isn’t just a platform strictly used during quarantine. It’s meant to turn everyday learning effective. Most students tend to forget the content found in videos they have watched. With Courseify’s new and improved method of watching educational videos, it allows for students to more thoroughly compound on the content that is given to them. The best way to learn is to do, and we capitalize on this very theory. 

### What it does:
Courseify strides to improve students' learning by creating a platform where they can have access to both instructional material as well as a wide range of other practise worksheets, questions and other practise material for a topic of their choice. Through scraping the internet Courseify finds the perfect set of materials to help the user learn about a particular topic and practise the skills learned or test their knowledge.

### How we Built it:
Frontend:  The frontend was designed in Adobe XD in combination with illustrator, and then built using HTML, CSS and Javascript.  With bootstrap as our fundamental library. The use of react and other frontend frameworks was considered, although there was no apparent benefit

Backend: Through the use of a web scraping API we were able to collect a slew of data such as relevant videos, practice questions, and other material that is beneficial to the user. This web scraping API was then connected to the frontend using Node.JS and Express.JS where user input was processed and relevant information relating to the topic of choice was outputted. To deploy and scale our web application for ease of access we used Heroku cloud applications platform. 

Logo: The logo was made using Adobe Illustrator and Photoshop.

Pitch Video: The video was edited using Final Cut Pro and Adobe After Effects.


### Challenges we ran into: 
Throughout the process of creating Courseify, we ran into many challenges which inevitably lost us time on our build. Although conceptualizing an idea took long enough, hurdles along the way also made it more difficult to complete our submission. For one, this was the first time we had used Node.JS and Express to link the frontend and the backend. In addition to this, the Youtube API that we planned to use, didn’t allow us to use the relevant data that we needed. So we had to extrapolate, instead we used a web scraping API, which fetched blurry images and mounds of data that had to be programmatically sifted through. This led up to improvise and provide the users with the resources/articles to the images for further reading. Also we struggled to parse the HTTPS requests from the API as it would not return a usable JSON object, we spent hours with mentors trying to debug this, but in the end we read the API documentation and found a workaround for this problem. We thank mentors at Uottawa Hack for assisting us in this project.

In the end building a product with technologies so foregin to us in such a small time frame really constricted our vision. We tried to cram in as much detail as programmatically possible and refining all the kinks in our platform.

### Accomplishments we’re proud of:
Overall, completing Courseify was a huge accomplishment on its own. After the countless hours of work we put in, we were glad to see the outcome had finished the way it did. We’re happy that we could navigate around the failed use of an API without deprecating the entire project. The project was built around the Youtube API, which couldn’t serve its purpose. With such a glaring issue, we’re proud to have worked around it with minimal effect on our platform. Also this was the first time we successfully built a web application using Node.js and Express.js at a hackathon which highlighted our experience using theyse modules.

### What we learned: 
How to work in a team and divide up the work to complete a larger project in a shorter period of time.
That attempting to hack at harder projects pays off in the long run.  
Time management is key, especially when you only have 36 hours to complete and polish a project.


### What’s next for Courseify:
We don’t like to constrict projects and have them wither away in our repository. As students ourselves, we see the potential for such a platform and how it could solve learning issues for many people studying remotely. We hope to bring increased support for other subjects, like adding Tensorflow ML algorithms to better sift through data and provide more relevant questions for the user. In addition, we hope to create a more developed user interface and questions from a wider range of websites and resources.
