

const express=require('express');
const router=express.Router();
const newsController=require('../controllers/newsController')

router.get('/news', newsController.list);
router.post('/news/add', newsController.add);
router.get('/news/delete/:id_news', newsController.delete);

module.exports=router;