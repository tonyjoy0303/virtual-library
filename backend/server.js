const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const booksRouter = require('./routes/books');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://tonyjoyjp:Ek5RZKsAZwEX2iB7@cluster0.xu0gtab.mongodb.net/virtual_library?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

// Routes
app.use('/api/books', booksRouter);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Virtual Library API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 