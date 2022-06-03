const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./Routes/htmlRoutes');
const apiRoutes = require('./Routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });