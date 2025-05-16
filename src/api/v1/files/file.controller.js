import fileService from "./file.service.js";

const fileController = {

    uploadFile :  async (req, res ) => {
        try {
            res.status(200).json({
                message :"File uploaded sucessfully"
            })
        } catch (ex) {
            console.log(ex);
            res.status(400).json({
                message : "something went wrong"
            });
        }
    },

    fetchUploadedFileList : async (req, res) => {
        try {
            const type = req.query.type;
            const data = await fileService.fetchUploadedFiles({
                type : type
            });
            res.status(200).json({
                message :"File List fetched sucessfully",
                data
            })
        } catch (ex) {
             console.log(ex);
            res.status(400).json({
                message : "something went wrong"
            });
        }
    }
};

export default fileController;