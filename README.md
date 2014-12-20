# CommandJSON
A published requirement for hoarderless. It parses files in the folder you enter and returns a json object representing each files structure

##### install the package
```javascript
    npm install commandjson
```

```javascript
    var cmdjson = require('commandjson');
    var file = {};
    file.type = 'html'; ( the other option for type is css )
    file.paths = '/path/to/your/view/folder';  ( paths is plural here but right now is only one string. will become an array of strings )
    return cmdjson.getFiles(file)
	    .then(function(code){
	        console.log(code);
	    });
```
Require the module, and add the above code replacing /path/to/your/view/folder to a valid file system path   
getFiles(data), shown in the above code snippet, expects an object with 2 properties for data.type, data.paths and it resolves a promise

returns an object in this form
```javascript
    Object {
        selectors: Object,
        code: Array[],
        filenames: Array[],
        status: "success" || "error"
    }
```

the selectors object, from the object shown above, is used for most of the work while comparing the css with the view. It contains an array for attributes, classes, ids and viewcode
```javascript
    selectors: Object {
	    attributes: Array[],
	    classes: Array[],
	    ids: Array[],
	    viewcode: Array[]
	}
```