const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
const feedbackData = req.body
console.log('feedback data being sent to DB',feedbackData);
const sqlText = `
INSERT INTO "feedback" 
("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4);
`
const sqlValues = [
    feedbackData.feeling,
    feedbackData.understanding,
    feedbackData.supported,
    feedbackData.comments
]

pool.query(sqlText,sqlValues)

.then((DBresponse) => {
    res.sendStatus(201)
})

.catch((DBerror) => {
    console.log('err ADDING FEEDBACK',DBerror );
    res.sendStatus(500);
});

})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
