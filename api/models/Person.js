/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		name: 'string',
		pet: {
			model: 'Pet'
		}
	},
	afterUpdate: function(person, next) {
		console.log('updating', new Date());
		next();
	}
};

