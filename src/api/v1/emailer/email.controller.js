const emailController = {

    send : async (req, res) => {
        try {
            res.status(200).json({
                message :"working",
                data : []
            })
        } catch (ex) {
            console.log(ex);
            res.status(400).json({
                message :"failed"
            })
        }
    }

};

export default emailController;