import data from '../data'

export const getAll = (req) => {
    return new Promise((resolve, reject) => {
        if(data)
            resolve(data);
        reject()
    })
};