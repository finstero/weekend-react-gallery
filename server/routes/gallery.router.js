const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
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


    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "gallery";';
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