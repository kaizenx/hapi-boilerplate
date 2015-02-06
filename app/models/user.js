var Joi             = require('joi');
var ObjectAssign    = require('object-assign');
var BaseModel       = require('hapi-mongo-models').BaseModel;

module.exports = BaseModel.extend({

    _collection: 'Users',

    schema: Joi.object().keys({
        name: Joi.string().required()
    }),

    constructor: function(attrs) {
        ObjectAssign(this, attrs);
    },

    staticFunctionExample: function() {
        console.log('Model belongs to collection named', this._collection);
    }
});
