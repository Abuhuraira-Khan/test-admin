import express from 'express';
import { homeAddHeroSecText, homeAboutMeSec,getAboutSecDetails,homeAddNewService,getAllServices,deleteService,homeAddNewSkill,getAllSkill,deleteSkill } from '../controller/homepageController.js';

const router = express.Router();

router.post('/heroSecText',homeAddHeroSecText)
router.post('/aboutSecDetails/:id',homeAboutMeSec)
router.get('/getAboutSecDetails/:section',getAboutSecDetails)
router.post('/addNewService/:id&:edit',homeAddNewService)
router.get('/getAllServices/:section',getAllServices)
router.delete('/deleteService/:collId&:id',deleteService)
router.post('/addNewSkill/:id',homeAddNewSkill)
router.get('/getAllSkill/:section',getAllSkill)
router.delete('/deleteSkill/:collId&:id&:type',deleteSkill)


export default router;