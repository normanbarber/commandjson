var fs = require('fs');
var Q = require('q');
var _ = require('underscore');
var jade = require('jade');
var path = require('path');
var cleancode = require('../lib/parserCleanCode.js');
module.exports = {

	/*  called from codeReaderMain.js
		reads input directory and files
		found in that directory */

	processFiles: function (files, directory, fileformat) {
		var all = [], promise = null;
		var errordata = {};
		var fileformatlength = fileformat.length;

		_.each(files, function(file) {

			var getformat = file.slice(-fileformatlength);
			var html;
			if(getformat === fileformat && file.slice(0,13) != '_hoarderless_'){
				var pj = path.join(directory,file);
				promise = Q.nfcall(fs.readFile, pj)
					.then(function(content) {
						if(fileformat === 'jade'){
							var fn = jade.compile(content.toString());
							html = fn();
							html = cleancode.cleanJade(html);
							console.log(html);
						}else
							html = content.toString();
						return {
							name: file,
							format: getformat,
							content: html
						}
					});

				all.push(promise);
			}
		});
		if(all.length > 0){
			return Q.allResolved(all)
				.then(function(promises) {
					return Q(_.map(promises, Q.nearer));
				});
		}else{
			errordata.message = 'Did not find any matching files in the folder searched';
			errordata.status = 'error';
			return Q.reject({error:errordata});
		}

	},
	processDir: function (directory) {
		var all = [];
		var promise = null;
		var errordata={};

		//directory = directory.replace(/\//g, '\\');
		if(directory === ''){
			errordata.message = 'You did not enter any folder';
			errordata.status = 'error';
			return Q.reject({error:errordata});
		}

		promise = Q.nfcall(fs.readdir, directory)
			.then(function(content) {
				return content;
			})
			.fail(function(error){

			})

		all.push(promise);
		return Q.allResolved(all)
			.then(function(promises) {
				return Q(_.map(promises, Q.nearer));
			});
	}

}
