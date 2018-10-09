import express from 'express'
import {getAllTitles, getSingle, changeSingle} from './model'

const router = express.Router();

router.route('/').get((req, res) =>  {
    const result = [];
    getAllTitles(req).then((data) => {
        Object.keys(data).map((name) => {
            result.push(data[name].title)
        });
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/:id').get((req, res) =>  {
    getSingle(req.params.id).then((data) => {
        if (data[req.params.id]) {
            res.json(data[req.params.id].title);
        } else {
            res.json('This page does not exist')
        }
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/:id').put((req, res) =>  {
    changeSingle(req.params.id, req.body).then((data) => {
        if (data[req.params.id]) {
            res.json(data[req.params.id].title);
        } else {
            res.json('This page does not exist')
        }
    }).catch((err) => {
        console.log(err)
    })
});

export default router