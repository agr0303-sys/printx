const express =require("express");
const router = express.Router();
const multer = require('multer');

const {uploadFile, downloadfile, viewfile,deletefile}=require("../controllers/filemange");

const upload = multer();
// Shop auth router

// Route for handling file upload
router.post('/upload', upload.single('file'), uploadFile);
router.get('/download/:fileId', downloadfile);
router.get('/view/:fileId',viewfile);
router.get('/delete/:fileId',deletefile);
module.exports=router;