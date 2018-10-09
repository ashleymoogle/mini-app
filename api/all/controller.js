import express from 'express'
import {getAll} from './model'

const router = express.Router();

router.route('/').get((req, res) =>  {
    getAll(req).then((data) => {
        console.log(data)
        res.json(data);
    }).catch((err) => {
        console.log(err)
    })
});

export default router
