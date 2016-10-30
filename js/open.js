var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');
var showdown  = require('showdown');
var converter;
var html;
window.fileName;

$('#open').on('click',function(){
    dialog.showOpenDialog(function (fileNames) {
    
        if(fileNames === undefined){
           alert("No file selected");
        }else{
            fs.readFile(fileNames[0], 'utf-8', function (err, data) {
		        if(err){
		            alert("An error ocurred reading the file :" + err.message);
		            return;
		        }
		        window.fileName = fileNames[0];
	          	$(".setMarkdownTextarea").val(data);
   				converter = new showdown.Converter();
   				html = converter.makeHtml(data);
	          	$("#viewMarkdown").html(html);
    	    });
        }
     	
	});  
	
});


