# CommandJSON
Published package requirement for hoarderless. It parses file and returns json object representing the files structure

##### getFiles(data) expects an object with 2 properties for data.type, data.paths and it resolves a promise
	var cmdjson = require('commandjson');
	var file = {};
	file.type = 'html';
	file.paths = '/path/to/your/view/folder';
	return cmdjson.getFiles(file)
		.then(function(code){
			console.log(code);
		});

