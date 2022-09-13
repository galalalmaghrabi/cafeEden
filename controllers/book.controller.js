const nodemailer = require("nodemailer");

exports.bookTable = (formMessage) => {
    return new Promise((resolve,reject)=>{
        const messageHtml = `<div>
        <em>name : </em><span>${formMessage.firstname + "" + formMessage.lastname}</span>
    <br />
        <em>email : </em><span>${formMessage.email} </ </span>
    <br />
        <em>phone : </em><span>${formMessage.phone} </</span>
    <br />
        <em>date : </em><span>${formMessage.date} </</span>
    <br />
        <em>time : </em><span>${formMessage.time} </</span>
    <br />
        <em>persons : </em><span>${formMessage.persons} </</span>
    <br />
    <em>reason : </em><span>${formMessage.reason} </</span>
    <br /> 
    </div>`
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'galalashraf102@gmail.com',
            pass: 'wsfuocuuxbxbdsps'
        },
    });
    // send mail with defined transport object
        let info = transporter.sendMail({
            from: `galalashraf102@gmail.com`, // sender address
            to: "galalashraf102@gmail.com", // list of receivers
            subject: "Book Table", // Subject line
            text: ``,
            html: `${messageHtml}`, // html body
        })
})}