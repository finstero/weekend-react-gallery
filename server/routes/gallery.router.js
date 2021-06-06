const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route. Adds 1 like for each click of like button.
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryString = 'UPDATE "gallery" SET "likes"=likes+1 WHERE "gallery".id = $1;';

    pool.query(queryString, [galleryId])
    .then (response => {
      console.log(response.rowCount);
      res.sendStatus(202);
    }).catch (error => {
      console.log('error in put', error);
      res.sendStatus(500);
    })

}); // END PUT Route

// DELETE Route. Deletes entire gallery card on delete button click.
router.delete('/delete/:id', (req, res) => {
    const deletePic = req.params.id;
    const queryString = `DELETE FROM "gallery" WHERE "gallery".id = $1;`
  
    pool.query(queryString, [deletePic])
    .then( response => {
      console.log(`deleted gallery card with id ${deletePic}`);
      res.sendStatus(200);
    })
    .catch( error => {
      console.log('error in delete', error);
      res.sendStatus(500);
    });
}) // END DELETE

// GET Route
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "gallery" ORDER BY "description";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch (error => {
    console.log('error getting into gallery table', error);
    res.sendStatus(500);
    });
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;