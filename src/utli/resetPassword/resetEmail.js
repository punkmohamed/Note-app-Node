import { createTransport } from "nodemailer";
import emailForgotPasswordTemplate from "./resetPasswordEmail.js";

const resetPasswordEmail = async (email, token) => {
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
        html: emailForgotPasswordTemplate(email, token)
    });

}

export default resetPasswordEmail;