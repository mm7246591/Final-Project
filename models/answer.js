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
objectSchema.set('collection', 'objects');
let objects = mongoose.model('objects', objectSchema);
module.exports = objects;
