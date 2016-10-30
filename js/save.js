var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');
var content;

$('#save').on('click',function(){
	content = $('.setMarkdownTextarea').val();
	if(window.fileName === undefined){

		dialog.showSaveDialog(function (fileName) {
	      
	       if (fileName === undefined){
	            alert("You didn't save the file");
	            return;
	        }
	        
	       fs.writeFile(fileName, content, function (err) {
	           if(err){
	               alert("An error ocurred creating the file "+ err.message)
	           }
	                        
	           alert("The file has been saved");
	       });
		}); 
		return;
	}

	fs.writeFile(window.fileName, content, function (err) {
        if(err){
            alert("An error ocurred creating the file "+ err.message)
        }
                        
        alert("The file has been saved");
    });

});


$('#saveAs').on('click',function(){

	content = $('.setMarkdownTextarea').val();

	dialog.showSaveDialog(function (fileName) {
       if (fileName === undefined){
            alert("You didn't save the file");
            return;
      }
        
       fs.writeFile(fileName, content, function (err) {
           if(err){
               alert("An error ocurred creating the file "+ err.message)
           }
                        
           alert("The file has been saved");
       });
	}); 
		
})



