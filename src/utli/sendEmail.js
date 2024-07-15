import { createTransport } from "nodemailer";
import emailTemplate from "./emailTemplate.js";
const sendOurEmail = async (email) => {
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "note.node.app@gmail.com",
            pass: "mbax sqfm lzdz ixey",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Note app " <note.node.app@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: emailTemplate(email)
    });

}

export default sendOurEmail;