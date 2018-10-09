import fs from 'fs'
import data from '../data'

let fileName = '../data.json';
let file = require(fileName);

export const getAllTitles = (req) => {
    return new Promise((resolve, reject) => {
        if(data)
            resolve(data);
        reject()
    })
};

export const getSingle = (id) => {
    return new Promise((resolve, reject) => {
        if(data)
            resolve(data);
        reject()
    })
};

export const changeSingle = (id, body) => {
    return new Promise((resolve, reject) => {
        let d = file;
        d[body.name].title = body.title;
        const content = JSON.stringify(d);
        fs.writeFile(fileName, content, 'utf8', function (err) {
            if (err) {
                reject(err);
            }
            console.log("The file was saved!");
            resolve(file);
        });
    })
};