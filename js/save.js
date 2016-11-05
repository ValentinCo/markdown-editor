(function(){
	var app = require('electron').remote; 
	var dialog = app.dialog;
	var fs = require('fs');
	var listener = new window.keypress.Listener();
	var data = require('./js/data.js');
	const {ipcRenderer} = require('electron')
	var exit = app.getGlobal('app')

	var apply = {

		init(){
			this.listeners();
			this.itIsSaved();
			this.closeWin();
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
	           data.filePath = fileName;  
	           $('title').html("Markdown Editor " + fileName);    
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
		},

		saveAndClose(){
			apply.content();
			if(data.filePath === undefined){
				dialog.showSaveDialog(function (fileName) {
			        if (fileName === undefined){
			            alert("You didn't save the file");
			            return;
			        }
			        fs.writeFile(fileName, data.content, function (err) {      
			           if(err){
			               alert("An error ocurred creating the file "+ err.message)
			           }
			            data.itIsSaved = true;   
			            data.filePath = fileName;  
			       		exit();
				    });
				});
				return;
			}

			fs.writeFile(data.filePath, data.content, function (err) {      
	           if(err){
	               alert("An error ocurred creating the file "+ err.message)
	           }
	           data.itIsSaved = true;   
	           data.filePath = data.filePath;  
	           $('title').html("Markdown Editor " + data.filePath);    
	           exit();
		    });
			

		},

		closeWin(){

			window.onbeforeunload = (e) => {
			    e.returnValue = false;
			    dialog.showMessageBox({ type: 'info', buttons: ['Save and close','Close without saving', 'Cancel'], message:'You leave without saving' }, function (response) {

				  	if(response === 0){

				  		 apply.saveAndClose()
				  	}

				  	if(response === 1){
				  		exit();
				  	}

				  	if(response === 2){
				  		return;
				  	}

			    });

			}
		}

	}

	apply.init();


})();






//conflit si ctrl shift s
