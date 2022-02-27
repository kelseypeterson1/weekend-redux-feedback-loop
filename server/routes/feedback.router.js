const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET route
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
}); // end GET route

// POST route
router.post('/',  (req, res) => {
  let newFeedback= req.body;
  console.log(`Adding feedback`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;

  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding feedback`, error);
      res.sendStatus(500);
    });
}); // end POST route

// DELETE route
router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete ID', reqId);
  let queryText = 'DELETE FROM feedback WHERE id = $1;'
  pool.query(queryText, [reqId])
      .then((result) => {
          console.log('Feedback deleted');
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log('Error making database query', queryText, error);
          res.sendStatus(500);
      })
}) // end DELETE route

module.exports = router;
