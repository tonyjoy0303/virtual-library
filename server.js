const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const MONGODB_URI = 'mongodb+srv://tonyjoyjp:Ek5RZKsAZwEX2iB7@cluster0.xu0gtab.mongodb.net/virtual_library?retryWrites=true&w=majority';

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch((err) => console.error('MongoDB Atlas connection error:', err));

// Routes
const booksRouter = require('./backend/routes/books');
app.use('/api/books', booksRouter);

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Virtual Library Management System API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 