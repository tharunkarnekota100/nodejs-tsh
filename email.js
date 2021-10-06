
var nodemailer = require('nodemailer')


var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth :{
        user : 'tharunkarnekota1@gmail.com',
        pass: 'Th@run121'
    }
})

var options = {
    from : 'tharunkarnekota1@gmail.com',
    to : 'tharunkumar12505@gmail.com',
    subject : 'i am here to test nodeEmail',
    text : 'Thats easy to use',
}

transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email is sent'+info.response);
    }
})