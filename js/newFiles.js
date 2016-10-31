var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');
var buttons = ['OK', 'Save and create new file', 'Cancel'];

$('#newFile').on('click',function(){
	if(window.itIsSaved){
		$('.setMarkdownTextarea').val('');
		$('.viewMarkdown').html('');
		window.filePath = undefined;
		return;
	}

dialog.showMessageBox({ type: 'info', buttons: buttons, message: 'Create new file without saving your last work ?' }, function (response) {
    	
    	if(response === 0){
    		$('.setMarkdownTextarea').val('');
			$('.viewMarkdown').html('');
			window.filePath = undefined;
			return;
    	}

    	if(response === 2){
    		return;
    	}

    	content = $('.setMarkdownTextarea').val();
		
		if(window.filePath === undefined){

			dialog.showSaveDialog(function (fileName) {
			      
		       if (fileName === undefined){
		            alert("You didn't save the file");
		            return;
		        }
		        
		       fs.writeFile(fileName, content, function (err) {
		           if(err){
		               alert("An error ocurred creating the file "+ err.message)
		           }
		            window.itIsSaved = true;         
		            alert("The file has been saved");
		            $('.setMarkdownTextarea').val('');
				    $('.viewMarkdown').html('');
					window.filePath = undefined;
					return;
				});
			}); 
			return;
		}

		fs.writeFile(window.filePath, content, function (err) {
	        
	        if(err){
	            alert("An error ocurred creating the file "+ err.message)
	        }

	        window.itIsSaved = true;               
	        alert("The file has been saved");

	        $('.setMarkdownTextarea').val('');
			$('.viewMarkdown').html('');
			window.filePath = undefined;
			return;

   		 });

 	});
});


