import sendEmail from "../../../config/mailer.js";

const emailController = {

    send : async (req, res) => {
        try {
            await sendEmail({
                data : '<h1>test</h1>',
                to : 'thesanketagrawal@gmail.com'
            })
            res.status(200).json({
                message :"working"
            })
        } catch (ex) {
            console.log(ex);
            res.status(400).json({
                message :"Something went wrong"
            })
        }
    }

};

export default emailController;