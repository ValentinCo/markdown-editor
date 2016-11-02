(function(){
	var app = require('electron').remote; 
	var dialog = app.dialog;
	var fs = require('fs');
	var showdown  = require('showdown');
	var data = require('./js/data.js');
	var listener = new window.keypress.Listener();

	var apply = {

		html: null,
		converter : null,

		init(){
			this.listeners();
		},

		listeners(){
			$('#open').on('click', apply.open);
			listener.simple_combo("ctrl o", apply.open);
		},

		updateView(fileNames, resp){
			data.filePath = fileNames[0];
	        $('title').html("Markdown Editor " + fileNames[0]);
	      	$(".setMarkdownTextarea").val(resp);
			apply.converter = new showdown.Converter();
			apply.html = apply.converter.makeHtml(resp);
	      	$("#viewMarkdown").html(apply.html);
		},

		openDialog(){
			dialog.showOpenDialog(function (fileNames) {
		        if(fileNames === undefined){
		           alert("No file selected");
		        }else{
		            fs.readFile(fileNames[0], 'utf-8', function (err, resp) {
				        if(err){
				            alert("An error ocurred reading the file :" + err.message);
				            return;
				        }
				        apply.updateView(fileNames, resp);
		    	    });
		        }
			});
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
	           data.itIsSaved = true;         
	           alert("The file has been saved");
			   apply.openDialog();
		    });
		},

		content(){
			data.content = $('.setMarkdownTextarea').val();
		},

		save(){
			apply.content();
			if(data.filePath === undefined){
				apply.showSaveDialog();
				return;
			}
			apply.writeFile(data.filePath);
		},

		open(){

			if(data.itIsSaved){
			    apply.openDialog();
				return;
			}
			
		   	dialog.showMessageBox({ type: 'info', buttons:['Saves and open new file','Open new file without saving','Cancel'], message: 'open' }, function (response) {
				if(response === 0){
					apply.save();
					return;
				}

				if(response === 2){
					return;
				}

			   	apply.openDialog();	
			});

		}

	}

	apply.init();


})();





