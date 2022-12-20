const express=require('express')
const multer = require('multer')
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const router=express.Router()
const middlewareadmin = require('../middleware/authMiddlewarea')
const middleware = require('../middleware/authMiddleware')
const {addProject,getProject,updateProject,deleteProject} = require('../controlers/ProjectRefControler')
// const cloudConfig =require('../helpers/cloudinary')

// const storage= new CloudinaryStorage({
// cloudinary,
// params:{
//     folder:'DEV',
// }
// });
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer ({storage});


router.post('/newproject',upload.single('uploads'),middleware,addProject)
router.get('/getproject',getProject)
router.put('/:projectId/updatproject',upload.single('uploads'),updateProject)
router.get('/:projectId/deleteproject',middleware,deleteProject)



module.exports=router