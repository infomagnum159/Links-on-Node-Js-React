const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const shortLinks = require('./app/links');
const shortLinksPost = require('./app/linkspost');

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;

app.use('/', shortLinks);
app.use('/links', shortLinksPost);

const run = async () => {
  await mongoose.connect("mongodb://localhost/links", {useNewUrlParser: true});
  console.log('DB connected');

  app.listen(port, () => {
    console.log(`Server started on $(port) port`);
  });
};

run().catch(e => console.error(e));