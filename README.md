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

##### commandjson returns an object
    Object {selectors: Object, code: Array[], filenames: Array[], status: "success" || "error"}


##### the selectors object is used in the comparison code
    selectors: Object
        attributes: Array[]
        classes: Array[]
        ids: Array[]
        viewcode: Array[]



code: Array[]
	0: Object
		content: "<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>some file</title></head><body><div id="container"></div></body></html>"
		format: ".html"
		name: "about.html"


filenames: Array[]
	0: "about.html"
	1: "charts.jade"
	2: "graphs.jade"
	3: "index.html"
	4: "index.jade"

status: "success"  || "error"