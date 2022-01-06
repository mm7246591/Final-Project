let mongoose = require('mongoose');

let objectSchema = mongoose.Schema({
    object: {
        type: String
    },
    Single: {
        type: Array
    },
    Multiple: {
        type: Array
    },
    Optional: {
        type: Array
    }
});
<<<<<<< HEAD
dataSchema.set('collection','objects');
let objects = module.exports = mongoose.model('objects', dataSchema)
=======
objectSchema.set('collection', 'objects');
let objects = mongoose.model('objects', objectSchema);
module.exports = objects;
>>>>>>> 93c1db96092b290d2847ca2c12cef2cecb5ecd24
