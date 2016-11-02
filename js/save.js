(function(){

	var app = require('electron').remote; 
	var dialog = app.dialog;
	var fs = require('fs');
	var listener = new window.keypress.Listener();
	var data = require('./js/data.js');


	

	var apply = {

		init : function(){
			this.listeners();
			this.itIsSaved();
		},

		itIsSaved : function(){

			$('.setMarkdownTextarea').change(function(){
				data.itIsSaved = false;
			});

		},

		content:function(){
			data.content = $('.setMarkdownTextarea').val();
		},

		showSaveDialog : function(){
			
			dialog.showSaveDialog(function (fileName) {
		      
		       if (fileName === undefined){
		            alert("You didn't save the file");
		            return;
		        }
		        
		       
		        apply.writeFile(fileName);
		    	return;

			}); 
		},

		writeFile : function(fileName){

			fs.writeFile(fileName, data.content, function (err) {
		           
		           if(err){
		               alert("An error ocurred creating the file "+ err.message)
		           }

		           data.itIsSaved = true;         
		           alert("The file has been saved");

		    });
		},

		saveAs : function(){
			apply.content();
			apply.showSaveDialog();
		},

		fastSave : function(){
			apply.content();
			if(data.filePath === undefined){
				apply.showSaveDialog();
				return;
			}
			apply.writeFile(data.filePath);
		},

		listeners : function(){
			$('#saveAs').on('click',apply.saveAs);
			$('#save').on('click',apply.fastSave);
			listener.simple_combo("ctrl s", apply.fastSave);
		}

	}


	apply.init();

})();






//conflit si ctrl shift s

