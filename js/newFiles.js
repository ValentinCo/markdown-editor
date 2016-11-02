(function(){
	var app = require('electron').remote; 
	var dialog = app.dialog;
	var fs = require('fs');
	var data = require('./js/data.js');

	var apply = {
		buttons : ['Create new file', 'Save and create new file', 'Cancel'],
		message : 'Create new file without saving your last work ?',
		
		init(){
			this.listerner();
		},

		listerner(){
			$('#newFile').on('click',apply.newFile)
		},

		isSaved(){
			$('.setMarkdownTextarea').val('');
			$('.viewMarkdown').html('');
			$('title').html('Markdown Editor /new file')
			data.filePath = undefined;
			data.itIsSaved = true;
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
			}); 
		},

		writeFile(fileName){
			fs.writeFile(fileName, data.content, function (err) {
	            if(err){
	               alert("An error ocurred creating the file "+ err.message)
	            }
	            alert("The file has been saved");
	            apply.isSaved();
			});
		},

		save(){
			if(data.filePath === undefined){
				apply.showSaveDialog();
				return;
			}
			apply.writeFile(data.filePath);
		},

		newFile(){
			if(data.itIsSaved){
				apply.isSaved();
				return;
			}
			apply.content();
			dialog.showMessageBox({ type: 'info', buttons: apply.buttons, message: apply.message }, function (response) {

		   		if(response === 0){
		    		apply.isSaved();
					return;
		    	}
		    	if(response === 2){
		    		return;
		    	}
		    	apply.save();
		 	});

		}
	}
	apply.init();
})();



