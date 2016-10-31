var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');
var showdown  = require('showdown');
var listener = new window.keypress.Listener();
var converter;
var html;
window.filePath;

function open(){
	 dialog.showOpenDialog(function (fileNames) {
    
        if(fileNames === undefined){
           alert("No file selected");
        }else{
            fs.readFile(fileNames[0], 'utf-8', function (err, data) {
		        if(err){
		            alert("An error ocurred reading the file :" + err.message);
		            return;
		        }
		        window.filePath = fileNames[0];
		        $('title').html("Markdown Editor " + fileNames[0]);
	          	$(".setMarkdownTextarea").val(data);
   				converter = new showdown.Converter();
   				html = converter.makeHtml(data);
	          	$("#viewMarkdown").html(html);
    	    });
        }
     	
	});  
}

$('#open').on('click', open);
listener.simple_combo("ctrl o", open);


