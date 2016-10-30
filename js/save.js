var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');
var content;
var listener = new window.keypress.Listener();


function saveAs(){
	content = $('.setMarkdownTextarea').val();

	dialog.showSaveDialog(function (fileName) {
        if (fileName === undefined){
           alert("You didn't save the file");
           return;
        }

        window.fileName = fileName;
        console.log(window.fileName)

        fs.writeFile(fileName, content, function (err) {
           if(err){
               alert("An error ocurred creating the file "+ err.message)
           }
                        
           alert("The file has been saved");
           return;
       });
	}); 
}

function save(){
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
}


listener.simple_combo("ctrl shift s", saveAs.bind(this));

$('#saveAs').on('click',function(){
	saveAs();	
})



listener.simple_combo("ctrl s", save.bind(this));

$('#save').on('click',function(){
	save();
});



