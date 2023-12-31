const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);


const Book = mongoose.model('books', bookSchema);
module.exports = Book;