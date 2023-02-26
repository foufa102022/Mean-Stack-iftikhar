const express = require('express')
const route = express.Router()
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const Post = require("backend/models/post.model");

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3000, () => {
    console.log("server is running on port 3000...");
});

mongoose
  .connect(
"mongodb+srv://chetouiiftikhar:vitonicconception@cluster0.hnqbnlb.mongodb.net/listepost?retryWrites=true&w=majority"
  )
  .then(() => { 
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });


  
route.get("/posts", (req, res) => {
  
    Post.findById({})
      .then((monpost) => {
        console.log(monpost);
        res.status(200).json(monpost);
      })
      .catch((err) => {
        res.status(404).json({ message: "post not found!" });
        console.log("post non trouvé !");
      });
  
    }
  );
