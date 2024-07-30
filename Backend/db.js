
// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin_20:Aks97420@cluster0.bclswht.mongodb.net/Feedback');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    mob_num: String,
    problem: String,
    description: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;