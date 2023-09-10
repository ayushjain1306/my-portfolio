const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/style'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/style/index.html");
})

app.get("/:page", (req, res) => {
    const page = req.params.page;
    res.sendFile(__dirname + `/style/${page}.html`);
});

app.post("/", async (req, res) =>{
    const message = req.body.description;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    var transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.email,
            pass: process.env.pass
        },
        secure: true,
    })

    await new Promise((resolve, reject)=>{
        transporter.verify(function (error, success){
            if (error){
                console.log(error);
                reject(error);
            }
            else {
                console.log("Server is ready to take messages.");
                resolve(success);
            }
        })
    })

    var mailOptions ={
        from: email,
        to: process.env.email,
        subject: "New Contact form Submission",
        text: `Name: ${name}\nE-mail: ${email}\nPhone: ${phone} \nSubject: "New Contact form Submission"\nMessage: ${message}`
    };

    await new Promise((resolve, reject)=>{
        transporter.sendMail(mailOptions, (err, info)=>{
            if (error){
                res.status(500).send(error);
            }
            else{
                console.log("Email send:", info.response);
                res.status(200).send(`
                    <script>
                        alert("Thanks for contacting. Please wait for a response.");
                        window.location.href = "/contact.html";
                    </script>
                `);
            }
        })
    })

})

app.listen(PORT, ()=>{
    console.log(`Server is starting at port ${PORT}.`);
})

