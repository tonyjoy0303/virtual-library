const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    publishedYear: {
        type: Number,
        required: [true, 'Published Year is required'],
        min: [1000, 'Published Year must be at least 1000'],
        max: [new Date().getFullYear(), 'Published Year cannot be in the future']
    }
}, {
    timestamps: true,
    strict: true
});

// Create the model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book; 