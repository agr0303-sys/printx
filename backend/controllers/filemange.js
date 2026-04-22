const multer = require('multer');
const { google } = require('googleapis');
const stream = require('stream');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const auth=require("../config/googlecloudconnect");

//file id is used here+
//upload a file 
exports.uploadFile = async (req, res) => {
    try {
     //code to upload file 
        
     });
     console.log("done4");
     console.log('File uploaded:', uploadedFile.data);
 
     res.status(200).json({ message: 'File uploaded successfully',fileid:uploadedFile.data.id });
    } 
     catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };
//route to download a file
// app.get('/download/:fileId',
exports.downloadfile=async(req, res) => {
    try{
       //codde
  
        
    }catch(err){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });

    }
};
 
//route to view a file
exports.viewfile=async(req, res) => {
  
   
  }
//delete a fiel 
exports.deletefile=async(req, res) => {
  
    
    
   
  }

