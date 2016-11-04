(function(){

	$('#toolStrong').on('click', function(e){
		e.preventDefault();
		$('.setMarkdownTextarea').selection('insert',  {
		    text: '**',
		    mode: 'before'
		});
		$('.setMarkdownTextarea').selection('insert',  {
		    text: '**',
		    mode: 'after'
		});
	});
	$('#toolItalic').on('click', function(e){
		e.preventDefault();
		$('.setMarkdownTextarea').selection('insert',  {
		    text: '*',
		    mode: 'before'
		});
		$('.setMarkdownTextarea').selection('insert',  {
		    text: '*',
		    mode: 'after'
		});
	});
	$('#toolUrl').on('click', function(e){
		e.preventDefault();
		vex.dialog.open({
			message: 'Enter your url and url description',
			input : [
				"<input name='urlLink' type='text' placeholder='http://ilfaitbeau.com' required />",
				"<input name='urlDescription' type='text' placeholder='il fait beau' required />"
			].join(''),

			buttons: [
				$.extend({}, vex.dialog.buttons.YES, {text: 'Make url'}),
				$.extend({}, vex.dialog.buttons.NO, {text: 'Cancel'})
			],

			callback : function(data){
				if(!data){
					console.log('annulé');
				}else{
					$('.setMarkdownTextarea').selection('insert',  {
					    text: '[' + data.urlDescription + '](' + data.urlLink + ')',
					    mode: 'before'
					});
				}
			}


		});
	});
	$('#toolImg').on('click',function(e){
		e.preventDefault();
		vex.dialog.open({
			message: 'Enter your image and  description',
			input : [
				"<input name='imgLink' type='text' placeholder='http://ilfaitbeau.com' required />",
				"<input name='imgDescription' type='text' placeholder='il fait beau' required />"
			].join(''),

			buttons: [
				$.extend({}, vex.dialog.buttons.YES, {text: 'Make img'}),
				$.extend({}, vex.dialog.buttons.NO, {text: 'Cancel'})
			],

			callback : function(data){
				if(!data){
					console.log('annulé');
				}else{
					$('.setMarkdownTextarea').selection('insert',  {
					    text: '![' + data.imgDescription + '](' + data.imgLink + ')',
					    mode: 'before'
					});
				}
			}
		});
	})

	$('#toolCode').on('click',function(e){
		e.preventDefault();
		$('.setMarkdownTextarea').selection('insert',  {
		    text: "```",
		    mode: 'before'
		});
		$('.setMarkdownTextarea').selection('insert',  {
		    text: "```",
		    mode: 'after'
		});

	})
	$('#toolTitle').on('click',function(e){
		e.preventDefault();
		$('.setMarkdownTextarea').selection('insert',  {
		    text: '#',
		    mode: 'before'
		});
	})
	$('#toolHr').on('click',function(e){
		e.preventDefault();
		$('.setMarkdownTextarea').selection('insert',  {
		    text: '***',
		    mode: 'before'
		});
	})
})();
