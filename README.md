# CommandJSON
A published requirement for hoarderless. It parses files in the folder you enter and returns a json object representing each files structure

##### install the package
    npm install commandjson

##### getFiles(data) expects an object with 2 properties for data.type, data.paths and it resolves a promise
    var cmdjson = require('commandjson');
    var file = {};
    file.type = 'html'; ( the other option for type is css )
    file.paths = '/path/to/your/view/folder';  ( paths is plural here but right now is only one string. will become an array of strings eventually'
    return cmdjson.getFiles(file)
	.then(function(code){
	    console.log(code);
	});

##### commandjson returns an object
    Object {selectors: Object, code: Array[], filenames: Array[], status: "success" || "error"}

##### the selectors object, from the object shown above, is the most important of those. It is used to compare the css with the view in  step3 of hoarderless. It contains an array for attributes, classes, ids and viewcode
    selectors: Object
	attributes: Array[]
	classes: Array[]
	ids: Array[]
	viewcode: Array[]
