const nodemailer = require("nodemailer");
const html=`<h1>Hello Nodemailer</h1>`;
async function main(){
const transporter=nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  auth: {
    user:"amalajames1995@gmail.com",
    pass: "tgow osei qypj ryaq",
  },

});
const info=await transporter.sendMail({
    from: "<amalajames1995@gmail.com>",
    to: "<amalavak95@gmail.com>", 
    subject: "Test email for nodemailer", 
    html: html, 


})
console.log("Message sent:"+ info.messageId);
}
main()
.catch(e=>console.log(e));
