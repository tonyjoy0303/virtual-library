const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new book
router.post('/', async (req, res) => {
    try {
        // Validate required fields
        const { title, author, category, publishedYear } = req.body;
        
        if (!title || !author || !category || !publishedYear) {
            return res.status(400).json({ 
                message: 'All fields are required',
                details: {
                    title: !title ? 'Title is required' : null,
                    author: !author ? 'Author is required' : null,
                    category: !category ? 'Category is required' : null,
                    publishedYear: !publishedYear ? 'Published Year is required' : null
                }
            });
        }

        // Validate publishedYear is a number
        if (isNaN(publishedYear)) {
            return res.status(400).json({ 
                message: 'Published Year must be a number'
            });
        }

        // Create new book
        const book = new Book({
            title: title.trim(),
            author: author.trim(),
            category: category.trim(),
            publishedYear: parseInt(publishedYear)
        });

        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        console.error('Error creating book:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                message: 'Validation Error',
                details: Object.values(error.errors).map(err => err.message)
            });
        }
        res.status(500).json({ message: 'Error creating book' });
    }
});

// Update a book
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 