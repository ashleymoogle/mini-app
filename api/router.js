import express from 'express'
import title from './title/controller'
import all from './all/controller'

const router = express.Router();

router.use('/all', all);
router.use('/title', title);

export default router