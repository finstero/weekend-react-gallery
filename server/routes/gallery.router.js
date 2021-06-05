const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// DELETE Route
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
})

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;