(function(){
	var app = require('electron').remote; 
	var dialog = app.dialog;
	var fs = require('fs');
	var listener = new window.keypress.Listener();
	var data = require('./js/data.js');

	var apply = {

		init(){
			this.listeners();
			this.itIsSaved();
		},

		itIsSaved(){
			$('.setMarkdownTextarea').change(function(){
				data.itIsSaved = false;
			});
		},

		content(){
			data.content = $('.setMarkdownTextarea').val();
		},

		showSaveDialog(){
			dialog.showSaveDialog(function (fileName) {
		        if (fileName === undefined){
		            alert("You didn't save the file");
		            return;
		        }
		        apply.writeFile(fileName);
		    	return;
			}); 
		},

		writeFile(fileName){
			fs.writeFile(fileName, data.content, function (err) {      
	           if(err){
	               alert("An error ocurred creating the file "+ err.message)
	           }
	           data.itIsSaved = true;         
	           alert("The file has been saved");
		    });
		},

		saveAs(){
			apply.content();
			apply.showSaveDialog();
		},

		fastSave(){
			apply.content();
			if(data.filePath === undefined){
				apply.showSaveDialog();
				return;
			}
			apply.writeFile(data.filePath);
		},

		listeners(){
			$('#saveAs').on('click',apply.saveAs);
			$('#save').on('click',apply.fastSave);
			listener.simple_combo("ctrl s", apply.fastSave);
		}

	}

	apply.init();


})();






//conflit si ctrl shift s
