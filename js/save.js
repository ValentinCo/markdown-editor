var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');
var content;
var listener = new window.keypress.Listener();
window.itIsSaved = true;

$('.setMarkdownTextarea').change(function(){
	window.itIsSaved = false;
	console.log(window.itIsSaved);
})

function saveAs(){
	content = $('.setMarkdownTextarea').val();

	dialog.showSaveDialog(function (fileName) {
        if (fileName === undefined){
           alert("You didn't save the file");
           return;
        }

        window.filePath = fileName;

        fs.writeFile(fileName, content, function (err) {
           if(err){
               alert("An error ocurred creating the file "+ err.message)
           }

           window.itIsSaved = true;
           alert("The file has been saved");
           return;
       });
	}); 
}

function save(){
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
    });
}


listener.simple_combo("ctrl shift s", saveAs);

$('#saveAs').on('click',function(){
	saveAs();	
})



listener.simple_combo("ctrl s", save);

$('#save').on('click',function(){
	save();
});



