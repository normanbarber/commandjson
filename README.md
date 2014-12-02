# CommandJSON
A published requirement for hoarderless. It parses file and returns json object representing the files structure

##### install the package
    npm install commandjson

##### getFiles(data) expects an object with 2 properties for data.type, data.paths and it resolves a promise
    var cmdjson = require('commandjson');
    var file = {};
    file.type = 'html';
    file.paths = '/path/to/your/view/folder';
    return cmdjson.getFiles(file)
	.then(function(code){
	    console.log(code);
	});

##### commandjson returns an object
    Object {selectors: Object, code: Array[], filenames: Array[], status: "success" || "error"}

##### the selectors object, from the object shown above, is the most important of those. It is used to compare the css with the view in the final step. It contains an array for attributes, classes, ids and viewcode
    selectors: Object
        attributes: Array[]
        classes: Array[]
        ids: Array[]
        viewcode: Array[]
