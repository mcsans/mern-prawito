const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const AuthRoutes = require('./src/routes/auth');
const BlogRoutes = require('./src/routes/blog');

// UPLOAD IMAGE
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// MIDDLEWARE UPLOAD IMAGE
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));

// MIDDLEWARE REQUEST BODY
app.use(bodyParser.json());

// CORS ORIGIN
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// ROUTE GROUP
app.use('/v1/auth', AuthRoutes);
app.use('/v1/blog', BlogRoutes);

// DINAMIS ERROR RESPONSE
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({ message: message, data: data });
});

// MONGODB CONNECTION
mongoose.connect('mongodb+srv://mcsans:Pzrgtof8hxKwBEhF@cluster0.icjaj7n.mongodb.net/mernapi?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(4000, () => console.log('Connection Successfully'));
    })
    .catch(err => console.log(err));