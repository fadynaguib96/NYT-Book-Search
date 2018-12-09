const axios = require("axios");
const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models")


router.get("/books", (req, res) => {

  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })

    .then(function (results) {

      res.json(results.data)

    })
    .catch(err => console.log(err));
})

router.get("/save/:id", (req, res) => {

  axios
    .get("https://www.googleapis.com/books/v1/volumes/" + req.params.id)

    .then(function (results) {

        const myResults= {}


          const bookTitle = results.data.volumeInfo.title


          const bookAuthor = results.data.volumeInfo.authors[0]


          const bookDescription = results.data.volumeInfo.description


          const bookImage = results.data.volumeInfo.imageLinks.smallThumbnail


          const bookLink = results.data.volumeInfo.infoLink


          myResults.title = bookTitle
          myResults.author = bookAuthor
          myResults.des = bookDescription
          myResults.image = bookImage
          myResults.link =  bookLink

          // console.log(myResults)

          db.Book.create(myResults).then(function(dbBook){
            res.redirect("/")
          })


        })

        .catch(err => console.log(err));

      })

      router.get("/saved", (req, res) => {

          db.Book.find({}).then(function(results){
            console.log(results)
            res.json(results)
          })
          .catch(err => console.log(err));
      })


  




module.exports = router;



